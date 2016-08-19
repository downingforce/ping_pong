// BACKEND LOGIC

var outputArray = [];

function pingPong (num) {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputArray.push("Ping-Pong!");
    } else if (i % 3 === 0) {
      outputArray.push("Ping");
    } else if (i % 5 === 0) {
      outputArray.push("Pong");
    } else {
      outputArray.push(i);
    };
  };
  outputArray = outputArray.join(" ");
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#pingPong").submit(function(event) {
    $("#userOutput").detach();
    var input = $("input#userInput").val();

    pingPong(input);

    $("#output").append('<p id="userOutput">' + outputArray + '</p>');

    event.preventDefault();
  });
});
