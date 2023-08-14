const button=document.querySelector('.btn');
let flag=true;
const content=document.querySelector('.content')
const shifter=document.querySelector('.shifter')
const body=document.querySelector('.bright')
button.addEventListener('click' ,function(){
content.classList.toggle('hidden')
if(flag){
    button.textContent="click"
    flag=false
}else{
    button.textContent="press"
    flag=true;
}
})
shifter.addEventListener('click', function(){
body.classList.toggle('dark')
})


if(!numproduct)deleteshoping();
else{
    console.log(`hello customer`)
};
var numproduct=10; 
function deleteshoping(){
    console.log(`there is no stock`)
}
// alert("Hello, this is an alert!");
