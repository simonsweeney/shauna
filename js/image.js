$(document).ready(function(){

    // var timeout = null;
    
    // var $imgs = $('.home_images img'),
    //     imgCount = $imgs.length;


        
    // var imgUrls = [];
        
    // for (i = 0; i < imgCount; i++) {
    //     var url = $imgs.eq(i).attr('src');
    //     imgUrls.push(url);
    // }
    


    // var $container = $('.image-container'),
    //     $containerImg = $('.image-container img'),
    //     containerW = $container.width(),
    //     containerH = $container.height();
    
    
    
    
    
    // $(document).on('mousemove', function(e){
        
    //     clearTimeout(timeout);

    //     var mouseX = e.clientX - (containerW / 2);
    //     var mouseY = e.clientY - (containerH / 2);
       
    //     $container.removeClass('on');
        

        
    //     timeout = setTimeout(function() {
            
    //         var random = Math.floor(Math.random() * imgCount);
    //         $containerImg.attr('src', imgUrls[random]);
    //         $container.addClass('on');
    //         $container.css({top: mouseY, left: mouseX});
            

    //     }, 200);
    
       
            
         

        
    // });
    
    
    $('.home_top').scroll(function () {
        $('.home_bottom').scrollTop($(this).scrollTop());
    });
    
    $('.home_bottom').scroll(function () {
        $('.home_top').scrollTop($(this).scrollTop());
    });
    
});