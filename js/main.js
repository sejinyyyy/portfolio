$(document).ready(function(){
    


    let vid = $(this).find('video').get(0);
       vid.currentTime = 0; 
       vid.play();




       $('.gnb li').on('click',function(){

        let i = $(this).index();
        $('html, body').animate({
            'scrollTop' : $('#wrap section').eq(i).offset().top - 150
        })

       })

    });

