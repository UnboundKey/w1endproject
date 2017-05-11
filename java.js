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
  switch (d.getMonth()) {
    case 3:
        if(d.getDate === 24)
          document.getElementById('WelcomeText').innerHTML = "Happy Birthday";
        break;
    case 4:
      if(d.getDate() === 11) {
        document.getElementById('WelcomeText').innerHTML = "Who's been drawing dicks";
      }
      if(d.getDate === 4) {
        document.getElementById('WelcomeText').innerHTML = "May the force be with you";  
      }
      break;
  }
}
