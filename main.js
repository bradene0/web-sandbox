document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    
    setTimeout(function() {
    
      document.getElementById("success-message").classList.add("show", "fade-in");
    }, 1000);
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
  
  document.querySelector(".hire-m a").addEventListener("click", function(e) {
    e.preventDefault();
    toggleContactSection();
  });
  
  function toggleContactSection() {
    var contactSection = document.getElementById("contact");
  
    /* Toggle section visibility and apply slide animation*/
    if (contactSection.classList.contains("hidden")) {
      contactSection.classList.remove("hidden");
      contactSection.classList.add("slide-up");
    } else {
      contactSection.classList.remove("slide-up");
      contactSection.classList.add("slide-down");
      setTimeout(function() {
        contactSection.classList.add("hidden");
      }, 500);
    }
  }



  