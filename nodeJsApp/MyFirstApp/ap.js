const array = [6,9,12,18];
for(var i=0;i<array.length;i++){
    const current= array[i]
    const nextEl = current + 3;
    if(array[i+1] !== nextEl){
        console.log(nextEl);
        break;
    }
}
