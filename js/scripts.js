//business logic
var indicator ='';
var pingPong = function(number){
  for(var i= 0; i<= number; i++){
    indicator += i + "<br>";
    


  }
  return indicator;


};

// front-end logic
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number= $("input#number").val();
    var result = pingPong(number);

    $("#answers").append(result);

  });

});
