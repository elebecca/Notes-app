function NoteListView(noteList) {
  this.noteList = noteList;
};

NoteListView.prototype.showNoteList = function() {
  return this.noteList;
};

NoteListView.prototype.showHtml = function() {
  var html = "<ul>";
  // this.noteList.notes.forEach(html += `<li><div>${note.showText()}</div></li>`)
  for(let i = 0; i < this.noteList.notes.length; i++ ) {
    html += `<li><div>${this.noteList.notes[i].showText()}</div></li>`
  }
  html += "</ul>";
  return html;
};