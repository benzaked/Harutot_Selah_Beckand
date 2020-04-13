function onSignIn(googleUser)
{
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
    $("#name").text(profile.getName());
}

function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("thal hkofa!!!!")
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    });
}


// function onSignInFB(){
// FB.getLoginStatus(function(response) {
//     if(response.authResponse){
//         FB.getLoginStatus(function(response) {
//             console.log(response);
//             statusChangeCallback(response);
//         });
//         // FB.api('/me','GET',{fields:'email,name,picture'},function(response){
//         //     $(".g-signin2").css("display","none");
//         //     $(".data").css("display","block");
//         //     $("#pic").attr('src',response.picture.data.url);
//         //     $("#email").text(response.email);
//         //     $("#name").text(response.name);
//         // })
//     }   
// }); 
// }
// function statusChangeCallback(response)
// {
//     console.log(response);
//     if(response.status === "connected")
//     {
//         $("#login").hide();
//         $("#logout").show(); 
//         fetchUserProfile();
//     }
//     else{
//         // Logging the user to Facebook by a Dialog Window
//         facebookLoginByDialog();
//     }
// }

// function facebookLoginByDialog()
// {
//     FB.login(function(response) {
    
//         statusChangeCallback(response);
    
//     }, {scope: 'public_profile,email'});
// }
// function fetchUserProfile()
// {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me?fields=id,name,email,gender,birthday', function(response) {
//     console.log(response);
//     console.log('Successful login for: ' + response.name);
//     var profile = `<h1>Welcome {response.name}<h1>
//     <h2>Your email is ${response.email}</h2>
//     <h3>Your Birthday is ${response.birthday}</h3>`;
//     $("#status").append(profile);
//     });
// }
