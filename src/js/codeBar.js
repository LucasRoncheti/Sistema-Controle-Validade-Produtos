// this function gerenate all the Bar Codes


///////////// Elements //////////
let page = document.getElementById('a4')
let checkbox = document.getElementById('checkbox')
let totalQuantity = document.getElementById('totalQuantity')
let nameElement = document.getElementById('name')
let svgQuantity = document.querySelectorAll('.barcode')
////////////////////////////////



// Função para verificar e obter o número armazenado no localStorage
const getStoredNumber = () => {
    const storedNumber = localStorage.getItem('myNumber');

    if (storedNumber) {
        return parseInt(storedNumber, 10); // Converte para número
    } else {
        const defaultNumber = 1000000; // Número padrão se não houver valor armazenado
        localStorage.setItem('myNumber', defaultNumber);
        return defaultNumber;
    }
};
// Função para salvar um novo número no localStorage
const saveNumber = (mainIndex) => {
    localStorage.setItem('myNumber', mainIndex);
};



////////////////////////////////


function check() {
    if (checkbox.checked) {
        nameElement.style.display = "block";
    } else {
        nameElement.style.display = "none";
        conditionalCopy = false
    }
}

// this array save the page 
let codesArray = []

// index of the  current bar code 
let mainIndex = getStoredNumber()

let quantity = totalQuantity.value



let rowCodes = 1

let conditionalCopy = false

document.getElementById('idNumber').innerHTML = "Id: " + mainIndex

let generate = () => {

    let quantity = totalQuantity.value
    let name = nameElement.value

    if (!conditionalCopy) { mainIndex++; conditionalCopy = true }

    if (checkbox.checked) {// to do copys 



        if (codesArray.length < 65 && rowCodes <= 13) {

            for (let i = 0; i < quantity; i++) {

                let codeObject = {
                    name: name,
                    number: mainIndex
                }

                codesArray.push(codeObject)
            }

        }
    } else {


        if (codesArray.length < 65 && rowCodes <= 13) { // to do normal coedes

            for (let i = 0; i < quantity; i++) {

                let codeObject = {
                    name: name,
                    number: mainIndex++
                }

                codesArray.push(codeObject)
            }

        }
    }



    generateCodes()
    rowCodes++
    document.getElementById('idNumber').innerHTML = "Id: " + mainIndex
    saveNumber(mainIndex);
    console.log('Número atualizado:', getStoredNumber());
}


let generateCodes = () => {

    for (let i = 0; i < codesArray.length; i++) {

        let className = 's' + codesArray[i].number
        page.innerHTML +=

            `
            <div class="containerBarcode">
                <p>${codesArray[i].name}</p>
                <svg  class="barcode ${className}"></svg>
            
            </div>

            `
        let barCodes = document.querySelectorAll('.' + className);
        barCodes.forEach(function (element) {

            JsBarcode(element, codesArray[i].number, {
                format: "CODE128",
                lineColor: "#000000",
                width: 1.5,
                height: 35,
                displayValue: true
            });

        });
    };

    codesArray = []


}

let reload = ()=>{
    window.location.reload()
}


getStoredNumber()




