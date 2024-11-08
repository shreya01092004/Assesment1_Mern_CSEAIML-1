function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") { 
      
      return   true;
    } else {
        alert("Invalid username or password.");
    
       return  false;
    }
};
