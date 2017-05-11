function showhide(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function easter() {
  d = new Date();
  if (d.getMonth() === 4 && d.getDate() === 24) {
    document.getElementById('WelcomeText').innerHTML = "Happy Birthday";
  }
}
