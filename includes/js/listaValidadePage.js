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





// this function shows the popUp with the map and data of the selected product

let popUpInfoProducts = (buyDate, selectFloor, inputRange, srcmapa) => {

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
