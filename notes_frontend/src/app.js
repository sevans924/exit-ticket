class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createNotes = this.createNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
    // this.createComment = this.createComment.bind(this);
  }


  attachEventListeners() {
    $('#new-note-form').on('submit', this.handleFormSubmit);
    $('#comment-form').on('click', this.handleCommentClick);
  }

  createNotes(notes) {
    notes.forEach(note => {
      new Note(note);
    });
    console.log(this);
    this.addNotes();
  }

  addNotes() {
    $('#notes-list').empty();
    Note.all.forEach(note => $('#note-container').append(note.renderListItem()));
  }

  handleFormSubmit(event){
    event.preventDefault()

    let note = {
      topic: $('#topic').val(),
      content: $('#content').val(),
      prompt: $('#prompt-type').val(),
      teacher_id: $('#teacher').val(),
      student_id: $('#student').val()
    }

    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(note), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'

      }
    }).then(res => res.json())
    .then(data => {
   let newNote = new Note(data)
   $('#note-conatiner').innerHTML += newNote.renderListItem()
 }).catch(error => console.log(error.message))

}

handleCommentClick() {
  event.preventDefault()
    const commentForm = $('#comment_form')
    const commentInput = $('#comment_input')
    const newComment = document.createElement('li')
    newComment.innerHTML = commentInput.value
    $('#comments').append(newComment)

       }

  // handleCommentClick(e) {
  //   const id = e.target.dataset.id;
  //   const note = Note.findById(id);
  //   $('#update').html(note.renderUpdateForm());
  // }

}
