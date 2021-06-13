$(document).ready(function() {

  
      var personalInfo = document.getElementById("personal-info");

      var infoRequest= new XMLHttpRequest();
      infoRequest.overrideMimeType("application/json");
      infoRequest.open("GET","cors-internal.php");
      infoRequest.onload=function(){
        var ourData = JSON.parse(infoRequest.responseText);
      renderHTML(ourData);
      };
     
      infoRequest.send();
         
      function renderHTML(data){
          var htmlString="";    
          htmlString+="<h5>" + data.name + "</h5>";
          htmlString+="<p class='title'>" + data.title + "<p>";
          htmlString+="<p>" + data.about + "</p>";
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
        var text = "";
           for(let i= 0; i< data.length ;i++){
             
             text+= " <div class='col-md-5 offset-1'><p>" 
             + data[i].comment +"</p></div>";              

           
           }
           comText.innerHTML = text;

           textData = ""
      }


  
  }); 