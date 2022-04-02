var c=1;
for(var i=0;i<5;i++){
    console.log({i})
    setTimeout(() => {
        console.log({c,i});
        c++;
    }, i*1000);
}
console.log('outside the loop')
    