function largestnum(arr){
   let output =arr[0];

    for(i=0;i<arr.length;i++){

        if(arr[i]>output)
        {
            output=arr[i];
        }
    }
    return output;
}
console.log(largestnum([5,1,9,3]))