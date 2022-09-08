// SCRIPT FOR RESPONSIVE NAVIGATION BAR
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink))
// SCRIPT FOR RESPONSIVE NAVIGATION BAR


// SCRIPT FOR DROPDOWN LINK
let click = document.querySelector(".dropdown-link");

function dropDown(){
    if (click.style.display == 'none'){
        click.style.display = 'flex';
    }else {
        click.style.display = 'none'
    }
}
// SCRIPT FOR DROPDOWN LINK


        // SCRIPT FOR LIKE BUTTON

// SCRIPT FOR FIRST LIKE BUTTON
let likedII = document.querySelector(".gold-ii");
let unlikedII = document.querySelector(".grey-ii");

function likeeII(){
    if (likedII.style.display == 'none'){
        likedII.style.display = 'flex';
        unlikedII.style.display = 'none';
    }else {
        likedII.style.display = 'none';
        unlikedII.style.display = 'flex';
    }
};
// SCRIPT FOR FIRST LIKE BUTTON


// SCRIPT FOR SECOND LIKE BUTTON
let liked = document.querySelector(".gold");
let unliked = document.querySelector(".grey");

function likee(){
    if (liked.style.display == 'none'){
        liked.style.display = 'flex';
        unliked.style.display = 'none';
    }else {
        liked.style.display = 'none';
        unliked.style.display = 'flex';
    }
}

// SCRIPT FOR SECOND LIKE BUTTON
            // SCRIPT FOR LIKE BUTTON

            // SCRIPT FOR REPORT DROP-DOWN LINK

// SCRIPT FOR FIRST DROP-DOWN LINK
let reportDrop = document.querySelector(".report-dropdown-1");

function dropReport(){
    if (reportDrop.style.display == 'none'){
        reportDrop.style.display = 'flex';
    }else {
        reportDrop.style.display = 'none'
    }
};
// SCRIPT FOR FIRST DROP-DOWN LINK


// SCRIPT FOR SECOND DROPDOWN LINK
let reportDropii = document.querySelector(".report-dropdown-2");

function dropReportII(){
    if (reportDropii.style.display == 'none'){
        reportDropii.style.display = 'flex';
    }else {
        reportDropii.style.display = 'none'
    }
}
// SCRIPT FOR SECOND DROPDOWN LINK

            // SCRIPT FOR REPORT DROP-DOWN LINK



            // SCRIPT FOR RESPONSIVE SEARCH BAR
let extendSearch = document.querySelector('.s-icon');
let searchInput = document.querySelector('#input');

function increase(){
    if (extendSearch.style.width == 'auto' && searchInput.style.display == 'none'){
        extendSearch.style.width = '60%';
        searchInput.style.display = 'flex';
    }else {
        extendSearch.style.width = 'auto';
        searchInput.style.display = 'none';
    }
}
            // SCRIPT FOR RESPONSIVE SEARCH BAR