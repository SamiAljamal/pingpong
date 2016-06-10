//business logic

// front-end logic
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number= $("input#number").val();

    $("#answers").text(number);

  });

});
