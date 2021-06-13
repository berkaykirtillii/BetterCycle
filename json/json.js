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
  
  }); 