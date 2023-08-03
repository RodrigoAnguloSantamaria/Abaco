
const abaco$$=document.querySelector(".abaco");
const screen$$=document.querySelector(".screen")

pintarAbaco=()=>{
   abaco$$.innerHTML=``;
   screen$$.innerHTML=``;
    const numgrids=14*7;
  
    for (let index = 1; index <= numgrids; index++) {
        let item$$=document.createElement("div");
        
       
        if (index === 1  || Number.isInteger(index/14) || Number.isInteger((index-1)/14)){ 
            item$$.className="border"
            item$$.id=index;
        }
        else if(index ===  Number.isInteger((index-1)/14) || Number.isInteger((index-2)/14) || Number.isInteger((index-3)/14) || Number.isInteger((index-4)/14)){
            item$$.className="wire"
            item$$.id=index;
        }
        else{
            item$$.className="item";
            item$$.id=index;
            item$$.addEventListener("click",()=>handleMove(event.target.id))
        }
        
        abaco$$.append(item$$);
    }
}

handleMove = (id)=>{
    let clicked=document.getElementById(id);
    let next=document.getElementById(parseInt(id)+1);
    let previous=document.getElementById(id-1);
    let wireleft;
   
    if  ((previous.className != "wire" && next.className != "wire") || (clicked.className === "wire" || clicked.className === "border")){
    
        
      
        return
    } 
    else{
        previous.className === "wire" ? wireleft=true : wireleft=false;
    
        if (wireleft){
            
            for (let index = 0; index <= 3 ; index++) {
                
                let item=document.getElementById(id-index);
                if (index === 3){
                    item.className="item";
                    item.addEventListener("click",()=>handleMove(event.target.id))
                }
                else{
                    item.className="wire";
                  
                }
              

            }
            
        }
        else{
            
            for (let index = 0; index <= 3 ; index++) {
                
                let item=document.getElementById(parseInt(id)+parseInt(index));
                
                if (index === 3){
                    item.className="item";
                    item.addEventListener("click",()=>handleMove(event.target.id))
                }
                else{
                    item.className="wire";
                  
                }
                
                
                
            }
        }
    }
}
calculateNumber=()=>{
    let result=[];
    screen$$.innerHTML=``;
    for (let row = 1; row <= 7; row++) {
        let count=0;
        if (row ===  1){
            for (let item = 1; item <= 14; item++) {
                const element = document.getElementById(item);
                
                if (element.className==="item"){
                    count++;
                
                }
                else if(element.className==="wire"){
                    result.push(count);
                    break
                }
                
            }
        }
        else{
            for (let item = 1; item <= 14; item++) {
                let num=((row-1)*14)+item;
                console.log(num)
                const element = document.getElementById(num);
                
                if (element.className==="item"){
                    count++;
                
                }
                else if(element.className==="wire"){
                    result.push(count);
                    break
                }
                
            }
        }    
   
        
    }

   
    for (let index = 0; index < result.length; index++) {
        const element = result[0];
       
        if (element === 0){ result.shift()}
        else{ break}        
        
    }
    if (result.length > 6){
        result.splice(result.length-6,0,".");
    }
    if (result.length > 3){
        result.splice(result.length-3,0,".");
    }
 
   screen$$.append(result.join(''))
   


}
pintarAbaco();