const string = "hello world";

function reverseTheString(theString) {
  if (theString === "") return "";
  else return reverseTheString(theString.substr(1)) + theString.charAt(0);
}

console.log(reverseTheString(string));
