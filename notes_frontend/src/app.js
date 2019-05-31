class App {
  constructor() {
    this.adapter = new Adapter();

    // this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createNotes = this.createNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
    // this.createComment = this.createComment.bind(this);
  }


  attachEventListeners() {
    $('#new-note-form').on('submit', this.handleFormSubmit);
    // $('#comment_button').on('click', this.handleCommentClick);
  }

  createNotes(notes) {
    notes.forEach(note => {
      new Note(note);
    });
    this.addNotes();
  }

  addSingleNote(note){
    $('#note-container').append(note.renderListItem());
  }

  addNotes() {
    $('#notes-list').empty();
    Note.all.forEach(note => $('#note-container').append(note.renderListItem()));
    $('.comment_button').on('click', function(){
      event.preventDefault();

      const commentInput = $('#comment_input').val()

      let comment = {
        content: $('#comment_input').val(),
        note_id: $(`${this.id}`).val()
      }
      debugger;
      fetch('http://localhost:3000/api/v1/comments', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(comment), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(comment => console.log(comment))
        // newComment.innerHTML = commentInput.value
        // $('#comments').append(newComment)

    })
    }

    renderCommentList(comment){
      const commentContainer =  $('comments')
      const newComment = document.createElement('li')
      newComment.innerHTML = comment.content
      commentContainer.appendChild(newComment)
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
   this.addSingleNote(newNote)
   // $('#note-conatiner').innerHTML += newNote.renderListItem()

 }).catch(error => console.log(error.message))

}

// addSingleComment(comment){
//   $('#comment_form').append(comment.renderCommentList());
// }

// renderCommentList(comment){
//   const commentContainer =  $('comments')
//   const newComment = document.createElement('li')
//   newComment.innerHTML = comment.content
//   commentContainer.appendChild(newComment)
// }
//
// handleCommentClick() {
//   event.preventDefault()
  // debugger;
  // const commentInput = $('#comment_input')
  //
  // let comment = {
  //   content: $('#comment_input').val(),
  //   note_id: $(`#note-${this.id}`)
  // }
  // fetch('http://localhost:3000/api/v1/comments', {
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify(comment), // data can be `string` or {object}!
  //   headers:{
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => res.json())
  //   .then(comment => {
  //     renderCommentList(comment)
  //   })
    // newComment.innerHTML = commentInput.value
    // $('#comments').append(newComment)

}




    //
    //    }

  // handleCommentClick(e) {
  //   const id = e.target.dataset.id;
  //   const note = Note.findById(id);
  //   $('#update').html(note.renderUpdateForm());
  // }
