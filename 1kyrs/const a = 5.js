const a = 5

function myFn() {
    function innerFn () {
        console.log (a) //5
    }
    innerFn()
}

myFn()