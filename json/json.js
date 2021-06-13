$(document).ready(function() {

      var personalInfo = document.getElementById("personal-info");

      var infoRequest= new XMLHttpRequest();
      infoRequest.open("GET","personal-info.json",true);
     
      infoRequest.onload=function(){
      var ourData=JSON.parse(infoRequest.responseText);
      renderHTML(ourData);
      };
     
      infoRequest.send();
         
      function renderHTML(data){
          var htmlString="";    
          htmlString+="<h5>" + data.info[0].name + "</h5>";
          htmlString+="<p class='title'>" + data.info[0].title + "<p>";
          htmlString+="<p>" + data.info[0].about + "</p>";
          personalInfo.innerHTML = htmlString;    
          
          ourData = ""
      }

      
      var commentsText = document.getElementById("comments-text");

      var commentsRequest = new XMLHttpRequest();
      commentsRequest.open("GET","https://sprintberkay.herokuapp.com/json/cors-external.php",true);

      commentsRequest.onload=function(){
          var textData=JSON.parse(commentsRequest.responseText);
          renderCommentHTML(textData);
      };

      commentsRequest.send();

      function renderCommentHTML(data){
          var text = "";
          for(let i = 0 ; i < data.length ;i++){
            text+="<div class='col-md-5 offset-1'><div class='comment'><p>"+
            data.comments[i].comment+ "<span><i id='like' class='fas fa-angle-double-up'>"+
            "<i id='likeCounter' class='text-normal'>13</i></i>"+
            "<i id='dislike' class='fas fa-angle-double-down'>"+
            "<i id='dislikeCounter' class='text-normal'>2</i></i>"+
            "</span></div>";
          }
           commentsText.innerHTML=text;
      }
      
  }); 