document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('prescriptionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('prescriptionFile');
    const file = fileInput.files[0];

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = file.name;

    document.getElementById('prescriptionList').appendChild(listItem);

    fileInput.value = '';
  });
});