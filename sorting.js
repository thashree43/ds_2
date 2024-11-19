let a =[7,2,8,3,9,0,10,1,11]
function selection(ar){
    for(let i =0;i<ar.length ;i++){
        let mid =i
        for(let j=i;j<ar.length;j++){
            if (ar[j] < ar[mid]) {
                mid = j
            }

        }
        [ar[mid],ar[i]] = [ar[i],ar[mid]]
    }
    return ar
}
console.log(selection(a));  

function insertion(ar){
    for(let i = 1;i<ar.length;i++){
        let j = i-1
        let num = ar[i]
        while (j>=0 && ar[j] > num) {
            ar[j+1] = ar[j]
            j=j-1
        }
        ar[j+1] = num
    }
    return ar
}
console.log(insertion(a));

function merge(a){
    if (a.length <=1) {
        return a
    }
    let mid = Math.floor(a.length/2)
    let left = a.slice(0,mid)
    let right = a.slice(mid)
    return mergesort(merge(left),merge(right))
}
function mergesort(left,right){
    let leftindex = 0
    let rightindex=0
    let res =[]

    while(leftindex < left.length && rightindex < right.length){
        if (left[leftindex] < right[rightindex]) {
            res.push(left[leftindex])
            leftindex++;
        }else{
            res.push(right[rightindex])
            rightindex++;
        }
    }
    return res.concat((left.slice(leftindex)).concat(right.slice(rightindex)))
}
console.log(merge(a));

function bubble(a){
    let n = a.length
    let swap;
    do {
        for(let i=1;i<n;i++){
            if (a[i-1] > a[i]) {
                let temp = a[i-1]
                a[i-1] = a[i]
                a[i] = temp
                swap = true
            }
        }
        n--
    } while (swap);
    return a
}
console.log(bubble(a));

function quick(a){
if (a.length <=1) {
    return a
}
    let pivot = a[Math.floor(a.length/2)]
    let left =[]
    let mid = []
    let right =[]
    for(let i =0;i<a.length;i++){
        if (a[i]<pivot) {
            left.push(a[i])
        }else if(a[i] > pivot){
            right.push(a[i])
        }else{
            mid.push(a[i])
        }
    }
    return quick(left).concat(mid).concat(quick(right))

}
console.log(quick(a));