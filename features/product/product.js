
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
        const maxHeight1 = 900; 
        const quality1 = 0.4;

        
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
        })
        .catch(error => {
            console.error('Erro ao registrar o produto:', error);
        });
    }, 'image/jpeg',0.4);
}



