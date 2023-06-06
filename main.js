function generateColor() {
    let color = '#';
    let digits = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
      
      let randomDigit = Math.floor(Math.random() * 16);
      
      color += digits[randomDigit];
    }

    document.getElementById('color').innerHTML = color;
    document.body.style.backgroundColor = color;
  }
  
  generateColor();