

function dummy(){
    if (true) {
        let a = 1;
        var b = 2;
        const c = 3;
    }
    // console.table({a,b,c}); // here i got the issue jus because of scopr

    console.log(b); // and var is the function scope so it is accessible outside the block

}

dummy();