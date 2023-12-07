
btn=document.querySelector("#btn-1");


function addParagraph(caption, eximage){

    //Need to check if element does not already exist in document so I can delete it to create a new one



    // Get class length 
    const id = document.getElementsByClassName('present');



    //Get running sum of all classes to 
    let num = id.length;

  if(num != 0 )
  {
    removeElementsByClass("present");
  }
    
    
    const newElement = document.createElement('p');
    newElement.textContent=caption;
    document.body.appendChild(newElement);
    newElement.classList.add("present"); 

    const image= document.createElement('img');
    image.src = eximage;
    image.alt = "https://github.com/CS270-Fall2023/pa1-Synaptric";
    image.classList.add("imgClass");
    document.querySelector('.present').appendChild(image);
    
}




function addImage(linkImage)
{
  const id = document.getElementsByClassName('Gitbox');
  //Get running sum of all classes to 
  let num = id.length;
  if(num != 0 )
  {
    removeElementsByClass("Gitbox");
  }
  



  const gitimage= document.createElement('img');
  gitimage.src = "github-mark-white.png";
  gitimage.alt = "image failed";
  gitimage.classList.add("Gitbox");
  gitimage.classList.add("Gitbox:hover");

  gitimage.onclick = function() 
  {
    window.open(linkImage);

  };

  document.body.appendChild(gitimage);
     
}



//Function to remove all other 
function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}




/* Function to replace the text in HTML with diffrent text  */

function writeDescrip(text)
{
  document.getElementById("descrip").innerHTML = text;
}



btn.onClick = removeElementsByClass;
btn.onClick = addParagraph;
btn.onClick = addImage;

