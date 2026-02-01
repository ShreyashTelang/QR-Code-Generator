function generateQR() {
  let link = document.getElementById("link").value;
  if (link === "") {
    alert("Please enter a link!");
    return;
  }
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: link,
    width: 200,
    height: 200
  });
}
