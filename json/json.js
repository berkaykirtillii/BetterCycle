$(document).ready(function() {

  
      var personalInfo = document.getElementById("personal-info");

      var infoRequest= new XMLHttpRequest();
      infoRequest.open("GET","cors-internal.php",true);
     
      infoRequest.onload=function(){
      var ourData=JSON.parse(infoRequest.responseText);
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

      
     
      
  }); 