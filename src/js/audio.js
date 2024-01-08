

let audio = (condicao) => {
    // audios que será usados nos avisos 

    var secesso = new Audio('./src/audio/sucesso.mp3')
    var error = new Audio('./src/audio/error.mp3')


    switch(condicao){
        case "sucesso":
            secesso.play()
            break;
        case "error":
            error.play()
            break;
           
    }
 }
