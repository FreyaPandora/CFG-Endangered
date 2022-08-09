//nav bar 


const togglebutton = document.getElementById('toggle-button');
const navilist = document.getElementById('navilist');


togglebutton.addEventListener('click', ()=>{
        navilist.classList.toggle('active');

        $(".menu").clickOutsideThisElement(function() {
            // Hide the menus
            navilist.classList.toggle('active');

        });

})