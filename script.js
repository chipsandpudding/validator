var display = document.body.querySelector(".display");

function validation(){
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  var message = document.body.querySelector(".message");
  var validate = document.body.querySelector(".validate");
  if(username === "coolStudent123"){
    display.removeChild(validate);
    validated();
  }else{
    message.innerHTML = "incorrect username";
  }//end else
  
  
}//end validation

document.body.querySelector(".submit").addEventListener("click", function(){validation();});





function validated(){
var nav = document.body.querySelector(".nav");
var items = [];
var itemsImport =[];

var pages = [
  {
    title:"Home",
    content:""
  },
  {
    title:"About",
    content:"Sean"
  },
  {
    title:"View",
    content:""
  }
  
]//pages

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}//for

function pageMaker(input){
  this.button = document.createElement("button");
  this.button.innerHTML = input.title;
  this.button.addEventListener("click",function(){
    writepage(input.title, input.content)
                          })
  nav.appendChild(this.button);
}//pageMaker




function writepage(title,content){
  display.innerHTML="";
  if(title === "Interact"){
    interact(title);    
  }else if(title === "View"){
  view(title);}
   else{  
     writecontent(title,content);
        }//end else
}//end function writepage

function writecontent(title,content){
  
  var header = document.createElement("h1");
  var contentinput = document.createElement("h3");
  
  header.innerHTML = title;
  contentinput.innerHTML = content;
  
  display.appendChild(header);
  display.appendChild(contentinput);
  
}//end function writecontent



function view(title){

var header = document.createElement("h1");
header.innerHTML = title;
display.appendChild(header);
  
var message = document.createElement("div");
message.innerHTML = "";
  
var btn = document.createElement("button");
btn.innerHTML = "Submit";
btn.className = "addItem";
btn.addEventListener("click",function(){itemEntered();});
  
var input1 = document.createElement("input");
input1.type = "text";
input1.className = "itemName";
input1.placeHolder = "username";
input1.setAttribute("placeholder","Item Name");
  
var input2 = document.createElement("input");
input2.type = "number";
input2.className = "itemImport";
input2.setAttribute("placeholder","Importance");

var list1 = document.createElement("div");
list1.className = "list";
    
display.appendChild(input1);
display.appendChild(input2);
display.appendChild(btn);
display.appendChild(list1);
  

function writeItems(){
  var list = document.body.querySelector(".list");
  list.innerHTML = "";
  for(var i=0; i<items.length; i++){
    var holder = document.createElement("div");
    holder.innerHTML = itemsImport[i] + " " + items[i];
    list.append(holder);
  }//end for
}//end function writeItems


function itemEntered(){
  var list = document.body.querySelector(".list");
  var itemName = document.body.querySelector(".itemName").value;
  var itemImport = document.body.querySelector(".itemImport").value;
   if(itemName.length>0 && itemImport>=1){
     message.innerHTML = "";
     display.appendChild(message);
     items.push(itemName);
     itemsImport.push(itemImport);
     writeItems();
   }else{
     message.innerHTML = "Please input an item name and a number 1 or greater";
     display.appendChild(message);
     writeItems();
        }//end else
  
  
}//end itemEntered

 
}//end function view
  
  
 writepage(pages[0].title,pages[0].content);
}//end function validated