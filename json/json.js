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
          htmlString+="<h5>" + data[1].name + "</h5>";
          htmlString+="<p class='title'>" + data[1].title + "<p>";
          htmlString+="<p>" + data[1].about + "</p>";
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
             text+= " <div class='col-md-5 offset-1'><p>" 
             + data[i].comment +"</p></div>";              
              comText.innerHTML = text;

              textData = ""
           
           }
      }


  
  }); 