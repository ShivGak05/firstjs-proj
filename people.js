let mycount=document.getElementById("count-el")
let peopleentry=document.getElementById("save-el")
let count=0;
function increment(){
    count+=1;
    mycount.textContent=count;
}
function save(){
    let content=count+" - "
    peopleentry.textContent+=content;
    count=0;
    mycount.textContent=0
}