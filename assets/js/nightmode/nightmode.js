const darkMode = (type) => {
  if(type) {
    let checkBoxMobile = document.getElementById("nightmode-mobile");
    let header = document.getElementById('header');
    if(checkBoxMobile.checked == true) {
      document.body.classList.add("dark-mode");
      header.classList.add("dark-mode");
      localStorage.setItem('nightmode', true);
      document.getElementById("nightmode").checked = true;
    } else {
      document.body.classList.remove("dark-mode");
      header.classList.remove("dark-mode");
      localStorage.removeItem('nightmode');
      document.getElementById("nightmode").checked = false;
    }

  } else {
    let header = document.getElementById('header');
    let checkBox = document.getElementById("nightmode");
    if(checkBox.checked == true) {
      document.body.classList.add("dark-mode");
      header.classList.add("dark-mode");
      localStorage.setItem('nightmode', true);
      document.getElementById("nightmode-mobile").checked = true;
      document.getElementById("img-toggle-dark").style.display = 'none'
      document.getElementById("img-toggle-light").style.display = 'block'
      
    } else {
      document.body.classList.remove("dark-mode");
      header.classList.remove("dark-mode");
      localStorage.removeItem('nightmode');
      document.getElementById("nightmode-mobile").checked = false;
      document.getElementById("img-toggle-dark").style.display = 'block'
      document.getElementById("img-toggle-light").style.display = 'none'
    }

  }
}