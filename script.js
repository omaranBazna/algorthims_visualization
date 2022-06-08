const elements=document.getElementById("Elements");
const styles=document.getElementById("styles");
const rect=document.getElementById("Rect")
elements.innerHTML=""
let points= [[3,1],[9,0],[1,0],[1,4],[5,2],[8,3]]
for(let i in points){
elements.innerHTML +=`
<div id="el${i}">
</div>
`
styles.innerHTML +=`
#el${i}{
width:15px;
height:15px;
background:rgb(${50+Math.random()*150},${50+Math.random()*150},${50+Math.random()*150});
border-radius:50%;
position:absolute;
transform:translate(calc(5vw - 7px + ${points[i][0]*70}px),calc(-5vh - 7px - ${points[i][1]*70}px));
}
`}

points.sort((a,b)=>{
   return  a[0]-b[0]
 })
let counter=0;

setInterval(()=>{
  if(counter<points.length-1){

  styles.innerHTML +=`#Rect{
   width:${(points[counter+1][0]-points[counter][0])*70}px;
   transform:translate(calc(5vw - 7px + ${points[counter][0]*70}px),-120vh);
  
  
  }`
  counter++;
  }
},1000)
