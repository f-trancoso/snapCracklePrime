function snapCrackle(maxValue){
    let result = []
    for(i=1; i<=maxValue; i++){
        switch(true){
            case ((i%2!=0)&&(i%5===0)):
                result.push('SnapCrackle')
                break

            case (i%2!=0):
                result.push('Snap')
                break

            case (i%5===0):
                result.push('Crackle')
                break

            case (i%2===0):
                result.push(i)
        }
    }
    return result.join(', ')
}

function isPrime (num){
    for (i=2; i<num; i++){
        if (num%i===0){
            return false
        }
        return true
    }
}

function snapCracklePrime(mxValue){
    let result2 = []
    for(let x=1; x<=mxValue; x++){
        switch(true){
            case ((x%2!=0)&&(x%5===0)):
                result2.push('SnapCrackle')
                break

            case (x%2!=0):
                result2.push('Snap')
                break

            case (x%5===0):
                result2.push('Crackle')
                break

            case (x%2===0):
                result2.push(x)
        }
    }

    for(let y=0;y<result2.length;y++){
        if (isPrime(y+1)=== true){
            result2[y] += 'Prime'
        }
    }

    return result2.join(', ')
}