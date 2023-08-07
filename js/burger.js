const IconMenu = document.querySelector('.burger__icon')
if (IconMenu) {
    const menuBody = document.querySelector('.burger__body')
    IconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        IconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}