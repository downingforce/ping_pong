// BACKEND LOGIC

function pingPong (num) {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      return "Ping-Pong!";
    } else if (i % 3 === 0) {
      return "Ping";
    } else if (i % 5 === 0) {
      return "Pong";
    } else {
      return i;
    };
  };
};

// FRONTEND LOGIC
$(document).ready(function() {
  $("#pingPong").submit(function(event) {
    $("#userOutput").detach();
    var input = $("input#userInput").val();

    $("#output").append('<p id="userOutput">' + "a" + '</p>');

    event.preventDefault();
  });
});
