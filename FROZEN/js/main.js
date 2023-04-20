var API_URL = "http://localhost:8080/frozenShop";

var customer;


$(document).ready(() => {

    loginCustomer();
    addCustomer();
    logoutCustomer();
    hiddenButton();
    reset();
    deleteCustomer();
    subscribeLight();
    subscribeMax();
    subscribeMedium();
});

function hiddenButton(){
   $("logoutButton").hide(); 
}



function loginCustomer() {

    $("#loginButton").click(() => {

        $.ajax({
            url: 'http://localhost:8080/frozenShop/customer/login',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                email: $("#loginEmail").val(),
                password: $("#loginPassword").val()
               
            }),
            async: true,
            success: hideLogin,
            error: hideshit
        })

    });
}

function hideLogin(arg) {
    customer = arg;
    console.log(arg);
    alert("sucess");
    $("#firstButtonLogin").hide();
    $("#signupButtonfirst").hide();
    $("#logoutButton").show();
    $("#delete").show();
   
}

function hideshit() {
    alert("insuccessdsaf")
}


function logoutCustomer() {
    $("#logoutButton").click(() => {
        reloadPage();
    });
}


function subscribe() {
    $("#registerButton").click(() => {
        $.ajax({
            url: API_URL + '/customer/subscribe ',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                id: $("#subId").val()
            }),
            async: true,
        })
        reloadPage();
    });
}


function addCustomer(arg) {
    $("#registerButton").click(() => {
        $.ajax({
            url: API_URL + '/customer/add',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                firstName: $("#inputFirstName").val(),
                lastName: $("#inputLastName").val(),
                email: $("#inputEmail").val(),
                password: $("#inputPassword").val(),
                phone: $("#inputPhone").val()
            }),
            async: true,
            error: addError,
            success: accCreated
        })

    });
}

function addError(){
    alert("Unable to create account")
}

function accCreated(){
    customer = $("#inputEmail").val();
    
    alert($("#inputFirstName").val() + ", you can now login as" + $("#inputEmail").val());
    reloadPage();
}

function reloadPage() {
    location.reload();
}


function updateCustomer() {
    $("#update").click(function (event) {
        console.log(customerUpdate.id);
        console.log($("#phone").val());
        $.ajax({
            url: API_URL + "/customer/" + customerUpdate.id,
            type: 'PUT',
            data: JSON.stringify({
                id: customerUpdate.id,
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#email").val(),
                phone: $("#phone").val()
            }),
            async: true,
            contentType: "application/json",
            error: accUpError,
            success: accUpdated
        });
      
        
    });
}



function subscribeMedium() {
    $("#subscribeButton").click(() => {
        
        if (customer == null){
            alert('Please Login First');
        }
        
        else{
            alert('Piroca');
        }
        
        
    });
}



function subscribeLight() {
    $("#subscribeLight").click(() => {
        
        if (customer == null){
            alert('Please Login First');
        }
        
        else{
            alert('Piroca');
        }
        
        
    });
}



function subscribeMax() {
    $("#subscribeMax").click(() => {
        
        if (customer == null){
            alert('Please Login First');
        }
        
        else{
            alert('Piroca');
        }
        
        
    });
}





function accUpError(){
    alert('Unable to update account')
}


function accUpdated(){
    customer = $("#email").val();
    alert("Profile updated")
}

function deleteCustomer() {
    $("#delete").click(() => {
    
        $.ajax({
        url: API_URL + "/customer/" + customer.id,
        type: 'DELETE'
    })
    reloadPage();
});

}
function reset(){

    $("#reset").click(() =>{
    $("#inputFirstName").val(""),
    $("#inputLastName").val(""),
    $("#inputEmail").val(""),
    $("#inputPassword").val(""),
    $("#inputPhone").val("")

    });
}
$(document).ready(function(){

    $(window).load(function(){
        $duration = 10;
        $('.seconds').text($duration);
        $('.popup-wrap').fadeIn(1500);

        $myTimer = setInterval(function(){ startTimer() }, 1000);
        $('.popup .btn-close').on("click",function(){
            clearInterval($myTimer);
            $('.popup-wrap').fadeOut(500);
        });
        
        function startTimer(){
            $duration--;
            $('.seconds').text($duration);
            if($duration==0){
                clearInterval($myTimer);
                $('.popup-wrap').fadeOut(500);
            }
        }
    });
});






