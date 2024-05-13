const name = document.querySelectorAll('#name')
const email = document.querySelectorAll('#email')
const message = document.getElementById('message')
const btnJoin = document.getElementById('btn-join')
const btnContact = document.getElementById('btn-contact')
const result = document.querySelectorAll('#result')

btnJoin.addEventListener('click', (e)=>{
    e.preventDefault()  
    let error = verification(0)
    valid(error, 0)
})

btnContact.addEventListener('click', (e)=>{
    e.preventDefault()  
    let error = verification(1)
    valid(error, 1)
})



function verification(i) {
    let error = []
    if (name[i].value.length < 3) {
        error[0] = true
        error[1] = 'El nombre debe tener mas de 3 carácteres'
        return error
    } else if (name[i].value.length > 40){
        error[0] = true
        error[1] = 'El nombre debe tener menos de 40 carácteres'
        return error
    } else if (!/^\S+@\S+\.\S+$/.test(email[i].value)){
        error[0] = true
        error[1] = 'Introduzca un mail válido'
        return error
        
    } else if (i == 1 && message.value.length < 10){
        error[0] = true
        error[1] = 'El mensaje debe tener mínimo 10 carácteres'
        return error
    } 
    
    else return error[0] = false
    
    
    
}

function valid(error, i) {
    if (error[0]) {
        result[i].innerHTML = error[1]
        result[i].classList.add('red')
        result[i].classList.remove('green')
    } else {
        result[i].innerHTML = 'Solicitud enviada :)'
        result[i].classList.remove('red')
        result[i].classList.add('green')
    }
}




























//   if (name[0].value.length < 4) {
//         console.log(name[0].value.length)
//         result.innerHTML = "El nombre debe tener mas de 4 carácteres"
//         result.style.color = "orange"
//         result.style.fontSize = "20px"
//         result.style.margin = "0 auto"
//     } else {
//         result.innerHTML = "Nombre válido"
//         result.style.color = "green"
//         return alert('jeje')
        
//     }