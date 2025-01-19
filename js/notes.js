const notesTitle = document.getElementById('notes-title');
const notesText = document.getElementById('notes-text');
const notesAddButton = document.getElementById('notes-add');
const notesContainer = document.getElementById('notes-container');

// Function to create a new note element
function createNoteElement(title, text) {
    const note = document.createElement('div');
    note.classList.add('note');

    const noteTitle = document.createElement('div');
    noteTitle.classList.add('note-title');
    noteTitle.textContent = title;

    const noteText = document.createElement('div');
    noteText.classList.add('note-text');
    noteText.textContent = text;

    const noteActions = document.createElement('div');
    noteActions.classList.add('note-actions');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('note-edit');
    editButton.addEventListener('click', () => editNote(note, noteTitle, noteText));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('note-delete');
    deleteButton.addEventListener('click', () => note.remove());

    noteActions.appendChild(editButton);
    noteActions.appendChild(deleteButton);

    note.appendChild(noteTitle);
    note.appendChild(noteText);
    note.appendChild(noteActions);

    return note;
}

// Function to add a new note
function addNote() {
    const title = notesTitle.value.trim();
    const text = notesText.value.trim();

    if (title === '' || text === '') {
        alert('Please fill out both the title and text fields.');
        return;
    }

    const noteElement = createNoteElement(title, text);
    notesContainer.appendChild(noteElement);

    // Clear input fields
    notesTitle.value = '';
    notesText.value = '';
}

// Function to edit an existing note
function editNote(note, noteTitleElement, noteTextElement) {
    const newTitle = prompt('Edit Title:', noteTitleElement.textContent);
    const newText = prompt('Edit Text:', noteTextElement.textContent);

    if (newTitle !== null) {
        noteTitleElement.textContent = newTitle.trim() === '' ? noteTitleElement.textContent : newTitle;
    }

    if (newText !== null) {
        noteTextElement.textContent = newText.trim() === '' ? noteTextElement.textContent : newText;
    }
}

// Add event listener to the Add Note button
notesAddButton.addEventListener('click', addNote);
