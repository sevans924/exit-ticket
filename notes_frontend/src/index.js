// document.addEventListener('DOMContentLoaded', () => {

////////////////render notes

let allNoteData = []
const notesContainer = document.querySelector('#note-container')
const endPoint = 'http://localhost:3000/api/v1/notes';
fetch(endPoint)
  .then(res => res.json())
  .then((noteJSONData) => {
      allNoteData = noteJSONData
      notesContainer.innerHTML = renderAllNotes(allNoteData)
    })

function renderAllNotes(allNoteData) {
  return allNoteData.map(renderListItem).join('')
}

  // function showNotes(noteArray){
  //   return noteArray.map( note => addNote(note)).join('')
  // }
  //
  // function addNote(note){
  //   const divCard = renderListItem(note)
  //    notesContainer.appendChild(divCard)
  // }



function renderListItem(note) {
  return(`
  <div class="note-card" id=${note.id}>
    <div class="note-frame">
      <h2 class="center-text"> <strong>Topic: ${note.topic}</strong></h2>
      <div class="note-content">
      <h3>Teacher: George Feeney</h3>
      <h3>Prompt: ${note.prompt}</h3>
      <h3> Ticket: ${note.content}</h3>
      <h3> Date: ${note.created_at.substring(0, 10)}</h3>
      </div>
      <form id="comment_form">
         <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>

         <button class="comment_button" onclick="commentFunction(${note.id})" name="comment">Comment</button>
       </form>
       <ul id="comments">
            <!-- <li> for each comment goes here -->
       </ul>
    </div>
    <button data-action="delete" class="delete-button" onclick="deleteNote(${note.id})">Delete</button>

  </div>`)
}


function addNotes() {
  $('#notes-list').empty();
  Note.all.forEach(note => $('#note-container').append(note.renderListItem()));
  $('.comment_button').on('click', function(){
    event.preventDefault();

    const commentInput = $('#comment_input').val()

    let comment = {
      content: $('#comment_input').val(),
      note_id: $(`${this.id}`).val()
    }

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






///////////end render
///////////create new form - right now, only adds on page refresh

let createNew = document.getElementById('btn btn-primary')
createNew.addEventListener('click', event => handleFormSubmit(event))

function handleFormSubmit(event){
  event.preventDefault()

  let note = {
    topic: document.getElementById("topic").value,
    content: document.getElementById("content").value,
    prompt: document.getElementById('prompt-type').value,
    teacher_id: document.getElementById('teacher').value,
    student_id: document.getElementById('student').value
  }

  fetch('http://localhost:3000/api/v1/notes', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(note), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(data => {
    allNoteData.unshift(data)
    let newNoteData = renderAllNotes(allNoteData)
    document.getElementById("note-container").innerHTML = newNoteData


    }).catch(error => console.log(error.message))

}

// function addSingleNote(newNote){
//   $('#note-container').append(renderListItem(newNote));
// }




//////////////////////end create
//////////////////comments - can add comment to database, but can't access comment value and still won't post to the page

// const commentButton = document.getElementsByClassName("comment_button")
// commentButton.addEventListener('click', event => commentFunction())



function commentFunction(note){
  event.preventDefault();

  let comment = {
    content: document.getElementById('comment_input').value,
    note_id: note
  }

  fetch('http://localhost:3000/api/v1/comments', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(comment), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(comment => renderCommentList(comment))


}





function renderCommentList(comment){
  const commentContainer = document.getElementById('comments')
  const newComment = document.createElement('li')
  newComment.innerHTML = comment.content
  commentContainer.appendChild(newComment)
}





////////////////////end comments
//////////////////////DELETE - now located in HTML

// function deleteNote(note, event) {
//   event.preventDefault()
//   fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
//     method: 'DELETE'
//   })
//   event.target.parentNode.remove()
// }



////////////////////end Delete







//////////////////////////
/////////////////////////

// $(document).ready(() => {
//   const app = new App();
  // attachEventListeners();
  // fetchNotes().then(createNotes);

  let getAllTeachers = () => {
    return fetch('http://localhost:3000/api/v1/teachers')
    .then(response => response.json())
    .then(json => json)
  }

  getAllTeachers().then((teachers) => {

    teachers.forEach((teacher) => {
        let option = document.createElement("option");
        option.value = teacher.id;
        option.innerHTML = teacher.first_name + ' ' + teacher.last_name;
        $('#teacher').append(option);
      });
  });


  let getAllStudents = () => {
    return fetch('http://localhost:3000/api/v1/students')
    .then(response => response.json())
    .then(json => json)
  }

  getAllStudents().then((students) => {
    students.forEach((student) => {
        let option = document.createElement("option");
        option.value = student.id;
        option.innerHTML = student.first_name + ' ' + student.last_name;
        $('#student').append(option);
      });
  });
