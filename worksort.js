let arr = [3,4,2,1,7,5,0]
function selection(ar){
    for(let i =0 ;i<ar.length;i++){
        let mid = i
        for(let j= i;j<ar.length;j++){
            if (ar[mid] > ar[j]) {
                mid = j
            }
        }
        [ar[mid],ar[i]] = [ar[i],ar[mid]]
    }
    return ar
}
console.log(selection(arr));

function insertion(a){
    for(let i =1;i<a.length;i++){
        let number = a[i]
        let j = i-1;
        while(a[j] > number){
            a[j+1] = a[j]
            j=j-1
        }
        a[j+1] = number
    }
    return a
}
console.log(insertion(arr));

function merge(a){
    for
}