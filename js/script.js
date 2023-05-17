var menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(function(link) {
  link.addEventListener("mouseover", function() {
    link.style.transform = "scale(2)";
    link.style.boxShadow = "0 0 50px rgba(0, 0, 0, 0.7)";
  });

  link.addEventListener("mouseout", function() {
    link.style.transform = "scale(1)";
    link.style.boxShadow = "none";
  });
});

var button = document.querySelector('button[type="submit"]');

  button.addEventListener('mouseover', function() {
    button.classList.add('button-animation');
  });

  button.addEventListener('mouseout', function() {
    button.classList.remove('button-animation');
  });

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var formData = new FormData(this);
  
    var subject = 'Calm. Нове повідомлення!'; 
    var body = ''; 
    for (var pair of formData.entries()) {
      body += pair[0] + ': ' + pair[1] + '\n'; 
    }
  
    var mailtoLink = 'mailto:stas240723@ukr.net?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink; 
  });