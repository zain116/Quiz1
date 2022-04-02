$(document).ready(function(){
    $('p').click(function(){
    
        $('.Education').hide()
    })
    $('section').mouseenter(function(){
        console.log("here is personal blog")
    })
    $( ".form" ).mousedown(function() {
        alert( "Recheck your Email before Submit, It may cause misleadings" );
      });
   $('section').on('click',function(){
    
        $( "#info" ).append( "Learn More" );
        $( "#info" ).append( "Double Clck to like it" );

      },
      dblclick: funchion(){
        $( "#info" ).append( "Thanks for like it" );
      }
      );
   })
   $('.moto').hide(10000);
   $('.moto').show(10000);

   $(".form").click(function(){
    $(".singup").fadeToggle();

    $('input').animate({obesity:0.3},4000)
})