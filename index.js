
    const imageBox = document.getElementById("imageBox");
    const QRimage = document.getElementById("QRimage");
    const textInput = document.getElementById("text");

    function generateQR() {
      const input = textInput.value.trim();
      

      QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(input);
      imageBox.style.display = "flex";
    }
