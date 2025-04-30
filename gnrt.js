var allowedURLs = [
    "https://dkhek.blogspot.com",
    "https://www.dktechnozone.in"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
    if (window.location.href.startsWith(allowedURLs[i])) {
        foundMatch = true;
        break;
    }
}

if (foundMatch) {
function loadScript(url, callback) {
  
  
    async function uploadImage() {
      const clientId = '7c00fb5a7ee35f5'; // Replace with your actual Client ID
      const imageInput = document.getElementById('imageInput');
      const output = document.getElementById('output');

      if (imageInput.files.length === 0) {
        output.textContent = 'Please select an image to upload.';
        return;
      }

      const file = imageInput.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('https://api.imgur.com/3/upload', {
          method: 'POST',
          headers: {
            'Authorization': `Client-ID ${clientId}`
          },
          body: formData
        });

        const result = await response.json();
        if (response.status === 200 && result.success) {
          output.innerHTML = `Image URL: <textarea> ${result.data.link}</textarea>`;
        } else {
          output.textContent = `Error: ${result.data.error}`;
        }
      } catch (error) {
        output.textContent = `Error: ${error.message}`;
      }
    }


    document.getElementById('generatePost').addEventListener('click', function() {
      const postTitle = document.getElementById('postTitle').value;
      const movieDescription = document.getElementById('movieDescription').value;
      const bulletPointHeading = document.getElementById('bulletPointHeading').value;
      const imdbRating = document.getElementById('imdbRating').value;
      const language = document.getElementById('language').value;
      const quality = document.getElementById('quality').value;
      const fileSize = document.getElementById('fileSize').value;
      const formate = document.getElementById('formate').value;
      const season = document.getElementById('season').value;
      const screenshot1 = document.getElementById('screenshot1').value;
      const screenshot2 = document.getElementById('screenshot2').value;
      const screenshot3 = document.getElementById('screenshot3').value;
      const screenshot4 = document.getElementById('screenshot4').value;
      const screenshot5 = document.getElementById('screenshot5').value;
      const screenshot6 = document.getElementById('screenshot6').value;
      const downloadLink1 = document.getElementById('downloadLink1').value;
      const downloadLink2 = document.getElementById('downloadLink2').value;
      const downloadLink3 = document.getElementById('downloadLink3').value;
      const downloadLink4 = document.getElementById('downloadLink4').value;
      const downloadLink5 = document.getElementById('downloadLink5').value;

      const postHtml = `
        <div class="post">
          <h2 style="color:yellow;">${postTitle}</h2>
          <p>${movieDescription}</p>
          <h3 style="color:#ff8800;">Series Info:</h3>
          <ul>
            <li style="color:#00e316;"><b>IMDb Rating:</b> ${imdbRating}</li>
            <li><b>Movie Released in:</b> ${bulletPointHeading}</li>
            <li><b style="color:#f6006f;"> Language: ${language}</b></li>
            <li><b>Quality:</b> ${quality}</li>
            <li><b>File Size:</b> ${fileSize}</li>
            <li><b>Formate:</b> ${formate}</li>
            <li><b>Season:</b> ${season}</li>
          </ul>
          <h2>Screenshots - Must See Before Downloading...</h2>
          ${screenshot1 ? `<img class="img" src="${screenshot1}" alt="Screenshot 1">` : ''}
          ${screenshot2 ? `<img class="lazyload" src="${screenshot2}" alt="Screenshot 2">` : ''}
          ${screenshot3 ? `<img class="img" src="${screenshot3}" alt="Screenshot 3">` : ''}
          ${screenshot4 ? `<img class="img" src="${screenshot4}" alt="Screenshot 4">` : ''}
          ${screenshot5 ? `<img class="img" src="${screenshot5}" alt="Screenshot 5">` : ''}
          ${screenshot6 ? `<img class="img" src="${screenshot6}" alt="Screenshot 6">` : ''}
          <h2>Download Links</h2>
          ${downloadLink1 ? `<p><a class="dbtn" href="${downloadLink1}" target="_blank">⚡ 480p Download ⚡</a></p>` : ''}
          ${downloadLink2 ? `<p><a class="dbtn1 dbtn" href="${downloadLink2}" target="_blank">⚡ 720p Download ⚡</a></p>` : ''}
          ${downloadLink3 ? `<p><a class="dbtn2 dbtn" href="${downloadLink3}" target="_blank">⚡ 1080p Download ⚡</a></p>` : ''}
          ${downloadLink4 ? `<p><a class="dbtn3 dbtn" href="${downloadLink4}" target="_blank">⚡ 4K Download ⚡</a></p>` : ''}
          ${downloadLink5 ? `<p><a class="dbtn4 dbtn" href="${downloadLink5}" target="_blank">⚡ 8K Download ⚡</a></p>` : ''}
        </div>
     <link rel="stylesheet" href="https://dhanjeerider.github.io/kan.io/assets/css/vendor/demo.css" rel="stylesheet">
      `;

      document.getElementById('postContainer').innerHTML = postHtml;
      document.getElementById('postContainer').style.display = 'block';

      const postCodeContainer = document.getElementById('postCodeContainer');
      postCodeContainer.value = postHtml;
      postCodeContainer.style.display = 'block';
      document.getElementById('copyCode').style.display = 'block';
    });

    document.getElementById('copyCode').addEventListener('click', function() {
      const postCodeContainer = document.getElementById('postCodeContainer');
      postCodeContainer.select();
      document.execCommand('copy');
      alert('Post code copied to clipboard!');
    });

 
} else {
console.log('script is not working')
}
