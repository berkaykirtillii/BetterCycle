//login form
function login(form){
  if(form.loginMail.value=="user12@gmail.com" && form.loginPassword.value=="qwerty"){
    window.open("profile.html","_self")
  }
  else{
    alert("The username and password dont match!")
  }
}

$('#loginBtn').click(function(){
  $('.login-page').toggleClass('login-panel-show');
  $('#loginBtn').toggleClass('login-btn-hide'); 
});


  $('.container').click(function(){
    if($('#loginID').hasClass('login-panel-show')){
      $('.container').click(function(){
        $('.login-page').toggleClass('login-panel-show');
        $('#loginBtn').toggleClass('login-btn-hide'); 
      });
    }  
  });


//index.html partner logo slider
$('.partners-logos').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay:true,
  autoplaySpeed: 1500,
  infinite: true,
});


//vote.html save button hover  
$(".right-container-button").hover(function ()
 {
  $(".long-text").addClass("show-long-text");
 },
 function () {
   $(".long-text").removeClass("show-long-text");
 }
);