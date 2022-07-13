var image_workspaceSpan = document.querySelector('.image-container span')

jSuites.crop(document.getElementById('image-cropper'), {
    area: [ 280, 280 ],
    crop: [ 100, 100 ],
    
})    
 
document.getElementById('img').onclick = function() {
    
    var img_crop = document.getElementById('image-cropper-result').children[0].src;
    console.log(img_crop)
    var crop_result = document.getElementById('image-cropper').crop.getCroppedImage().src;  
    console.log(crop_result)
    // img_crop = crop_result;
    document.getElementById('image-cropper-result').children[0].src = document.getElementById('image-cropper').crop.getCroppedImage().src;  
    
}