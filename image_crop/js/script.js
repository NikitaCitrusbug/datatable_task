

var image_workspace = document.querySelectorAll('.image-workspace img')
// var imageworkspacespan = document.querySelector('.image-workspace span')
var previewcontainer = document.querySelector('.preview-container')
// var previewcontainerspan = document.querySelector('.preview-container span')
var actionButton = document.querySelectorAll('.action-button button')
// var upload = document.querySelector('.action-button .hidden-upload')
// console.log(actionButton[0]);
// console.log(actionButton[1]);
// console.log(upload)
// var download = document.querySelectorAll('.action-button .download')
// var cropcontrol = document.querySelector('.control .crop-control img')
// var dragcontrol = document.querySelector('.control .drag-control img')
var image_workspaceSpan = document.querySelector('.image-workspace span')
var preview_containerSpan = document.querySelector('.preview-container span')
var hiddenUpload = document.querySelector('.action-button .hidden-upload')
var controlCropper = document.querySelectorAll('.bottom-control .ctrl-cropper svg')
var lockCropper = document.querySelectorAll('.bottom-control .lock svg')
var dargMode = document.querySelectorAll('.bottom-control .drag-mode svg')

// var uploaded_image = ""
// image_workspace.addEventListener("change" , function(){
//     console.log(image_workspace.value);
// })



// actionButton[0].onclick = () => hiddenUpload.click()
// hiddenUpload.onchange = () => {
//     var file = hiddenUpload.files[0]
//     console.log(file)
//     var file_name = file.name
//     console.log(file_name)
//     // var URL = window.URL.createObjectURL(new Blob([file], { type : 'image/jpg' }))
//     image_workspace.src = URL
//     image_workspaceSpan.style.display = 'none'
//     preview_containerSpan.style.display = 'none'
    
// }


// actionButton[0].onclick = () => upload.click()
// upload.onchange = () =>{
//     var file = upload.files[0]
//     // console.log(upload.files)
//     // console.log(typeof(file))
//     console.log(file.name)
//     // file[Object.keys(file)[0]];
   
//     // fname = file[0]
//     // console.log(fname);
//     const fname = Object.entries(file);
//     // console.log(fname);
//     var file_name = file.name
//     console.log(file_name)
//     const blob = new Blob([file] , {type : "image/png"})
//     console.log(blob);
//     var url = window.URL.createObjectURL(blob)
//     // var url = window.URL.createObjectURL(file)
//     // const a = document.createElement('a');
//     // a.href = url;
//     // console.log(a);
//     image_workspace.src = url
//     // console.log(image_workspace.src)
//     imageworkspacespan.style.display = 'none';
//     previewcontainerspan.style.display = 'none';


//     var options = {
//         preview : 'img-preview',
//         background : false,
//         ready: function(){
//             // console.log("ready")
//         }
//     }
//     // console.log(options)
//     // var cropper = new Cropper(image_workspace , options)
// }
// // console.log(actionButton[0]);
// // var op = {
// //     ready: function(){
// //         cropcontrol[0].onclick = () => cropper.crop()
// //     }
    

// // }
// // // var cropper = new cropper(image_workspace , op)


