class Note {
  constructor(data) {
    this.id = data.id;
    this.topic = data.topic;
    this.content = data.content;
    this.prompt = data.prompt;
    this.created_at = data.created_at.substring(0, 10);
    this.student_id = data.student_id;
    this.teacher_id = data.teacher_id;
    Note.all.push(this);
  }

  update({ topic, content, prompt }) {
    this.topic = topic;
    this.content = content;
    this.prompt = prompt
  }

  renderListItem() {
    return(`
    <div class="note-card" id=note-${this.id}>
      <div class="note-frame">
        <h2 class="center-text"> <strong>${this.topic}</strong></h2>
        <div class="note-content">
        <h3>Teacher: ${teacher.last_name}</h3>
        <h3>${this.prompt}</h3>
        <h3> ${this.content}</h3>
        <h3> ${this.created_at}</h3>
        </div>
        <button data-action="edit" class="edit-button">Edit</button>
        <button data-action="delete" class="delete-button">Delete</button>
      </div>
    </div>`)
  }

  // update(e) {
  //   e.preventDefault();
  //   debugger;
  //   const id = e.target.dataset.id;
  //   const note = Note.findById(id);
  //   const topic = $(e.target)
  //     .find('input')
  //     .val();
  //   const content = $(e.target)
  //     .find('textarea')
  //     .val();
  //
  //   const bodyJSON = { topic, content };
  //   this.adapter.updateNote(note.id, bodyJSON).then(updatedNote => {
  //     const note = Note.findById(updatedNote.id);
  //     note.update(updatedNote);
  //     this.addNotes();
  //   });
  // }



  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Topic</label>
      <p>
        <input type="text" value="${this.topic}" />
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
