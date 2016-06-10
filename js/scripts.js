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
    debugger;
    var numPat= /^[0-9]*$/gm;
    var tester= numPat.test(number);
    var result = pingPong(number);
    if (number === ""){
      $("#debug").text("please enter a number");
      $(".error").show();
      $(".answer").hide();
    }else if (tester === false) {
      $("#debug").text("please make sure you only enter numbers");
      $(".error").show();
      $(".answer").hide();
    }else{
      $("#answers").prepend(result);
      $(".answer").show();
      $(".error").hide()
    }
  });
  $("button#refresh").click(function(){
    $("#answers").empty();

  });
});
