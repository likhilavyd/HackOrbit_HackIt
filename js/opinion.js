document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('opinionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('reportUpload');
    const questionInput = document.getElementById('questionText');

    const file = fileInput.files[0];
    const question = questionInput.value.trim();

    if (!file || !question) {
      alert("Please upload a file and enter your concern.");
      return;
    }

    const newPost = document.createElement('li');
    newPost.className = 'list-group-item';
    newPost.innerHTML = `
      <strong>${file.name}</strong><br>
      ${question}<br>
      <em>Replies: 0</em>
    `;

    document.getElementById('communityPosts').appendChild(newPost);

    fileInput.value = '';
    questionInput.value = '';
  });
});