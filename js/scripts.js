//business logic
var pingPong = function(number){
  var indicator = [];
  for(var i=1; i<=number;i++){
    if (i % 15 === 0){
      indicator.push("pingpong");
    } else if (i % 5 === 0){
      indicator.push("pong");
    } else if (i % 3 === 0){
      indicator.push("ping");
    // } else if (i % 5 === 0){
    //   indicator.push("pong");
    // }
    } else {
      indicator.push(i);
    }
  }
  return indicator;
};
// front-end logic
$(document).ready(function(){
  $("form#pingpong").click(function(event){
    event.preventDefault();
    var number= parseInt($("input#number").val());
    var result = pingPong(number);
    result.forEach(function(result){
      $("ul#answers").append("<li>" + result + "</li>");
    });
  });
});
