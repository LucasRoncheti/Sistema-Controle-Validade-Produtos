// function that switches between the selected page

const span = document.getElementById('spanTogglePage');
const mainContainerSpan = document.getElementById('mainContainerSpan');



var  positionSpan = 0
var targetPosition = 0


var teste = targetPosition / 10


// get the span and takes it to the button position 
let runToPosition = () => {
    if (positionSpan <= targetPosition) {
        span.style.left =(positionSpan )+ "px"
        positionSpan ++ 
    
    }else if (positionSpan >= targetPosition) {
        span.style.left = (positionSpan - 1 ) + "px"
        positionSpan--
        
    }
}

setInterval(runToPosition,1)


//  select the objects and calculate where the span will be delivered

let selectedPage = (multiply) => {


    let offsetSpan = span.offsetWidth;
    let mainContainerWidth = mainContainerSpan.offsetWidth;
    let mainContainerPosition = mainContainerSpan.getBoundingClientRect().left

    let spansWidth = offsetSpan * 4
    let sizeCalculated = mainContainerWidth - spansWidth
    let spaceBetweenSpans = sizeCalculated / 3
   

    if (multiply === 1) {
        targetPosition = 0 
        runToPosition()
      
    } else if (multiply === 2) {
        targetPosition = offsetSpan + spaceBetweenSpans * 1
        runToPosition()
    } else if (multiply === 3) {
        targetPosition = (offsetSpan * 2) + spaceBetweenSpans * 2
        runToPosition()
    } else {
        targetPosition = (offsetSpan * 3) + spaceBetweenSpans * 3
        runToPosition()
    }
   
}




