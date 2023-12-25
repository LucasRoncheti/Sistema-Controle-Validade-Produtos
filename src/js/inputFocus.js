
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
    }else{

    }
}


inputCodeBar()