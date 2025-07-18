let input = document.getElementById("input");
let output = document.getElementById("output");
let convert = document.getElementById("btn"); 

convert.addEventListener("click", function(){
    if (input.value.length > 0) {
        if (input.value.includes(".")) {
            output.textContent = "Test complete"
            input.value = ""
        } else {
            output.textContent = "Not a valid IP address"
            input.value == ""
        }
    } else {
        output.textContent = "Error: No input detected!"
    }
})