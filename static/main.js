const startButton = document.getElementById('startPreview');
const videoPreview = document.getElementById('preview');

startButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
    videoPreview.srcObject = stream;
  });
})