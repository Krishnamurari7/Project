const hero = document.querySelector('input');

//background color change

// function backgroundChange()
//  {
//     hero.style.color= 'black';  
//  }



 //random backgroun color change
//   function ColorChange()
//   { 			
//     var rndCol = '#' + Math.floor(Math.random()*16777215);		
//      hero.style.backgroundColor = rndCol;   
//   }
 
  document.getElementById('changeColorBtn').addEventListener('click', function() {
    // Generate random RGB color values
    var randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  
    // Apply the random color as background color
    document.body.style.backgroundColor = randomColor;
    // console.log(randomColor);
    // document.getElementById('colorInput').value = randomColor;
    hero.value = randomColor;
  });
  