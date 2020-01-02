// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
  // Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function.
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  // Expose the 'byeSpeaker' object to the global scope.
  window.byeSpeaker = byeSpeaker;

})(window);