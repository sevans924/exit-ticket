class Note {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    Note.all.push(this);
  }

  update({ title, content }) {
    this.title = title;
    this.content = content;
  }

  renderListItem() {
    return `
    <li>
      <h3>${this.title}
        <button data-id=${this.id}>edit</button>
      </h3>
    </li>`;
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Prompt</label>
      <p>
        <input type="text" value="${this.title}" />
      </p>
      <label>New Note</label>
      <p>
        <textarea>${this.content}</textarea>
      </p>
      <button type='submit'>Submit Ticket</button>
    </form>
  `;
  }

  static findById(id) {
    return this.all.find(note => note.id === id);
  }
}

Note.all = [];
