





//this function shows the list of products and  expiration date  within the "Lista Validade" page 
async function listProductsListaValidadePage() {
    let containerList = document.getElementById('containerItens')

    const url = './features/expirationDate/expirationList.php'

    try {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Erro na listagem dos produtos ")
        }

        const data = await response.text()
        containerList.innerHTML = data
    } catch (error) {


        alert("Erro na requisição" + error.message)

    }

}

//this function shows the list of products within the "Validade" page 

async function listProductsValidadePage() {
    let containerList = document.getElementById('containerItens')

    const url = './features/expirationDate/toListProducts.php'

    try {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Erro na listagem dos produtos ")
        }

        const data = await response.text()
        containerList.innerHTML = data
    } catch (error) {


        alert("Erro na requisição" + error.message)

    }

}


let selectProduct = (id, img, name) => {

    let  imgProductExpiration =  $('#imgProductExpiration')
    let productExpiration = $('#productExpiration')
    imgProductExpiration.attr('src', img)
    productExpiration.val(name)

    openList()
}


let registerExpirationDate = () => {
    let productImageExpiration = $('#imgProductExpiration').attr('src')
    let productExpiration = $('#productExpiration').val()
    let idProductExpiration = $('#idProductExpiration').val()
    let buyDate = $('#buyDate').val()
    let expirationDate = $('#expirationDate').val()
    let amount = $('#amount').val()
    let selectFloor = $('#selectFloor').val()
    let inputRange = $('#inputRange').val()
    let imageMap = $('#map').attr('src')

    console.log(
        productImageExpiration,
        productExpiration,
        idProductExpiration,
        buyDate,
        expirationDate,
        amount,
        selectFloor,
        inputRange,
        imageMap
    )

   let  formData = new FormData()
    formData.append('productImageExpiration',productImageExpiration) 
    formData.append('productExpiration',productExpiration) 
    formData.append('idProductExpiration',idProductExpiration) 
    formData.append('buyDate',buyDate) 
    formData.append('expirationDate',expirationDate) 
    formData.append('amount',amount) 
    formData.append('selectFloor',selectFloor) 
    formData.append('inputRange',inputRange) 
    formData.append('imageMap',imageMap) 
    
    fetch('./features/expirationDate/expirationDateRegistration.php',{
        method: 'POST',
        body: formData
    })
    .then((response => response.text()))
    .then(data=>{
        alert(data)
    })
    .catch(error=>{
        console.log('Erro ao salvar', error)
    })

}
