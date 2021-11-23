var read=require('readline-sync');
var day=read.question("enter your day of birth ");
var month=read.question("enter your month of birth ");
count=0;
for (var i=1; i<=day; i++){
    if (day%i===0){
        count=count+1
    }
}
for (var i=1; i<=month; i++){
    if (month%i===0){
        count=count+1
    }
}
if(count===4){
    console.log('your birthday is a prime number')
}else{
    console.log('your birthday is not a prime number')
}