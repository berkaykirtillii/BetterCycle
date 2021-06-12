$(document).ready(function() {

  
      var personalInfo = document.getElementById("personal-info");

      var infoRequest= new XMLHttpRequest();
      infoRequest.overrideMimeType("application/json");
      infoRequest.open("GET","json/personal-info.json",true);
     
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
      commentsRequest.open("GET","json/personal-info.json",true);
      
  }); 