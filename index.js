


onchanged = (e) =>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username',username);
    window.location.assign('/instruction.html');
}
