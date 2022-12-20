let users = [];

let log = false;
let actBut = 0;
function check() {

    let username = document.getElementById("username").value;
    let gender = "";
    console.log (document.getElementById("male").checked);
    if(document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    }else if(document.getElementById("female").checked){
        gender = document.getElementById("female").value;
    }
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    console.log(gender);
    if(username === "" || gender === "" || email === "" || password1 === "" || password2 ==="") {
        window.alert("Please try again");
    } else if(username !== "" && gender !== "" && email !== "" && password1 !== "" && password2 !=="") {

        if(!email.includes("@")) {
            window.alert("Please try again. EMAIL");
        }
        else if(password1 !== password2) {
            window.alert("Please try again. PASSWORD");
        }else {
            let t = false;
            for(let i = 0; i < users.length;i++ ) {
                if(email === users[i].email){
                    t = true;
                }
            }
            if(!t){
                window.alert("You have successfully registered!!!");

                login();
            }else {
                window.alert("Please try again. EMAIL");

            }
        }
    }

}

function login() {

    $("#registration").animate({left: '+=100px',
    },0);
    $("#registration").hide();
    $("#registration").animate({left: '-=100px',
    },"slow");

    $("#login").show();
    $("#login").animate({left: '+=100px',
    },0);
    $("#login").animate({left: '-=100px',
    },"slow");

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
    if(document.getElementById("male").checked) {
        document.getElementById("male").checked = false;
    }else if(document.getElementById("female").checked){
        document.getElementById("female").checked = false;
    }
}


function signIn(){

    document.getElementById("user's_Name").innerHTML = "Name: " + users[i].name;
    document.getElementById("user's_Surname").innerHTML = "Surname: " + users[i].surname;
    document.getElementById("user's_gender").innerHTML = "Gender: " + users[i].gender;
    window.alert("You have succesfully sign in!!!");

    $("#login").hide();
    $("#login").animate({left: '-=100px',
    },0);
    $("#login").animate({left: '+=100px',
    },"slow");

    $("#profile").show();
    $("#profile").animate({left: '-=100px',
    },0);
    $("#profile").animate({left: '+=100px',
    },"slow");

    document.getElementById("email1").value = "";
    document.getElementById("passwordSign").value = "";
}


function signOut() {
    $("#login").hide();
    $("#login").animate({left: '-=100px',
    },0);
    $("#login").animate({left: '+=100px',
    },"slow");

    $("#registration").show();
    $("#registration").animate({left: '-=100px',
    },0);
    $("#registration").animate({left: '+=100px',
    },"slow");

    document.getElementById("email1").value = "";
    document.getElementById("passwordSign").value = "";

}

function signOut1() {
    $("#profile").hide();
    $("#profile").animate({left: '-=100px',
    },0);
    $("#profile").animate({left: '+=100px',
    },"slow");

    $("#registration").show();
    $("#registration").animate({left: '-=100px',
    },0);
    $("#registration").animate({left: '+=100px',
    },"slow");
}

function logPhp(uname,pass) {
    alert(uname + " " + pass);
    $.ajax({
        url: 'login.php',
        type: 'POST',
        data: {username: uname, password: pass},
        success: function (result){
            console.log(result);
            if(result === "login") {
                document.getElementById("user's_Name").innerHTML = "Username: " + uname;
                window.alert("You have succesfully sign in!!!");
                $("#login").hide();
                $("#login").animate({left: '-=100px',
                },0);
                $("#login").animate({left: '+=100px',
                },"slow");

                $("#profile").show();
                $("#profile").animate({left: '-=100px',
                },0);
                $("#profile").animate({left: '+=100px',
                },"slow");

                document.getElementById("email1").value = "";
                document.getElementById("passwordSign").value = "";
            }else {
                alert("Incorrect input!!!")
            }
        },
        error: function (){}
    });
}
function regPhp(uname,email, pass, passAgain){
    console.log(3 + " " + pass  + " " + passAgain);
    if(pass == passAgain){
        $.ajax({
            url : 'registration.php',
            type : 'POST',
            data: {username: uname, password: pass, email: email},
            success : function (result) {
                console.log (result); // Here, you need to use response by PHP file.
                if(result == "Success!") {alert("Correct input");}
                else {alert("Wrong input");}
            },
            error : function () {
                console.log ('error');
            }
        });
    }
    else{
        alert("different password inputs!");
    }
}