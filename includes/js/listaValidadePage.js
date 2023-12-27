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

                    <li class="item">
                        <div class="imgItem">
                            <img src="src/img/favico.png" alt="">
                        </div>
                        <p class="productP">Óleo de coco</p>
                        <p class="dateP">12/12/23</p>
                        <div class=" green tagColor"></div>
                    </li>

                </ul>



    `
}



listaValidade()