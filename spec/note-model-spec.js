describe('Note', () => {
  it('prints hello', () => {
    const note = new Note('hello1');
    expect(note.showText()).toBe('hello1');
  });
});

