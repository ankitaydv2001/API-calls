function fetchUserDetails() {
    const divtag=document.getElementById("l");
    divtag.hidden=true;
    
    for(let i=1;i<=6;i++){
        fetch(`https://reqres.in/api/users/${i}`)
        .then(response => response.json())
        .then(user => {
            displayUserDetails(user);
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
        });
    }
    const button=document.getElementById('b1');

    button.setAttribute("disabled",true);
}

function displayUserDetails(user) {
    const id = user.data.id;
    const Fullname = user.data.first_name+" "+user.data.last_name;
    const email = user.data.email;
    
    const userDetailsSection = document.getElementById('userDetails');
    userDetailsSection.innerHTML += `<tr><td> ${id}</td><td> ${Fullname}</td><td> ${email}</td></tr>`; 
}