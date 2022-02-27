// function signin(e) {
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     var userData = JSON.parse(localStorage.getItem("User")) || [];
//     let userStatus = false;
//     localStorage.setItem("userStatus", userStatus);
//     let all_users = JSON.parse(localStorage.getItem("userDataBase"));
//     let flag = true ;
//     all_users.forEach(function (user) {
//       if (email == user.email && password == user.create_password)

//        {
//            flag=false
//         alert("Logged in Succesfully");
//         userStatus = true;
//         localStorage.setItem("userStatus", userStatus);
//         window.location.href = "profile.html";       // enter location where you want to redirect after successful login
//         localStorage.setItem("User",JSON.stringify(user));
//         console.log("User:",user)
//       }

//     });
//     if(flag){
//       userStatus = false;
//       localStorage.setItem("userStatus", userStatus);
//         alert("Invalid Email Id or Password")
//     }
//   }

//   function gotoLogin() {
//       window.location.href = "registration.html"   
//   } 







async function signin(e){
  e.preventDefault();
 let login_data ={
    
     email: document.getElementById("email").value,
     password :document.getElementById("password").value,
 };

 login_data =JSON.stringify(login_data)

 let login_url =`https://uniqlo-clone.herokuapp.com/login`;

  let response =await fetch(login_url,{
      method :"POST",

      body :login_data,

      headers :{
          "Content-Type" : "application/json"
      }
  });
  let data =await response.json();
  console.log(data);

  let email =document.getElementById("email").value;

  let flag = true ;
    // data.forEach(function (user) {
      if (data.token)

       {
           flag=false
        alert("Logged in Succesfully");
        userStatus = true;
        localStorage.setItem("userStatus", userStatus);
        window.location.href = "profile.html";       // enter location where you want to redirect after successful login
        localStorage.setItem("User",JSON.stringify(user));
        console.log("User:",user)
      }

    // });
    if(flag){
      userStatus = false;
      localStorage.setItem("userStatus", userStatus);
      document.getElementById("wrong_pass").style.color ="red"
      document.getElementById("wrong_pass").innerHTML ="Wrong Password"
       // alert("Invalid Email Id or Password")
    }
  }

 // getUser(email,data.token);



function gotoLogin() {
      window.location.href = "registration.html"   
  } 