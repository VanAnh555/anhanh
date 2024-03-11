function showInfo() {
  //name
  var name = document.getElementById("name").value;

  //address
  var address = document.getElementById("address").value;

  //email
  var email = document.getElementById("email").value;

  //phone
  var phone = document.getElementById("phone").value;



  

  alert(
    "\n Name: " +
      name +
      "\n Gender: " +
      genderArr +
      "\n Adress: " +
      address +
      "\n Email: " +
      email +
      "\n Phone: " +
      phone +
    
  );

  //luu thong tin vao localStorage
  //localStorage.setItem("uname", name);
  localStorage.uname = name;
}
