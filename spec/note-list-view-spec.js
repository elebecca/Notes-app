describe('NoteListView', () => {
  it('check it takes a note list model upon instantiation', () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    expect(noteListView.showNoteList()).toBe(noteList);
  });

  it('returns HTML string representing the note list model', () => {
    var note1 = new Note('Hello world');
    var note2 = new Note('How are you?');
    var noteList = new NoteList();
    noteList.AddNotes(note1);
    noteList.AddNotes(note2);
    var noteListView = new NoteListView(noteList);
    expect(noteListView.showHtml()).toBe("<ul><li><div>Hello world</div></li><li><div>How are you?</div></li></ul>")
  });
});

