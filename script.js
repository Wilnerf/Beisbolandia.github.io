jQuery('document').ready(function($){
   var menuBtn = $('.menu-header')
        menu = $('.navegacion ul');
    
        menuBtn.click(function(){
            if(menu.hasClass('show')) {
                menu.removeClass('show'); 
            }else{
                menu.addClass('show');
            }
            
        });
        window.onscroll = function(){
            if(document.documentElement.scrollTop > 100){
                document.querySelector('.go-top-container')
                .classList.add('show-btn');
            }else{
                document.querySelector('.go-top-container')
                .classList.remove('show-btn');
            }
        }
   
    });