function showOverlay() {
  document.getElementById('img-close').style.display = 'block';
  document.getElementById('img-close').style.position = 'absolute';
  document.getElementById('img-close').style.top = '45%';
  document.getElementById('img-close').style.right = '20%'; 
  document.getElementById('img-hamburger').style.display = 'none';
  document.getElementById('hamburger').style.display = 'block';
}

function hideOverlay() {
  document.getElementById('img-close').style.display = 'none';
  document.getElementById('img-hamburger').style.display = 'block';
  document.getElementById('img-hamburger').style.position = 'absolute';
  document.getElementById('img-hamburger').style.top = '45%';
  document.getElementById('hamburger').style.display = 'none';
}