let emailEl = document.querySelector('#email')
let passEl = document.querySelector('#password')
let btnEl = document.querySelector('#btn')






// async function getLogin(user){
//   let res =  await fetch('https://pressa-exem.herokuapp.com/login',{
//         method:'post',
//         headers:{'Content-type':'application/json'},
//         body:JSON.stringify(user)
//     })
//   let  response = await res.json()
//   console.log(response)
//     if(response.token && response.token != null){
//       window.localStorage.setItem('token',response.token)
//       window.location.replace('./index.html')
//     }
// }

// let a = btnEl.addEventListener('click',()=>{

// localStorage.setItem(email,emailEl.value )
// localStorage.setItem(password,passEl.value )
// window.location.replace('./index.html')
// getLogin(user)
// })
