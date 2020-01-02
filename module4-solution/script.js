// Wrap the entire contents of script.js inside of an IIFE
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over the names array
for (nameIndex in names) {
  // Retrieve current name
  const name = names[nameIndex]
  // Retrieve the first letter of the current name in the loop.
  const firstLetter = name.toLowerCase().charAt(0);

  // Compare the 'firstLetter' to lower case 'j'.
  if (firstLetter == 'j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}
})();