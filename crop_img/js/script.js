// var result = document.querySelector('.result')
// var img_result = document.querySelector('.img-result')
// var img_w = document.querySelector('.img-w')
// var options = document.querySelector('.options')
// var save = document.querySelector('.save')
// var download = document.querySelector('.download')
// var crop_img = document.querySelector('.crop-img')
// var upload = document.querySelector('#file-input')

// var cropper = ""

// upload.addEventListener('change' , (e) => {
//     console.log(e)
// })

// upload.onclick = (e) => {
//     console.log(e)
// }



function cropImg(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    var image = new Image();
    image.src = "image/pexels-pixabay-257360.jpg"; 
    
    image.onload = function(){
        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      ctx.drawImage(image, 500, 900, 1000, 500, 60,60, 800, 500);
    }


    // var img = new Image();
    // img.src = "image/66b7f6e5ad85cdfeab3459f2b5480407.jpg"; 
    
    // img.onload = function(){
    //   ctx.drawImage(img, 1000, 1200, 1000, 500, 60,60, 800, 500);
    // }
  }
  
  cropImg();