let list = document.getElementById('containerListExpiraionDate');


let conditional = true;

let openList = () => {
    if (conditional) {
        list.classList.add('animationOpen');
        list.classList.remove('animationClose');
        conditional = false;
    } else {
        list.classList.add('animationClose');
        list.classList.remove('animationOpen');
        conditional = true;
    }
};
