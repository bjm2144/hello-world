function newStyle() {
    //alert("Hello! I am an alert box!!");
    let newColor = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*7); 
    switch (x){
      case 0:
        newColor = 'red';
        newFont = 'Times New Roman'; 
        break;
      case 1: 
        newColor = 'blue';
        newFont = 'Florence, cursive'; 
        break;
      case 2:
        newColor = 'yellow';
        newFont = 'Verdana';
        break; 
      case 3:
        newColor= 'purple';
        newFont = 'Courier New';
        break
      case 4:
        newColor = 'cyan';
        newFont = 'Georgia'; 
        break;
      case 5:
          newColor = 'maroon';
          newFont = 'Palatino';
          break;
      case 6: 
          newColor = 'lime';
          newFont = 'Impact';
          break;
    }
    console.log(newColor);
    console.log(newFont);
    var elem = document.getElementById('text');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }
  