





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
        audio("error")

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
        audio("error")

    }

}


//selects the list of products to a list of products with validity

let selectProduct = (id, img, name) => {

    let imgProductExpiration = $('#imgProductExpiration')
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

    let inputBell = $('#inputMoreDays').val()




    if (productExpiration === "" || idProductExpiration === "" || buyDate === "" || expirationDate === "" || amount === "" || selectFloor === "" || inputRange === 0) {
        audio("error")
        alert("preencha todos os campos ")



    } else {

        let formData = new FormData()
        formData.append('productImageExpiration', productImageExpiration)
        formData.append('productExpiration', productExpiration)
        formData.append('idProductExpiration', idProductExpiration)
        formData.append('buyDate', buyDate)
        formData.append('expirationDate', expirationDate)
        formData.append('amount', amount)
        formData.append('selectFloor', selectFloor)
        formData.append('inputRange', inputRange)
        formData.append('imageMap', imageMap)
        formData.append('inputBell', inputBell)


        fetch('./features/expirationDate/expirationDateRegistration.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else if (response.status === 409) {
                    audio("error")
                    throw new Error('Conflito: NúmeroId já existe no banco de dados.');
                } else {
                    audio("error")
                    throw new Error('Erro ao salvar: ' + response.status);
                }
            })
            .then(data => {
                audio("sucesso")
                alert(data);
                validade();
            })
            .catch(error => {
                audio("error")
                alert('Erro ao salvar: ' + error.message);
            });



    }


}
