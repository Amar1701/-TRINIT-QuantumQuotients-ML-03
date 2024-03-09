document.addEventListener('DOMContentLoaded', function() {
  const uploadForm = document.getElementById('uploadForm');
  const fileInput = document.getElementById('fileInput');
  const imageCaption = document.getElementById('imageCaption');

  uploadForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);

      fetch('/upload', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          imageCaption.innerHTML = `<p><strong>Caption:</strong> ${data.caption}</p>`;
          imageCaption.innerHTML += `<img src="${data.image_path}" alt="Uploaded Image" width="400">`;
      })
      .catch(error => console.error('Error:', error));
  });
});
