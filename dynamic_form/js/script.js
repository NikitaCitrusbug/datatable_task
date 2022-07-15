const labelInputField = document.querySelector('#labelValue')
const colorInputField = document.querySelector('#colorValue')
const form = document.querySelector('#form')
const inputType = document.querySelector('#inputType')
// console.log(labelInputField)
// console.log(colorInputField)
// labelInputField.addEventListener('keyup', (e) =>{
//     const keyPress = e.key
//     // console.log(keyPress)
     
//     if(keyPress === "Enter"){
//         const type = inputType.value
//         // console.log(type)
//         const label = labelInputField.value
//         const labelInput = document.createElement("label")
//         const div = document.createElement("div")
//         const input = document.createElement("input")
//         labelInput.innerHTML = label;
//         input.type = type;
//         // input.classList.add('form-control');
//         // labelInput.classList.add('form-label')
//         div.classList.add('mb-3')
//         if(type != "radio" && type != "checkbox"){
//             input.classList.add('form-control');
//             labelInput.classList.add('form-label')
//         }
//         if(type != "submit"){
//             div.appendChild(labelInput)
//         }

//         if(type == "submit"){
//             input.classList.add('btn')
//             input.classList.add('btn-success')
//             input.value = label

//         }
        
//         div.appendChild(input)
//         form.appendChild(div)
//         // console.log(type , label)

//     }

// })

// document.getElementById('colorValue').addEventListener('click' , function myFunction(){
//     const typec = colorInputField.value
//     console.log(typec)

//     labelInputField.addEventListener('keyup', (e) =>{
//         const keyPress = e.key
//         // console.log(keyPress)
         
//         if(keyPress === "Enter"){
//             const type = inputType.value
//             // console.log(type)
//             const label = labelInputField.value
//             const labelInput = document.createElement("label")
//             const div = document.createElement("div")
//             const input = document.createElement("input")
//             labelInput.innerHTML = label;
//             typec.innerHTML = labelInput;
//             console.log(input)
//             input.style.color = typec;
//             input.type = type;
//             // input.classList.add('form-control');
//             // labelInput.classList.add('form-label')
//             div.classList.add('mb-3')
//             if(type != "radio" && type != "checkbox"){
//                 input.classList.add('form-control');
//                 labelInput.classList.add('form-label')
//             }
//             if(type != "submit"){
//                 div.appendChild(labelInput)
//             }
    
//             if(type == "submit"){
//                 input.classList.add('btn')
//                 input.classList.add('btn-success')
//                 input.value = label
    
//             }
            
//             div.appendChild(input)
//             form.appendChild(div)
//             // console.log(type , label)
    
//         }
    
//     })

    



// }
// )


labelInputField.addEventListener('keyup', (e) =>{
    
    // console.log(keyPress)
     

    document.getElementById('colorValue').addEventListener('dblclick' , function myFunction(){
        const typec = colorInputField.value
        console.log(typec)
        const keyPress = e.key
        if(keyPress === "Enter"){


            
            const type = inputType.value
            // console.log(type)
            const label = labelInputField.value
            const labelInput = document.createElement("label")
            const div = document.createElement("div")
            const input = document.createElement("input")
            labelInput.innerHTML = label;
            console.log(input)
            input.style.color = typec;
            input.type = type;
            // input.classList.add('form-control');
            // labelInput.classList.add('form-label')
            div.classList.add('mb-3')
            if(type != "radio" && type != "checkbox"){
                input.classList.add('form-control');
                labelInput.classList.add('form-label')
            }
            if(type != "submit"){
                div.appendChild(labelInput)
            }
    
            if(type == "submit"){
                input.classList.add('btn')
                input.classList.add('btn-success')
                input.value = label
    
            }
            
            div.appendChild(input)
            form.appendChild(div)
            // console.log(type , label)
    
        }

    })
    

})


