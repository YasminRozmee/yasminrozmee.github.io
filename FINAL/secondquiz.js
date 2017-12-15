var Quest = new Array(10);  

function populate() { 

  for(var i=0; i<10; i++) { Quest[i]=0; } 
} 

function total() { 

  myScore=0; 
  for (var i=0; i<10; i++) { myScore=myScore+Quest[i]; } 
  analyzer(myScore); 
} 

myContents = new Array(); 
  myContents[0] = "Try Again"   +  '<a href="secondquiz.html" style="color: #a1ddd6; text-decoration: none;">Friend</a>'; 
  myContents[1] = "You Are a  "  + '<a href="CORINA.html" style="color: #a1ddd6; text-decoration: none;">Corina</a>'; 
  myContents[2] = "You Are a " + '<a href="Thanh.html" style="color: #a1ddd6; text-decoration: none;">Thanh</a>';
  myContents[3] = "You Are a  "  + '<a href="MEGAN.html" style="color: #a1ddd6; text-decoration: none;">Megan</a>';  
  myContents[4] = "You Are a  "   + '<a href="YASMIN.html" style="color: #a1ddd6; text-decoration: none;">Megan</a>';  
  myContents[5] = "All of US"  + ""




function analyzer (myScore) { 

  if (myScore>30)            { myContentsPtr = 4; } //6
    else { if (myScore > 30) { myContentsPtr = 4; } //5
    else { if(myScore>23)    { myContentsPtr = 3; } //4
    else { if(myScore>18)    { myContentsPtr = 2; } //3
    else { if(myScore>6)     { myContentsPtr = 1; } //2
    else                     { myContentsPtr = 0; } //1
        } 
      } 
    } 
  } 
  myDisplay(myContents[myContentsPtr]) 
} 


function myDisplay(myContents) { 

 
document.getElementById("result").innerHTML = (myContents);
} 

function saver(q, points) { 

  q=q-1; 
  Quest[q]=points 
} 


