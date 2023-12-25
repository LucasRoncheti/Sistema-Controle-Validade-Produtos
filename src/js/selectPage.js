// function that switches between the selected page

const span = document.getElementById('spanTogglePage');
const mainContainerSpan = document.getElementById('mainContainerSpan');

// receives the id of the last div that received the selected class
var idPreviwDiv = expirationList


var positionSpan = 0

var targetPosition = 0



// get the span and takes it to the button position 
let runToPosition = (id) => {

    if (positionSpan <= targetPosition) {
        span.style.left = (positionSpan) + "px"
        positionSpan++

    } else if (positionSpan >= targetPosition) {
        span.style.left = (positionSpan - 1) + "px"
        positionSpan--

    }



}

setInterval(runToPosition, 1)


//  select the objects and calculate where the span will be delivered

let selectedPage = (numberIndex, id) => {


    let idDiv = document.getElementById(id)


    
    let changeClass = () => {
        if (idDiv.classList.contains("selected")) {
            return
        } else {
            idDiv.classList.add("selected")
            idDiv.classList.remove('red')
            idPreviwDiv.classList.remove("selected")
            idPreviwDiv.classList.add("red")
        }
    }


    // calculate the sizes and positions for the span psrcorrer the div

    let offsetSpan = span.offsetWidth;
    let mainContainerWidth = mainContainerSpan.offsetWidth;
    let spansWidth = offsetSpan * 4
    let sizeCalculated = mainContainerWidth - spansWidth
    let spaceBetweenSpans = sizeCalculated / 3


    if (numberIndex === 1) {
        targetPosition = 0

        changeClass()
        idPreviwDiv = idDiv
        runToPosition()

    } else if (numberIndex === 2) {
        targetPosition = offsetSpan + spaceBetweenSpans * 1

        changeClass()
        idPreviwDiv = idDiv
        runToPosition()

    } else if (numberIndex === 3) {
        targetPosition = (offsetSpan * 2) + spaceBetweenSpans * 2
   
        changeClass()
        idPreviwDiv = idDiv
        runToPosition()

    } else {
        targetPosition = (offsetSpan * 3) + spaceBetweenSpans * 3
       
        changeClass()
        idPreviwDiv = idDiv
        runToPosition()

    }

}






