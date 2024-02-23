let mainContainer = document.getElementById('containerList')

var listaValidade = () => {


    mainContainer.innerHTML = `
    
                <div class="searchBar">
                    <p>CONTROLE DE VALIDADE DOS PRODUTOS</p>

                    <div class="searchContainer">
                        <div class="containerForm">
                            <div class="formDate">
                                <img src="" alt="">
                                <input id="date01" title="de" type="date">
                                <i class="bi bi-arrow-bar-right"></i>
                                <img src="" alt="">
                                <input id="date02" title="ate" type="date">
                                <button onclick="orderListBydates()"  title="sendSearch" ><i class="bi bi-search"></i></button>
                            </div>
    
                        </div>
                     
                        <div class="containerQuickSerach">

                            <div  onclick="orderListByDays(1)" class=" green quickSearch">
                                <p>2 MESES </p>
                            </div>
    
                            <div onclick="orderListByDays(2)" class=" orange quickSearch">
                                <p>1 MÊS</p>
                            </div>
    
                            <div onclick="orderListByDays(3)" class=" red    quickSearch">
                                <p>15 DIAS</p>
                            </div>


                            <div onclick="orderListByDays(4)" class=" black    quickSearch">
                            <p class="bellBlack"><i  class="  bi bi-bell-fill"></i></p>
                            </div>

                            
                        </div>
                     

                    </div>

            
                </div>



                <div  class="containerSearchBarSave containerSearchBarSaveListaValidade">
                    <div class=" green SearchIcon"><i class="bi bi-search"></i></div>
                    <input id="searchBarProducts" class="searchBarProducts" type="text">
                </div>
            
                <ul id="containerItens" class="containerItens">

                

                </ul>


                <div id="containerInfoProducts" class=" displayNone containerInfoProducts">
                   
                </div>


    `
    listProductsListaValidadePage()


    let searchBar = document.getElementById('searchBarProducts')

    searchBar.addEventListener('input', () => {

        fetch('./features/expirationDate/searchProductListaValidade.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'searchBar=' + encodeURIComponent(searchBar.value),
        })
            .then(response => response.text())
            .then(data => {
                document.getElementById('containerItens').innerHTML = data

            })
            .catch(error => {
                alert(error.message)
            });
    })

}

listaValidade()



   // Variável para controlar o temporizador quando clicar e segurar o mouse ou o dedo 
   var timeout;

// this function shows the popUp with the map and data of the selected product

let popUpInfoProducts = (buyDate, selectFloor, inputRange, srcmapa) => {

    clearTimeout(timeout);

    const containerMap = $('#containerInfoProducts')
    containerMap.html(`
        <span onclick="popUpInfoProductsClose()" class="span"><i class="bi bi-x-circle"></i></span>
        <p> Data Compra:<strong> ${buyDate}</strong> </p>
      
        <p> Prateleira:<strong> ${selectFloor}</strong> </p>
        <img src="${srcmapa}"> 
   
   `)
    containerMap.removeClass('displayNone')
  

}


let popUpInfoProductsClose = () => {

    const containerMap = $('#containerInfoProducts')
    containerMap.addClass('displayNone')
}


////////////////////////    FUNÇÕES QUE DELETAM A VALIDADE NA LISTA DE VALIDADE   ///////////////////////////////////////////////////////////
    
 

    // Função que será executada quando o mouse é pressionado sobre o elemento
    function mouseDownAction(element) {
        console.log('Mouse pressionado');
        // Define um tempo para iniciar a ação após 500 milissegundos (0.5 segundos)
        timeout = setTimeout(function () {
            startAction(element); // Chama a função startAction após 500 milissegundos
        }, 500);
    }

    // Função que será executada após o tempo definido em mouseDownAction
    function startAction(element) {
        console.log('Ação iniciada!');
        // Coloque aqui o código da sua função
        // Por exemplo, você pode alterar a cor de fundo do elemento:
        element.style.backgroundColor = 'red';
    }

    // Função que será chamada quando o mouse for solto antes do tempo definido
    function stopAction() {
        console.log('Ação interrompida!');
        // Limpa o temporizador se o mouse for solto antes do tempo definido
        clearTimeout(timeout);
    }


 ///// código para a tela em touch 

    // Função que será executada quando o toque é iniciado sobre o elemento
    function touchStartAction(element) {
        console.log('Toque iniciado');
        // Define um tempo para iniciar a ação após 500 milissegundos (0.5 segundos)
        timeout = setTimeout(function() {
            startAction(element); // Chama a função startAction após 500 milissegundos
        }, 500);
    }

    // Função que será executada após o tempo definido em touchStartAction
    function startAction(element) {
        console.log('Ação iniciada!');
        // Coloque aqui o código da sua função
        // Por exemplo, você pode alterar a cor de fundo do elemento:
        element.style.backgroundColor = 'red';
    }

    // Função que será chamada quando o toque for interrompido antes do tempo definido
    function touchEndAction() {
        console.log('Toque interrompido!');
        // Limpa o temporizador se o toque for interrompido antes do tempo definido
        clearTimeout(timeout);
    }



// order the list by a predate set (2 months or 1 month example)
let orderListByDays = (days) => {
    let date = "";
    switch (days) {
        case 1:
            date = "+60 days"

            break;
        case 2:
            date = "+30 days"
            break;
        case 3:
            date = "+15 days"
            break;
        case 4:
            date = "0000-00-00"

            break;
        default:
            alert("Invalid number of days.")
            return;
    }

    fetch('./features/expirationDate/orderListByDays.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date }),
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('containerItens').innerHTML = data
        })
        .catch(error => {
            console.error(error.message)
        })
};


// order by two dates 00/00/00/-> 11/11/11 example 

let orderListBydates = () => {
    let date01 = document.getElementById('date01').value
    let date02 = document.getElementById('date02').value


    fetch('./features/expirationDate/orderListByDates.php', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date01, date02 }),
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('containerItens').innerHTML = data
        })
        .catch(error => {
            console.error(error.message)
        })
}
