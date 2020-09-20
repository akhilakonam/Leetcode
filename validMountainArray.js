function increasing(A){
    for(var i=0; i<A.length-1; i++){
        if(A[i] >= A[i+1])
            return i;
    }
    return i;
}

function decreasing(A, i){
    for(let j=i; j<A.length-1; j++){
        if(A[j] <= A[j+1]){
            return false;
        }
    }
    return true;
}

var validMountainArray = function(A) {
    if(A.length == 0 || A.length == 1)
        return false;
    
    let index = increasing(A);
    if(index == 0 || index == A.length-1)
        return false;
    else
    return decreasing(A, index);
};