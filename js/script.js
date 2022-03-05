let male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
let female =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let form = document.getElementById("form")
//getting user date of birth
form.addEventListener("submit",onSubmit);

//call the function

function onSubmit(event) {
    
    let userDob = document.getElementById("date").value;
    let dob = new Date(userDob);
}