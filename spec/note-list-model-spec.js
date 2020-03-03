
describe('NoteList', () => {
    it('check if you can show notes', () => {
        const noteList = new NoteList();
        expect(Array.isArray(noteList.showNotes())).isTrue()
    })

    it('check if return all note stored', () => {
        const noteList = new NoteList();
        note1 = 'hello1';
        noteList.notes.push(note1)
        expect(noteList.showNotes().length).toBe(1)
        expect(noteList.showNotes()[0]).toBe('hello1') 
    })
    
    it('create and stores a note', () => {
        const noteList = new NoteList();
        const note = new Note();
        noteList.AddNotes(note.showText());
        expect(noteList.showNotes().length).toBe(1);
        expect(noteList.showNotes()[0]).toBe('hello1');
    })
});
