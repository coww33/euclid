document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.HowWeWork__step-link').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.HowWeWork__consultation-fullblock').forEach(function(tabContent){
                tabContent.classList.remove('HowWeWork__consultation-fullblock-active')
            })
            document.querySelector(`[data-target= "${path}"]`).classList.add('HowWeWork__consultation-fullblock-active')
        })
    })
})