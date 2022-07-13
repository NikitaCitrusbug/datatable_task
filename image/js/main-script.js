var image_workspace = document.querySelector('.image-workspace img')
var actionButton = document.querySelectorAll('.action-button button')
var hiddenUpload = document.querySelector('.action-button .hidden-upload')
var image_workspaceSpan = document.querySelector('.image-workspace span')
var preview_containerSpan = document.querySelector('.preview-container span')
var controlCropper = document.querySelectorAll('.bottom-control .ctrl-cropper svg')
var lockCropper = document.querySelectorAll('.bottom-control .lock img')
var dargMode = document.querySelectorAll('.bottom-control .drag-mode img')


actionButton[0].onclick = () => hiddenUpload.click()
hiddenUpload.onchange = () => {
    var file = hiddenUpload.files[0]
    // console.log(file)
    var url = window.URL.createObjectURL(new Blob([file], { type : 'image/jpg' }))
    // console.log(url)
    image_workspace.src = url
    // console.log(image_workspace.src)
    image_workspaceSpan.style.display = 'none'
    preview_containerSpan.style.display = 'none'

    var options = {
        dragMode: 'move',
        preview: '.img-preview',
        viewMode: 4,
        // modal: false,
        background: false,
        ready: function(){
            
            controlCropper[0].onclick = () => cropper.clear()
            controlCropper[1].onclick = () => cropper.crop()

            // lock cropper
            lockCropper[0].onclick = () => cropper.disable()
            lockCropper[1].onclick = () => cropper.enable()

            // drag mode
            dargMode[0].onclick = () => cropper.setDragMode("crop")
            dargMode[1].onclick = () => cropper.setDragMode("move")

            // download cropped image
            actionButton[1].onclick = () => {
                actionButton[1].innerText = '...'
                cropper.getCroppedCanvas().toBlob((blob) => {
                    var downloadUrl = window.URL.createObjectURL(blob)
                    var a = document.createElement('a')
                    a.href = downloadUrl
                    a.download = 'cropped-image.jpg' // output image name
                    a.click()
                    actionButton[1].innerText = 'Download'
                })
            }
        }
    }

    var cropper = new Cropper(image_workspace, options)
}