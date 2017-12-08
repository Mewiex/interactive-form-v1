let registerstatus = true;

  // focus name
  $('#name').focus();

  // display other input field
  $('.basic-info').append('<input type="text" id="other-field" placeholder="Your job title" name="otherjob">');
  $('#other-field').hide();

   $('#title').change(function(){
  	if ($('#title option:selected').val() === "other") {
        
  		$('#other-field').show();
  	} else {
  		$('#other-field').hide();
  	}
  });

$('#colors-js-puns').hide();


var shirtSelected = false;
  $('#design').change(function(){
  	if ($('#design option:selected').val() === "js puns") {
  		$('#colors-js-puns').show();
  		$('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
  		shirtSelected = true;
  		return shirtSelected;
        
  	} else if ($('#design option:selected').val() === "heart js")
        
    {
  		$('#colors-js-puns').show();
  		$('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
  		shirtSelected = true;
  		return shirtSelected;
        
  	} else
        
    {
  		$('#colors-js-puns').hide();
  		shirtSelected = false;
  		return shirtSelected;
  	}
  });

   $(":checkbox").change(function(){




  // prevent user from going to same place if under same time
  var frameworks = $("input[name='js-frameworks']");
  var express = $("input[name='express']");
  var libraries = $("input[name='js-libs']");
  var node = $("input[name='node']");

    function timeConflict(workshop, conflict){
      if (workshop.is(":checked")) {
        conflict.attr("disabled", true);
      
    
        conflict.parent().css('color','gray');
      } else {
        conflict.attr("disabled", false);
        conflict.parent().css('color','#000');
      }
    }

  

});

//when user presses a checkbox it updates the cost
$(":checkbox").change(function(){

    var total = 0;
    $("#cost").remove();

          if ($("input[name='all']").is(":checked"))  {
            total += 200;
          }

          $(".activities input:not([name='all'])").each(function(){
            if ($(this).is(":checked")) {
            total += 100;
            }
          });

    if (total > 0) {
    $(".activities").append("<p id='cost'>Total cost: $" + total + " </p>");
    }
});

    
    
    $("option[value='select_method']").remove();

$("#paypal").hide();
$("#bitcoin").hide();
$("#payment").change(function(){
    //clears all errors first
    $("#ccerror").remove();
    $("#paydetailserror").remove();
    $(this).val() === "credit card" ? $("#credit-card").show() : $("#credit-card").hide();
    $(this).val() === "paypal" ? $("#paypal").show() : $("#paypal").hide();
    $(this).val() === "bitcoin" ? $("#bitcoin").show() : $("#bitcoin").hide();
});
// credit/test/zip testers to check if they are valid inputs
 var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
 var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;


// this is where program checks on submit forum click if all the correct values are put in and if not produce error
$("button").on("click", function(e){
   e.preventDefault();
    
 if ( $('#name').val() === "" ) {
		console.log("Error!");
     $('#name').focus();
     $('#name').css('border', 'solid 2px red');
         registerstatus = false;
 }
    else{
         console.log("sucsess!");
            $('#name').focus();
     $('#name').css('border', 'solid 2px green');
        
    }
   
    
   
    if (testEmail.test($('#mail').val())){
         console.log("sucsess!");
            $('#mail').focus();
     $('#mail').css('border', 'solid 2px green');
        registerstatus = true;
    }
    else {
         console.log("Error!");
            $('#mail').focus();
     $('#mail').css('border', 'solid 2px red');
            registerstatus = false;
    }
    
    if ( $(".activities > label > input:checked").length === 0 )
        {
             console.log("Error!");
            $('.activities').focus();
     $('.activities').css('border-bottom', 'solid 2px red');
                registerstatus = false;
        }
    else{
           console.log("sucsess!");
            $('.activities').focus();
     $('.activities').css('border-bottom', 'solid 2px green');
        registerstatus = true;
    }
  
    if ( !creditCard.test($("#cc-num").val()))
        {
             console.log("Error!");
            $('#cc-num').focus();
     $('#cc-num').css('border', 'solid 2px red');     
                registerstatus = false;
        }
    else
        {
      console.log("sucsess!");
            $('#cc-num').focus();
     $('#cc-num').css('border', 'solid 2px green');
            registerstatus = true;
        }
    
    if(!zipCode.test($('#zip').val()))
        {
             console.log("Error!");
            $('#zip').focus();
     $('#zip').css('border', 'solid 2px red');   
                registerstatus = false;
        }
    else{
           console.log("sucsess!");
            $('#zip').focus();
     $('#zip').css('border', 'solid 2px green');
        registerstatus = true;
        
    }
    if($("#cvv").val().length < 3)
    {
        console.log("Error!");
            $('#cvv').focus();
     $('#cvv').css('border', 'solid 2px red'); 
        registerstatus = false;
    }
    else{
         console.log("sucsess!");
            $('#cvv').focus();
     $('#cvv').css('border', 'solid 2px green');
        registerstatus = true;
    }
    if(registerstatus == true)
        {
         alert('Thanks for registring with us');
    
        }
    else{
        
    }
  
});

