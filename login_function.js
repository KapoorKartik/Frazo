let login_btn = document.getElementById("login_btn")
let login = document.getElementById("login")
let remove = document.getElementById('sumbit_btn')
let login_text = document.getElementById("login_text")
function showLogin() {
  setTimeout(function(){
    login.style.display = 'block'
  },1500)
  
}
function removeLogin() {
  setTimeout(function(){
    login.style.display = 'none'
    window.location.reload();
  },1500)
  
}
function changeColor() {
  login_text.style.color = 'black'
}
function reverseColor(){
  login_text.style.color = 'gray';
}


function redirect(){
  
window.location.href = 'logout.html';
}
let login_details = JSON.parse(localStorage.getItem('login_details'))
console.log(login_details)
if (login_details != null) {
  login_text.textContent = login_details
  login_btn.removeEventListener('click',showLogin)
  login_btn.addEventListener('click',redirect);
  
}
else {
login_btn.addEventListener('click',showLogin);
remove.addEventListener('click', removeLogin);
}



login_btn.addEventListener('mouseover',changeColor)
login_btn.addEventListener('mouseout', reverseColor)