document.addEventListener('DOMContentLoaded', () => {
    const stackedBars = document.getElementById('stackedBars')
    const navList = document.getElementById('navigation-bar')

    function toggleButton() {
        navList.classList.toggle('show')
    }

    stackedBars.addEventListener('click', toggleButton)



  
})