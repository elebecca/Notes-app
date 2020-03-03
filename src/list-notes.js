var NoteList = function() {
    this.notes = [];   
}

NoteList.prototype.showNotes = function () {
    return this.notes;
};
NoteList.prototype.AddNotes = function (note) {
    this.notes.push(note);
};

