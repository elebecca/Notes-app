
describe('Note', () => {
  it('print hello', () => {
    const note = new Note();
    expect(note.text()).toBe('hello1')
  })
});

