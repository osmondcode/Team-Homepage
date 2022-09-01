const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink))




let click = document.querySelector(".dropdown-link");

function dropDown(){
    if (click.style.display == 'none'){
        click.style.display = 'flex';
    }else {
        click.style.display = 'none'
    }
}