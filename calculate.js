let string="";
let buttons=document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector(".input").value=string;
        }
        else if(e.target.innerHTML=="C"){
            string="";
            document.querySelector(".input").value=string;
        }
        else{
            string=string + e.target.innerHTML;
            document.querySelector(".input").value=string;
        }
    })
});
document.addEventListener("keydown",(e)=>{
     if(e.key=="Enter"){
        string=eval(string);
            document.querySelector(".input").value=string;
    }
    else if(!isNaN(e.key)|| e.key=="/" || e.key=="*" || e.key=="+" ||e.key=="-"){
    string=string + e.key;
    document.querySelector(".input").value=string;
    }
    else if(e.key=="Backspace"){
        string="";
        document.querySelector(".input").value=string;
    }
    
})