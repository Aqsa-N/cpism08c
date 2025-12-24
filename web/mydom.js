
let register = document.getElementById("register");
register.addEventListener('click', function(e){

    e.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    document.getElementById("para1").innerHTML = name
    document.getElementById("para2").innerHTML = email
    document.getElementById("para3").innerHTML = pass

    localStorage.setItem('name',name )
    localStorage.setItem('email',email )
    localStorage.setItem('pass',pass )


    let para = document.getElementsByClassName("para")[0].innerHTML = name
        document.getElementsByTagName('p')[1].innerHTML = name
    
})

let anchor = document.getElementById("anchor")
anchor.addEventListener('click', function(en){
    en.preventDefault()
})