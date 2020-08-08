$(document).ready(function() {
    // start nav bar
    // start slide the nav br in mobile 
    $(".menu-toogle").on("click",function() {
    $("nav").slideToggle();
    });
    
    // end slide the nav br in mobile 
    //end nav bar
    //start 
    
    var windowheight = screen.height,
    headerheight = $("header").innerHeight();
    if ($(window).innerWidth()<=450)
    {
        if (screen.height>=820)
        {
        $(".slider, .carousel-item ").height(windowheight  - windowheight/2 - 50);
        $(".slider ").innerWidth($(window).innerWidth()).css("margin","10 0");
        
        }
        else{
        $(".slider, .carousel-item ").height(windowheight  - windowheight/2);
        $(".slider ").innerWidth($(window).innerWidth()).css("margin","10 0");
        }
    }
    else if($(window).innerWidth()>700 && $(window).innerWidth()<1030)
    {

        $(".slider, .carousel-item ").height(screen.height - 500);
        $(".slider ").innerWidth($(window).innerWidth()).css("margin","10 0");
        $(".content").css("top",-130)
        $(".event-slider").css("top", -windowheight/8);

    }
    else
    {
    $(".slider, .carousel-item ").height(screen.height - 300);
    $(".content").css("top",-70)
    $(".event-slider").css("top", -windowheight/8);
    $( "nav a" ).hover(
        function() {
         $(this).css("color","#FFF");
        }, function() {
            $(this).css("color","#000");
        }
      );
       
      
    
    }

    $(window).on("resize",function () {

        var windowheight = screen.height,
        headerheight = $("header").innerHeight();
        if ($(window).innerWidth()<=450)
        {
            if (screen.height>=820)
            {
            $(".slider, .carousel-item ").height(windowheight  - windowheight/2 - 50);
            $(".slider ").innerWidth($(window).innerWidth()).css("margin","10 0");
            
            }
            else{
            $(".slider, .carousel-item ").height(windowheight  - windowheight/2);
            $(".slider ").innerWidth($(window).innerWidth()).css("margin","10 0");
            }
        }
        else if($(window).innerWidth()>700 && $(window).innerWidth()<1030)
        {

            $(".slider, .carousel-item ").height(screen.height - 500);
            $(".slider ").innerWidth($(window).innerWidth()).css("margin","10 0");
            $(".content").css("top",-130)

        }
        else
        {
        $(".slider, .carousel-item ").height(screen.height - 300);
        $(".content").css("top",-70);
        $(".event-slider").css("top", -90);
        }
    });
   
        
    });
