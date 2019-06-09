let message= alert('Bienvenu');
setTimeout(message,3000);

  
/*$(document).ready(function(){
  $("#changeweight").click(function(){
  		if ($("#btn").css("font-weight") != "bold") {
        $("#btn").css("font-weight", "bold");
	} else 	{
	    $("#btn").css("font-weight", "normal");
	}
	
  });
});*/


 clicked = true;
    $(document).ready(function(){
        $("#changeweight").click(function(){
            if(clicked){
                $("textarea").css('font-weight', 'bold');
                clicked  = false;
            } else {
                $("textarea").css('font-weight', 'normal');
                clicked  = true;
            }   
        });
    });

$(document).ready(function(){
  $("#changestyle").click(function(){
  		if ($("textarea").css("font-style") != "italic") {
        $("textarea").css("font-style", "italic");
	} else 	{
	    $("textarea").css("font-style", "normal");
	}
	
  });
});

$(document).ready(function(){
  $("#changeunderline").click(function(){
  		if ($("textarea").css("text-decoration") != "underline solid rgb(0, 0, 0)") {
        $("textarea").css("text-decoration", "underline solid rgb(0, 0, 0)");
	} else 	{
	    $("textarea").css("text-decoration", "none solid rgb(0, 0, 0)");
	}
	
  });
});
//?? pk ca marche pas
/*
 clicked = true;
    $(document).ready(function(){
        $("#changeunderline").click(function(){
            if(clicked){
                $("textarea").css('text-decoration', 'underline');
                clicked  = false;
            } else {
                $("textarea").css('text-decoration', 'inherit');
                clicked  = true;
            }   
        });
    });

*/
$(document).ready(function(){
$("#font-change").change(function() {
    //alert($(this).val());
    $('#btn').css("font-family", $(this).val());

	});
   });

$(document).ready(function(){
$("#sel1").change(function() {
    //alert($(this).val());
    $('#btn').css("font-size", $(this).val() + "px");

	});
   });



