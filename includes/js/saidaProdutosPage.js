


let saidaProdutos = () => {
    mainContainer.innerHTML = `


    <div class="containerBarCode">
        <img class="barCodeImg" src="./src/img/barCode.gif" alt="">
        <button id="btn-quantidade-produtos-prateleira" class="btn-quantidade-produtos-prateleira">Produtos Zerados</button>
        <form  id="formDecreaseAmount" action="submit">
            <input  id="inputBarCode" class="inputBarCode" type="text">
            <button style="display:none;" type="submit">teste </button>
        </form>

        <div id="productsData" class="productsData">


        </div>
    </div>
    
    `


    // mantain the input in focus aways 

    let input = document.getElementById('inputBarCode');

    let inputCodeBar = () => {
        if (input) {

            document.addEventListener('DOMContentLoaded', function () {
                input.focus()
            })


            document.addEventListener('click', function (event) {
                const clicouNoInput = event.target === input;


                if (!clicouNoInput) {
                    input.focus();
                }
            })
        } else {

        }
    }

    inputCodeBar()



    // Decrease the amout of the products expiration Date 

    let form = document.getElementById('formDecreaseAmount')



    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let inputBarCode = document.getElementById('inputBarCode').value
        const formData = new FormData(this);
        formData.append('inputBarCode', inputBarCode)




        fetch('./features/expirationDate/decreaseAmout.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {

                document.getElementById('productsData').innerHTML = data
                setTimeout(() => {
                    form.reset()
                }, 2000)

            })
            .catch(error => {
                console.error('Erro:', error.message)
            });
    });
}



