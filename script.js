
function menuTricks(){
    let menu = document.querySelector('#menuBar')
    let menuList = document.querySelector('.menu')

    menu.addEventListener('click',function(){
        // menuList.style.display = 'block';
        menuList.style.backgroundColor = "red";

        console.log('hello')
    })
}