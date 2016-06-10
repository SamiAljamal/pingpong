//business logic
var indicator ='';
var pingPong = function(number){
  for(var i= 1; i<= number; i++){
    if(i%3 == 0 && i%5 === 0){
      indicator += "<li>" + "pingPong" + "</li>";
    } else if (i%3===0){
      indicator += "<li>" + "ping" + "</li>";
    } else if (i% 5 === 0){
      indicator += "<li>" +"pong" + "</li>";
    } else{
      indicator += "<li>" + i + "</li>";
    }
  }

  return indicator;
};

// front-end logic
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var complete = false;
    var number= $("input#number").val();
    var result = pingPong(number);
    if (number === ""){
      $("#answers").text("please enter a number").show();

    }else{$("#answers").append(result).show();}



  });
});
