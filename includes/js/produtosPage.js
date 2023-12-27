

let produtos = () => {
    mainContainer.innerHTML = `
    
   
    <div class="containerSaveProducts">
        <div onclick="getImage()"  class="productImage">
            <img id="thumbnail" style="width: 100%;" src="src/img/cameraicon.png" alt="">
        </div>
        <form id="formProducts" class="formProducts">
            <input type="file" value="" accept="image/*" capture="environment" id="cameraInput" style="display:none;">
            <input id="inputIdDataBase" type="hidden" value="">
            <label for="product">Nome do Produto</label>
            <input id="product" name="product" type="text">
            <label for="id">ID Produto</label>
            <input id="productId" name="id" type="number">
        </form>
        <button onclick="Register_OR_Update()" class=" green saveProductButton">
            <i class="bi bi-floppy2-fill"></i>
        </button>
    </div>

    <div class="containerSearchBarSave">
        <div class=" green SearchIcon"><i class="bi bi-search"></i></div>
        <input class="searchBarProducts" type="text">
    </div>

    <ul id="containerItensSave" class="containerItensSave">

     
                    
    </ul>


`
listProducts()
}