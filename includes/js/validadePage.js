


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
                <input onclick="openList()" id="productExpiration" name="product" type="text" readonly>
            </div>

            <div class=" isExpirationForm">
                <label for="idValidade">ID validade</label>
                <input id="idProductExpiration" name="idValidade" type="number">
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
                <input  value="1" id="amount" name="amount" type="number">
            </div>

        </div>
    </form>

    <div class="bellDate">
    <i id="bellSlash" class="bi bi-bell-slash cursorPointer"></i>
    <i  id="bellFill" class="displayNone  bi bi-bell-fill cursorPointer"></i>
    <input  class="displayNone" type="date" id="inputMoreDays">
    </div>

    <button onclick="registerExpirationDate()" class=" green saveProductButtonExpiration">
        <i class="bi bi-floppy2-fill"></i>
    </button>
</div>


<div class="map">
    <img  class="mapImage"  id="map"  src="src/img/mapasVersoes/0.png" alt="PlantaBaixa">
</div>

<div class="containerInputsMap">

    <div class="containerRange">
        <input  value = "0"id="inputRange" class="inputRange" type="range">

        <div id="inputRangeMarks" class=" inputRangeMarks"> 
        <span>0</span>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>#</span>
        <span>H</span>
        <span>I</span>
        <span>J</span>
        <span>L</span>
        <span>M</span>
        <span>[/]</span>
        <span>N</span>
        <span>O</span>
        <span>P</span>
        <span>Q</span>
        <span>R</span>
        <span>S</span>
        <span>T</span>
        <span>U</span>
        <span>V</span>
        <span>X</span>
        <span>Z</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>0</span>
        </div>
    
    </div>
    <div class="containerSelect">
        <p>Posição ne prateleira</p>
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



    const inputRange = document.getElementById("inputRange")
    let map = document.getElementById("map")
    
    inputRange.addEventListener("change",()=>{

        inputStep = 2.631578947368421
        inputRange.setAttribute("step", inputStep)
        stepPosiction = inputRange.value / inputStep
        const resultadoArredondado = stepPosiction.toFixed(0); 

        map.src = "src/img/mapasVersoes/"+resultadoArredondado+".png"
     
        
    } )




    // change  the bell symbol and show the input field 
    const bellSlash = document.getElementById('bellSlash');
    const bellFill = document.getElementById('bellFill');
    const inputMoreDays = document.getElementById('inputMoreDays');
    
    bellSlash.addEventListener('click', () => {
       inputMoreDays.classList.toggle('displayNone');
       bellFill.classList.toggle('displayNone');
       bellSlash.classList.toggle('displayNone');
       bellFill.style.color = "red"
    })

    bellFill.addEventListener('click', () => {
        inputMoreDays.classList.toggle('displayNone');
        bellFill.classList.toggle('displayNone');
        bellSlash.classList.toggle('displayNone');
     })
 

    

   // get the id number and compare it with the id number in the database, after returning with the server response

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
    
    listProductsValidadePage()

}



