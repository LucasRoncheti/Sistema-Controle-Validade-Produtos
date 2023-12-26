

let produtos = () => {
    mainContainer.innerHTML = `
    
   
    <div class="containerSaveProducts">
        <div onclick="getImage()"  class="productImage">
            <img id="thumbnail" style="width: 100%;" src="src/img/favico.png" alt="">
        </div>
        <form id="formProducts" class="formProducts">
            <input type="file" value="" accept="image/*" capture="environment" id="cameraInput" style="display:none;">

            <label for="product">Nome do Produto</label>
            <input id="product" name="product" type="text">
            <label for="id">ID Produto</label>
            <input id="productId" name="id" type="number">
        </form>
        <button onclick="registerProduct()" class=" green saveProductButton">
            <i class="bi bi-floppy2-fill"></i>
        </button>
    </div>

    <div class="containerSearchBarSave">
        <div class=" green SearchIcon"><i class="bi bi-search"></i></div>
        <input class="searchBarProducts" type="text">
    </div>

    <ul id="containerItensSave" class="containerItensSave">

        <li class="itemSave">
            <div class="imgItemSave">
                <img src="src/img/favico.png" alt="">
            </div>
            <p class="productPSave">Óleo de coco</p>
            <p class="IdProductSave">000000001</p>
            <div class="tagColorSave">
                <i  class="bi bi-pencil-fill"></i>
                <i class="bi bi-trash-fill"></i>
            </div>
        </li>
                    
    </ul>


`
}