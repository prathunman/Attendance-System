if (sessionStorage.getItem("jwtToken") === null) {
    window.location.href = "login.html";
}

document.getElementById('profileImage').addEventListener('click', function() {
    let dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });
  
  window.onclick = function(event) {
    if (!event.target.matches('#profileImage')) {
      let dropdown = document.getElementById('dropdownMenu');
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      }
    }
};

document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    logout();
});
  
function logout() {
    sessionStorage.removeItem('jwtToken'); 
    window.location.href = 'login.html'; 
}