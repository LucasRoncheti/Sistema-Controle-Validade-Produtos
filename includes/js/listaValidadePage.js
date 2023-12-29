let mainContainer = document.getElementById('containerList')

var listaValidade = () => {


    mainContainer.innerHTML = `
    
    <div class="searchBar">
                    <p>CONTROLE DE VALIDADE DOS PRODUTOS</p>
                    <div class="searchContainer">
                        <div class="containerForm">
                            <form class="formDate">
                                <img src="" alt="">
                                <input id="" title="de" type="date">
                                <i class="bi bi-arrow-bar-right"></i>
                                <img src="" alt="">
                                <input title="até" type="date">
                                <button  title="sendSearch" type="submit"><i class="bi bi-search"></i></button>
                            </form>
    
                        </div>
                     
                        <div class="containerQuickSerach">

                            <div  class=" green quickSearch">
                                <p>2 MESES</p>
                            </div>
    
                            <div class=" orange quickSearch">
                                <p>1 MÊS</p>
                            </div>
    
                            <div class=" red    quickSearch">
                                <p>15 DIAS</p>
                            </div>
                        </div>
                     

                    </div>
                </div>
                <ul id="containerItens" class="containerItens">

                

                </ul>


                <div id="containerInfoProducts" class=" displayNone containerInfoProducts">
                   
                </div>


    `
    listProductsListaValidadePage()
    console.log('chamndo lista ')
}

listaValidade()




// this function shows the popUp with the map and data of the selected product



let popUpInfoProducts = (buyDate,selectFloor,inputRange,srcmapa) => {

    const containerMap =  $('#containerInfoProducts')
    containerMap.html(`
        <span onclick="popUpInfoProductsClose()" class="span"><i class="bi bi-x-circle"></i></span>
        <p> Data Compra: ${buyDate} </p>
        <p> Posição no mapa:${inputRange} </p>
        <p> Posição na prateleira:${selectFloor} </p>
        <img src="${srcmapa}"> 
   
   `)
   containerMap.removeClass('displayNone')
 
}   


let popUpInfoProductsClose = ()=>{
    
    const containerMap =  $('#containerInfoProducts')
    containerMap.addClass('displayNone')
}


