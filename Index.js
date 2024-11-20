function Even(arr){
    let even = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 0) even.push(arr[i]);
    }
    console.log(even);
}