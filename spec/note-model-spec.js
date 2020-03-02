function Test() {}

Test.prototype.showsText = function() {
  var note = new Note();
  if (note.text() == "Hello") {
    console.log("test passed: Note says Hello");
  } else {
    throw new Error("note is wrong");
  }
}

var test = new Test();
test.showsText();
