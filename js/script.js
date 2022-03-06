let male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
let female =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
let form = document.getElementById("form");


displayOutput = document.getElementById("revelation");
console.log("out")
//getting user date of birth
form.addEventListener("submit",onSubmit);
console.log("two")
//call the function
function onSubmit (event) {
    event.preventDefault();
    let userDob = document.getElementById("date").value;
    if (userDob === "") {
        alert("enter date of birth")
    }else{
        let dob = new Date(userDob);
        let dayDob = dob.getDay();
        let gender =document.getElementsByName("gender");
        for(let i of gender){
            if(i.checked){
                if (i.value === "male") {
                   displayOutput.innerText = (`Your Akan name is ${male[dayDob]}`) 
                   return;
                } else {
                    displayOutput.innerText = (`Your Akan name is ${female[dayDob]}`) 
                    
                } return;
            }else{
                alert("select gender")
            }
        }
    }
    };



    
    
    
    