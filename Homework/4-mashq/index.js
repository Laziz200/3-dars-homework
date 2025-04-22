var n=Number(prompt("son kiriting:"));
var result=1;
for (let i = 1; i <= n; i++) {
    if (i%2==1) {
        result*=i;
    }
}
alert(`siz kiritgan songacha bo‘lgan barcha toq sonlarning ko‘paytmasi=${result}`);