(function() {
  "use strict";

  // No console?!?  What is this madness?!?
  if(!console) { return; }

  var swears = [
        "fuck", "fucker", "fucking", "mother fucker",
        "shit", "shitting",
        "damn",
        "bitch",
        "bollocks"
      ];

  /**
   * Logs random swears and the line of the calling context (if possible)
   */
  console.fuck = function() {
    var e = new Error,
        stack = e.stack.split("\n"),
        i = Math.floor((Math.random() * swears.length));

    console.log(swears[i] + " (" + stack[2].trim() + ")");
    // log any arguments that were passed into `fuck`
    if(arguments.length) {
      console.log.apply(console, arguments);
    }
  };
}());
