


let validade = () => {

    mainContainer.innerHTML = `
    
    <div class="containerSaveProductsExpiration">
    <div id="productImageExpiration" class="productImageExpiration">
        <img id="imgProductExpiration" style="width: 100%;" src="src/img/favico.png" alt="">
    </div>

    <form id="formExpirationDate" class="containerForms">
        <div class=" formProductsExpirationNameProduct">

            <div class="productForm">
                <label for="product">Nome do Produto</label>
                <input id="productExpiration" name="product" type="text">
            </div>

            <div class=" isExpirationForm">
                <label for="idValidade">ID validade</label>
                <input id="idProductExpiration" name="idValidade" type="text">
            </div>



        </div>

        <div class="formProductsExpiration">

            <div class="containerInputs">
                <label for="buyDate">Data Compra</label>
                <input id="buyDate" name="buyDate" type="date">
            </div>

            <div class="containerInputs">
                <label for="expirationDate">Data Vallidade</label>
                <input id="expirationDate" name="expirationDate" type="date">
            </div>

            <div class="containerInputs">
                <label for="amount">Quantidade</label>
                <input id="amount" name="amount" type="number">
            </div>

        </div>
    </form>

    <button onclick="registerExpirationDate()" class=" green saveProductButtonExpiration">
        <i class="bi bi-floppy2-fill"></i>
    </button>
</div>


<div class="map">
    <img  id="map"  src="src/img/plantaBaixa.jpg" alt="PlantaBaixa">
</div>
<div class="containerInputsMap">
    <input id="inputRange" step="10" class="inputRange" type="range">

    <div class="containerSelect">
        <i class="bi bi-list-nested"></i>
        <select class="selectFloor" name="floor" id="selectFloor">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
        </select>
    </div>
</div>

<button onclick="openList()" class="displayFlexColumn OpenList ">
    <i class="bi bi-card-checklist"></i>
</button>

<div id="containerListExpiraionDate" class="containerListExpiraionDate">

    <button onclick="openList()" class="displayFlexColumn OpenList ">
        <i class="bi bi-card-checklist"></i>
    </button>


    <div class="containerSearchBarSave">
        <div class=" green SearchIcon"><i class="bi bi-search"></i></div>
        <input id="searchBarProducts" class="searchBarProducts" type="text">
    </div>



    <ul id="containerItens" class=" containerItensExpiration">

        <li class="item">
            <div class="imgItem">
                <img src="src/img/favico.png" alt="">
            </div>
            <p class="productP">Óleo dada de coco</p>
            <p class="dateP">12/12/23</p>
            <div class=" green tagColor"></div>
        </li>

    </ul>

</div>




    `
    listProductsValidadePage()

    let searchBar = document.getElementById('searchBarProducts');

    searchBar.addEventListener('input', () => {

        fetch('./features/expirationDate/searchProduct.php', {
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
                alert(error.message);
            });
    })


}



