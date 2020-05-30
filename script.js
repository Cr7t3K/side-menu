function openMenu() {
    let sideMenu = document.querySelector('.side-menu-container')
    sideMenu.style.width = "300px";

    function showCloseButton() {
        document.querySelector('.side-menu-close').style.display = 'block';
    }
    setTimeout(showCloseButton, 100);
}

function closeMenu() {
    let sideMenu = document.querySelector('.side-menu-container')
    sideMenu.style.width = "";

    function hideCloseButton() {
        document.querySelector('.side-menu-close').style.display = 'none';
    }
    hideCloseButton()
}