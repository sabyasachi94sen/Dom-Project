var pos=0;
var left1_pos=0;
var left2_pos=0;
var c=0;
var radius=0;
var a=setInterval(move,5);

function move(){
   
    if(c==0 || c==2)
    pos++;

    if(pos<=500 && c==0){
    var b1=document.getElementById("b1");
    b1.style.top=pos+"px";
    b1.style.left=pos+"px";
    if(pos==500){
        c++;
        
    }
   
    }
    else if(pos<=500 && c==1){

        pos--;
        radius=radius+0.1;
        var b1=document.getElementById("b1");
        b1.style.top=pos+"px";
        b1.style.borderRadius=radius+"px";
        if(pos==0){
        c++;
        left1_pos=500;
        }
    }
    else if(pos<=500 && c==2)
    {
        radius=radius-0.1;
        left1_pos--;
        var b1=document.getElementById("b1");

        b1.style.top=pos+"px";
       
        b1.style.left=left1_pos+"px";
        b1.style.borderRadius=radius+"px";
        
     
        if(pos==500)
        c++;
        


    }
    else if(pos<=500 && c==3)
    {

        pos--;
        radius=radius+0.1;
        
        left2_pos++;
        var b1=document.getElementById("b1");
        var b2=document.getElementById("b2");
        b1.style.top=pos+"px";
        b2.style.display="block";
        b2.style.left=left2_pos+"px";
        b2.style.borderRadius=radius+"px";

       
        if(pos==0)
        clearInterval(a);
       
    
       
    }
    
    
   
 


}

