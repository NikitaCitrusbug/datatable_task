const labelInputField = document.querySelector('#labelValue')
const form = document.querySelector('#form')
const inputType = document.querySelector('#inputType')
// console.log(labelInputField)
labelInputField.addEventListener('keyup', (e) =>{
    const keyPress = e.key
    // console.log(keyPress)
     
    if(keyPress === "Enter"){
        const type = inputType.value
        console.log(type)
    }

})