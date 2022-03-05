let male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
let female =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let form = document.getElementById("form");
displayOutput = document.getElementById("revelation");
//getting user date of birth
form.addEventListener("submit",matilda);

//call the function

function matilda(event) {
    event.preventDefault();
    let userDob = document.getElementById("date").value;
    console.log(userDob)
    let dob = new Date(userDob);
    let dayDob = dob.getDay()
    let gender= document.getElementsByName("gender").value;
    for (let i in gender){
        if (i.checked) {
            if ( gender==="male") {
            displayOutput.innerText =(`Your Akan name is ${male[dayDob]}`)
            }
        }
        
    }
        
    };
