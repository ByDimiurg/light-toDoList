const input = document.getElementsByClassName('mainInput')[0];
input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addNote();
  }
});

function addNote() {
  if (input.value === '') return 0;

  const noteList = document.getElementsByClassName('noteList')[0];
  const counter = document.getElementsByClassName('listElement').length;

  noteList.innerHTML += `
  <div 
    class="listElement" 
    id='id${counter}' 
  >
    <p>
      ${input.value}
    </p>
  </div>`;
  input.value = '';

  document.querySelectorAll(`.listElement`).forEach((element) => {
    element.addEventListener('dblclick', deleteDoubleClick);
  });
}

function deleteDoubleClick() {
  document.getElementById(this.id).remove();
  document.querySelectorAll(`.listElement`).forEach((element, key) => {
    element.id = `id${key}`;
  });
}

function deleteAll() {
  document.querySelectorAll(`.listElement`).forEach((element) => {
    element.remove();
  });
}
