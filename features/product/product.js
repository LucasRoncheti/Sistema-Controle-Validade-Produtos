let cond = false // to update or registration

// resize the image to put into thumbnail
let getImage = () => {
    var cameraInput = document.getElementById('cameraInput');

    cameraInput.addEventListener('change', function (event) {
        var file = event.target.files[0];

        if (!file) {
            console.log('Nenhuma imagem selecionada.');
            return;
        }

        const maxWidth1 = 900;

        var reader = new FileReader();

        reader.onload = function (e) {
            var img = new Image();

            img.onload = function () {

                const canvas1 = document.createElement('canvas');


                const aspectRatio1 = img.width / img.height;
                canvas1.width = maxWidth1;
                canvas1.height = maxWidth1 / aspectRatio1;
                const ctx1 = canvas1.getContext('2d');
                ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);

                var resizedImageURL = canvas1.toDataURL('image/jpeg', 0.4);

                document.getElementById('thumbnail').src = resizedImageURL;

            };

            img.src = e.target.result;

        };


        reader.readAsDataURL(file);

    });


    cameraInput.click();

};

// this function records product data in the database
let registerProduct = () => {
    let productName = document.getElementById('product').value;
    let productId = document.getElementById('productId').value;
    let imgElement = document.getElementById('thumbnail');


    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');


    const maxWidth = 900;
    const maxHeight = 900;


    let newWidth, newHeight;
    if (imgElement.width > imgElement.height) {
        newWidth = maxWidth;
        newHeight = (maxWidth / imgElement.width) * imgElement.height;
    } else {
        newWidth = (maxHeight / imgElement.height) * imgElement.width;
        newHeight = maxHeight;
    }

    canvas.width = newWidth;
    canvas.height = newHeight;


    ctx.drawImage(imgElement, 0, 0, newWidth, newHeight);

    if (productName === "") {
        alert('Preencha o nome do produto !')
        return
    } else if (productId === "") {
        alert('Preencha o ID do produto !')
        return
    } else {
        canvas.toBlob(function (blob) {
            let productForm = document.getElementById('formProducts');


            let formData = new FormData();
            formData.append('productName', productName);
            formData.append('productId', productId);
            formData.append('image', blob, 'image.jpg');



            fetch('./features/product/productRegistration.php', {
                method: 'POST',
                body: formData
            })
                .then((response) => response.text())
                .then(data => {
                    alert(data);
                    productForm.reset();
                    document.getElementById('thumbnail').src = "src/img/cameraicon.png";
                    listProducts()
                })
                .catch(error => {
                    console.error('Erro ao registrar o produto:', error);
                });
        }, 'image/jpeg', 0.4);

    }

}

// list products in the product page 

async function listProducts() {
    let containerList = document.getElementById('containerItensSave')

    const url = './features/product/toListProducts.php'

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

//delete products 
let deleteProducts = (productId, pathImag) => {



    pathCorreto = "../." + pathImag


    if (confirm("Tem certeza que deseja excluir este produto?")) {
        fetch('./features/product/deleteProduct.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                id: productId,
                image: pathCorreto
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {

                    console.log('Produto excluído com sucesso!');
                    listProducts()

                } else {
                    console.error('Erro ao excluir o produto:', data.error);
                }
            })
            .catch(error => {
                console.error('Erro na solicitação fetch:', error);
            });
    }
}

let colectData = (id) => {

    // data from product listed  in the ul 
    let thumbnailList = document.getElementById('thumbnailList' + id).src
    let nameList = document.getElementById('nameList' + id).textContent
    let idList = document.getElementById('idList' + id).textContent

    // inputs from update
    let productName = document.getElementById('product');
    productName.value = nameList

    let productId = document.getElementById('productId');
    productId.value = idList

    let imgElement = document.getElementById('thumbnail');
    imgElement.src = thumbnailList


    let inputId = document.getElementById('inputIdDataBase');
    inputId.value = id

    cond = true


}

let updateProduct = () => {

    let productName = document.getElementById('product').value;
    let productId = document.getElementById('productId').value;
    let imgElement = document.getElementById('thumbnail');
    let inputId = document.getElementById('inputIdDataBase').value

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');


    const maxWidth = 900;
    const maxHeight = 900;


    let newWidth, newHeight;
    if (imgElement.width > imgElement.height) {
        newWidth = maxWidth;
        newHeight = (maxWidth / imgElement.width) * imgElement.height;
    } else {
        newWidth = (maxHeight / imgElement.height) * imgElement.width;
        newHeight = maxHeight;
    }

    canvas.width = newWidth;
    canvas.height = newHeight;


    ctx.drawImage(imgElement, 0, 0, newWidth, newHeight);

    if (productName === "") {
        alert('Preencha o nome do produto !')
        return
    } else if (productId === "") {
        alert('Preencha o ID do produto !')
        return
    } else {
        canvas.toBlob(function (blob) {
            let productForm = document.getElementById('formProducts');


            let formData = new FormData();
            formData.append('productName', productName);
            formData.append('productId', productId);
            formData.append('image', blob, 'image.jpg');
            formData.append('id', inputId,);



            fetch('./features/product/productUpdate.php', {
                method: 'POST',
                body: formData
            })
                .then((response) => response.text())
                .then(data => {
                    alert(data);
                    productForm.reset();
                    document.getElementById('thumbnail').src = "src/img/cameraicon.png";
                    listProducts()
                    cond = false
                })
                .catch(error => {
                    console.error('Erro ao registrar o produto:', error);
                });
        }, 'image/jpeg', 0.4);

    }

}

let Register_OR_Update = () => {
    if (!cond) {
        registerProduct()
    } else {
        updateProduct()
    }
}

