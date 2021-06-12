//login form
function login(form){
  if(form.loginMail.value=="user12@gmail.com" && form.loginPassword.value=="qwerty"){
    window.open("profile.html","_self")
  }
  else{
    alert("The username and password dont match!")
  }
}

//Login popup toggle
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
  dots: false,
  arrows: true,
  autoplay:true,
  autoplaySpeed: 1500,
  infinite: true,
});


//vote.html save button hover  
$('.right-container-button').hover(function ()
 {
  $('.long-text').addClass('show-long-text');
 },
 function () {
   $('.long-text').removeClass('show-long-text');
 }
);

//autocomplete in performance.html
function autoComp() {
  var availableTags = [
  "Berkay Kırtıllı",
  "Ali Cem",
  "Abdullah Gor",
  "Kubilay Atasoy",
  "Ceyhun Varol",
  "Emrecan Kılıç",
  "Berkan Arabacı",
  "Veli Ozturk",
  "Ceyda Baydas",
  "Buse Kurtaran",
  "Ebru Kaz",
  "Selma Kurtarici",
  "Ayse ",
  "Fatma",
  "Hayriye",
  "Burak",
  "Enes",
  "Tarık"
  ];
  $( "#search-input" ).autocomplete({
    source: availableTags
  });
}


//circle progress bar
function chart(){
  $('.circlechart').circlechart(); 
}


