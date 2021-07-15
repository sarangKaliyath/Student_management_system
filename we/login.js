const admins = [

    { username: "alpha", password: "alpha" },
    
    { username: "bravo", password: "bravo" },
    
    { username: "delta", password: "delta" },
    

];

if (localStorage.getItem("admins") == null) {
    
    localStorage.setItem("admins", JSON.stringify(admins));
}


function startLogin(e) {

    e.preventDefault();

    // 1. getting the data
    const form = document.getElementById("login");
    
    const username = form.username.value;

    const password = form.password.value;


    // 2. check the data
    const admins = JSON.parse(localStorage.getItem("admins"));


    for (let i = 0; i < admins.length; i++){
        
        let u = admins[i].username;
        let p = admins[i].password;

        if (u === username && p === password) {

            window.location.href = 'home.html'
            break;
        }
       

    }


}