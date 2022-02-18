function display(val){
    document.getElementById("dis").value+=val
}

// making a function to backspace
function backspace(){
    document.getElementById("dis").value = document.getElementById("dis").value.slice(0,-1)
}

function clr(){
    document.getElementById("dis").value = ""
}

// to calculate the final value

function calc(){
    let x = document.getElementById("dis").value
    y = eval(x)
    document.getElementById("dis").value = y 
}

