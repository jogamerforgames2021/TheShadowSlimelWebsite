function convertVideo() {
    const url = document.getElementById('videoUrl').value;
    document.getElementById('status').textContent = 'Processing...';

    fetch('/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('status').innerHTML = `<a href="${data.fileUrl}" download>Click here to download your MP4 file</a>`;
        } else {
            document.getElementById('status').textContent = 'Error: ' + data.error;
        }
    })
    .catch(error => {
        document.getElementById('status').textContent = 'Error: ' + error.message;
    });
}
