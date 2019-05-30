//
//   let allNoteData = []
//   const notesContainer = document.querySelector('#note-container')
//   const endPoint = 'http://localhost:3000/api/v1/notes';
//   fetch(endPoint)
//     .then(res => res.json())
//     .then((noteJSONData) => {
//         allNoteData = noteJSONData
//         showNotes(allNoteData)
//
//       })
//
//   function addNote(note){
//     const liCard = noteCard(note)
//      notesContainer.appendChild(liCard)
//   }
//
//   function showNotes(noteArray){
//     return noteArray.map( note => addNote(note)).join('')
//   }
//
//   function noteCard(note){
//       const li = document.createElement("li");
//       li.setAttribute("class", "note-card")
//       li.setAttribute("id", `${note.id}`)
//       const h3 = document.createElement("h3");
//         h3.innerHTML = note.title
//       const blockquote = document.createElement("blockquote");
//         blockquote.setAttribute("class", "blockquote")
//       const p = document.createElement("p");
//         p.setAttribute("class", "note-content")
//         p.innerHTML = note.content
//       const footer1 = document.createElement("footer");
//         footer1.setAttribute("id", "time")
//         footer1.innerHTML = note.time
//       const footer2 = document.createElement("footer");
//         footer2.setAttribute("id", "teacher-comments")
//         footer2.innerHTML = "Teacher Comments: "
//       const edit = document.createElement("BUTTON");
//         edit.innerHTML = "Edit Note"
//         edit.setAttribute("id", "edit");
//         edit.addEventListener("click", event => addEditForm(note, event))
//       const deletebtn = document.createElement("BUTTON");
//         deletebtn.innerHTML = "Delete"
//         deletebtn.setAttribute("id", "delete");
//         deletebtn.addEventListener("click", event => deleteNote(note, event))
//         li.append(h3, blockquote, p, footer1, footer2, edit, deletebtn)
//         return li
//   }
//
//
// // function renderAllNotes(notesArray) {
// //   return notesArray.map(renderSingleNote).join('')
// // }
// //
// // function renderSingleNote(note) {
// //   return (`
// //   <div class="note-card" id=note-${note.id}>
// //     <div class="note-frame">
// //       <h2 class="center-text"> <strong>${note.title}</strong></h2>
// //       <div class="note-content">
// //       <h3> ${note.content}</h3>
// //       <h3> ${note.time}</h3>
// //       </div>
// //       <button data-action="edit" class="edit-button" onclick="editNote(${note.id})">Edit</button>
// //       <button data-action="delete" class="delete-button" onclick="deleteNote(${note.id})">Delete</button>
// //     </div>
// //   </div>`)
// // }
//
// /////////////////////
//
// const newForm = document.querySelector("#new-note-form")
//
// newForm.addEventListener("submit", event => createNewNote(event, allNoteData))
//
// // function addNewNote(note){
// //   const liCard = noteCard(note)
// //    notesContainer.prependChild(liCard)
// // }
//
// function createNewNote(event, allNoteData) {
//   event.preventDefault()
//   let titleForm = document.getElementById("title")
//   let contentForm = document.getElementById("new-note")
//   let dateTime = document.getElementById("note-date")
//   let firstChild = notesContainer.firstChild
//   fetch('http://localhost:3000/api/v1/notes', {
//     method: "POST",
//     headers: {
//      "Content-Type": "application/json",
//      "Accept": "application/json"
//    },
//    body: JSON.stringify({
//      title: titleForm.value,
//      content: contentForm.value,
//      time: dateTime.value
//    })
//
//  }).then(resp => resp.json())
//  .then(parsedJson => {
//    allNoteData.unshift(parsedJson)
//    let li = noteCard(parsedJson)
//    notesContainer.insertBefore(li, firstChild)
//
//
//  })
// }
//
//
// /////////deleteNote
//
//
//
// function deleteNote(note, event) {
//   event.preventDefault()
//   fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
//     method: 'DELETE'
//   })
//   event.target.parentNode.remove()
// }
//
//
// /////////////edit note
//
//
// function addEditForm(note, event){
//   let noteForm = document.getElementById(`${note.id}`)
//   let newForm = createEditForm(note, event)
//   debugger
//   noteForm.appendChild(newForm)
// }
//
// function createEditForm(note, event){
//
//   return (`
// <div>
//      <h1>Exit Tickets</h1>
//       <br>
//       <form id="edit-note-form">
//         <div class="form-group">
//           <div>
//             <label for="bday">Today's Date:</label>
//             <input type="date" id="note-date" name="note-date">
//           </div>
//           <br>
//           <select id="prompt-type" name="prompt" >
//             <option>Today I learned that...</option>
//             <option>One thing I wonder...</option>
//             <option>One connection I made was...</option>
//             <option>I'm still not sure...</option>
//             <option>Choose my own prompt.</option>
//           </select>
//           <br>
//           <br>
//           <label for="Title">Topic</label>
//           <input type="text" class="form-control" id="title" placeholder=${note.title}>
//         </div>
//         <div class="form-group">
//           <label for="new-note">New Note</label>
//           <input type="text" class="form-control" id="new-note" placeholder=${note.content}>
//         </div>
//
//         <button type="submit" id="edit-form-btn" class="btn edit">Submit</button>
//       </form>
//     </div>
//     <br>`)
//
// }
//
// // function editNote(note, event){
// //   event.preventDefault()
// //   fetch(`http://localhost:3000/api/v1/${note.id}`, {
// //     method: 'PATCH',
// //     headers: {
// //       "Content-Type" : "application/json"
// //       "Accept" : "application/json"
// //     },
// //     body: JSON.stringify({
// //       title: titleForm.value,
// //       content: contentForm.value,
// //       time: dateTime.value
// //
// //   })
// // }

$(document).ready(() => {
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchNotes().then(app.createNotes);

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

});

// const commentForm = $('#comment_form')
// commentForm.addEventListener('click', event => createComment())

// function createComment() {
//   event.preventDefault()
//     const commentForm = $('#comment_form')
//     const commentInput = $('#comment_input')
//     const newComment = document.createElement('li')
//     newComment.innerHTML = commentInput.value
//     $('#comments').append(newComment)
//
//        }
