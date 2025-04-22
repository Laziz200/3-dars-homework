var n=Number(prompt("son kiriting:"));
var juft=0;
for (let i = 1; i < n; i++) {
    if (i%2==0) {
        juft+=i;
    }
}
alert(`1 dan siz kiritgan songacha juftlar yiginidisi=${juft}`)