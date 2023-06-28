const darkMode = (type) => {
  // console.log(type)
  if(type) {
    let header = document.getElementById('header');
    document.getElementById('img-dark-mobile').style.display = 'none';
    document.getElementById('img-light-mobile').style.display = 'block';
    document.body.style.backgroundColor = '#282828';
    header.style.backgroundColor = '#282828';
    document.querySelectorAll('p').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('h1').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('h2').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('h3').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('a').forEach(e => e.style.color = "#f9f9f9");
  } else {
    let header = document.getElementById('header');
    document.getElementById('img-dark').style.display = 'block';
    document.getElementById('img-light').style.display = 'none';
    document.body.style.backgroundColor = '#282828';
    header.style.backgroundColor = '#282828';
    document.querySelectorAll('p').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('h1').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('h2').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('h3').forEach(e => e.style.color = "#f9f9f9");
    document.querySelectorAll('a').forEach(e => e.style.color = "#f9f9f9");
  }
  
}

const lightMode = (type) => {
  console.log('tes')
  if(type) {
    let header = document.getElementById('header');
    document.getElementById('img-dark-mobile').style.display = 'block';
    document.getElementById('img-light-mobile').style.display = 'none';
    document.body.style.backgroundColor = '#f9f9f9';
    header.style.backgroundColor = '#f9f9f9';
    document.querySelectorAll('p').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('h1').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('h2').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('h3').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('a').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('nav.hamburger a').forEach(e => e.style.color = "#f9f9f9");
  } else {
    document.body.style.backgroundColor = '#f9f9f9';
    header.style.backgroundColor = '#f9f9f9';
    document.getElementById('img-dark').style.display = 'none';
    document.getElementById('img-light').style.display = 'block';
    document.querySelectorAll('p').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('h1').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('h2').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('h3').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('a').forEach(e => e.style.color = "#36383F");
    document.querySelectorAll('nav.hamburger a').forEach(e => e.style.color = "#f9f9f9");
  }

  
}