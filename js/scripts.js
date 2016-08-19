// BACKEND LOGIC



// FRONTEND LOGIC
$(document).ready(function(){

  $("#survey").submit(function(event) {
    var name = $("input#user_name").val();
    var answer1 = $("#question1 option:selected").text()
    var answer2 = $("#question2 option:selected").val()
    $(".name").text(name);

    event.preventDefault();
  });
});
