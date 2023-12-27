




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


        alert("Erro na requisição", error)

    }

}


let selectProduct = (id, img, name) => {

    let  imgProductExpiration =  $('#imgProductExpiration')
    let productExpiration = $('#productExpiration')
    imgProductExpiration.attr('src', img)
    productExpiration.val(name)

    openList()
}
