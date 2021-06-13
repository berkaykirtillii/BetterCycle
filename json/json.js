$(document).ready(function() {

  
      var personalInfo = document.getElementById("personal-info");

      var infoRequest= new XMLHttpRequest();
      infoRequest.open("GET","cors-internal.php",true);
      infoRequest.onload=function(){
        var ourData = JSON.parse(infoRequest.responseText);
      renderHTML(ourData);
      };
     
      infoRequest.send();
         
      function renderHTML(data){
          var htmlString="";    
          htmlString+="<h5>" + data[0].name + "</h5>";
          htmlString+="<p class='title'>" + data[0].title + "<p>";
          htmlString+="<p>" + data[0].about + "</p>";
          personalInfo.innerHTML = htmlString;    
          
          ourData = ""
      }



      var comText = document.getElementById('comments-texts');

      var commentRequest= new XMLHttpRequest();
      commentRequest.open("GET","https://sprintberkay.herokuapp.com/json/cors-external.php",true);
      commentRequest.onload=function(){
      var textData = JSON.parse(commentRequest.responseText);
      renderCommentHTML(textData);
      };
      commentRequest.send();

      function renderCommentHTML(data){
           for(let i= 0; i< data.length ;i++){
             var text = "";
             text+= "   <div class='col-md-5 offset-1'><p>" +data[1].comment +
              " <span>  <i id='like' class='fas fa-angle-double-up'>" +
              "<i id='likeCounter' class='text-normal'>13</i></i>" +
              "<i id='dislike' class='fas fa-angle-double-down'>"+
              "<i id='dislikeCounter' class='text-normal'>2</i></i>"+
              "</span></p></div>";              
              comText.innerHTML = text;

              textData = ""
           
           }
      }


  
  }); 