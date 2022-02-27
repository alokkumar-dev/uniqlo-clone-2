// var userData = JSON.parse(localStorage.getItem("userDataBase")) || [];

// function signUp(event) {
//     event.preventDefault()

//     var email = document.getElementById("email").value;
//     var password = document.getElementById("create_password").value;
//     var birthday = document.getElementById("birthday").value;
//     var male = document.getElementById("male");
//     var female = document.getElementById("female");
//     var others = document.getElementById("Others");
//     var pincode = document.getElementById("pin").value;
//     var checkbox = document.getElementById("checkbox").checked

//     var obj = {
//         email: email,
//         create_password: password,
//         birthday: birthday,
//         checkbox: true,
//         pincode: pincode,
//         gender: male.checked ? "male" : female.checked ? "female" : others.checked ? "others" : null
//     }
//     console.log(obj)
//     userData.push(obj);

//     window.location.href = "login.html";
//     localStorage.setItem("userDataBase", JSON.stringify(userData))
//     alert("User registered sucessfully !!")
// } 

async function signUp(e){
    
    try{
        e.preventDefault();
        var register_data ={
      
        email: document.getElementById("email").value,
          password: document.getElementById("create_password").value,
          pincode: document.getElementById("pin").value,
          birthday: document.getElementById("birthday").value,
          gender: document.getElementById("genders").value,
      }
        register_data =JSON.stringify(register_data);
        console.log(register_data);
        
    }
       catch(e){
           console.log(e)
        }
        let reg_api = `https://uniqlo-clone.herokuapp.com/register`
        let response =await fetch(reg_api,{
            method:"POST",
            body:register_data,
            headers:{
                "Content-Type" :"application/json"
            }
        });
        let data =await response.json();
        console.log(data);
        alert("User registered sucessfully !!");
        localStorage.setItem("userToken", JSON.stringify(data.token));
        window.location.href = "login.html";
    }