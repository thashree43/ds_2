let arr = [9,1,5,0,6,3,2]

function selection(arr){
    for(let i = 0;i<arr.length;i++){
        let mid = i
        for(let j=i;j<arr.length;j++){
            if (arr[j] < arr[mid]) {
                mid = j
            }
        }
        [arr[i],arr[mid]] = [arr[mid],arr[i]]
    }
    return arr
}
console.log("selection",selection(arr));

function insertion(ar){
    for(let i =1;i<ar.length;i++){
        let number = ar[i]
        let j = i-1;
        while (j>=0 && ar[j] > number) {
            ar[j+1] = ar[j]
            j=j-1
        }
        ar[j+1] = number
    }
    return ar
}
console.log("insertion",insertion(arr));

function merge(arra){
    if (arra.length <= 1) {
        return arra
    }
    let mid= Math.floor(arra.length/2);
    let left = arra.slice(0,mid)
    let right = arra.slice(mid)
    return sorting(merge(left),merge(right))
}
function sorting(left,right){
    let leftindex = 0;
    let rightindex = 0;
    let result = []

    while(leftindex < left.length &&  rightindex < right.length){
        if (left[leftindex] < right[rightindex]) {
            result.push(left[leftindex])
            leftindex++;
        }else{
            result.push(right[rightindex])
            rightindex++;
        }
    }
    return result.concat((left.slice(leftindex))).concat(right.slice(rightindex))
}

console.log("mergesrt",merge(arr));

function bubble(array){
let n = array.length
let swap;
do {
    swap = false
    for(let i =0;i<array.length;i++){
       if (array[i-1] >array[i]) {
        let temp = array[i-1]
        array[i-1] = array[i]
        array[i] = temp
        swap = true
       }
    }
    n--
} while (swap);
return array
}
console.log("bubble",bubble(arr));

function quick(a){
    if (a.length <= 1) {
        return a
    }

    let pivot = a[Math.floor(a.length/2)]
    let left = []
    let right= []
    let mid=[]
    for(let i = 0;i<a.length;i++){
    if (a[i] < pivot) {
        left.push(a[i])
    }else if(a[i] > pivot){
        right.push(a[i])
    }else{
        mid.push(a[i])
    }
}
return quick(left).concat(mid).concat(quick(right))
}

console.log("quick",quick(arr));