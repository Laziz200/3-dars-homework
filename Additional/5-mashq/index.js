var bal=Number(prompt("balingizni kiriting:"));
if (bal<60) {
    alert("yiqildingiz");
}
else if(bal>=60 && bal<70){
    alert("super kontrakt");
}
else if(bal>=70 && bal<80){
    alert("kontrakt");
}
else{
    alert("byudjet");
}