function appendToDisplay(input){
    display.value = display.value + input
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "error"
    }
}