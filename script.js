let input = document.getElementById("input");
let output = document.getElementById("output");
let convert = document.getElementById("btn"); 

convert.addEventListener("click", function(){

    // checks if input contains any value
    if (input.value.length > 0) {
        // checks if input contains a period for valid IP checks
        if (input.value.includes(".")) {
            octets = input.value.split(".")
            // checks if an IP contains 4 octets
            if (octets.length == 4) {
                let validOctet = true;
                // validates octets are 0 - 255
                for (let i = 0; i < octets.length; i++) {
                    if (octets[i] > 255 || octets[i] < 0) {
                        validOctet = false;
                        break;
                    }
                }
                // output depending on valid/invalid octets
                if (validOctet == false) {
                    output.textContent = "Invalid octet"
                } else {
                    output.textContent = "Valid IP address"
                }
            } else {
                output.textContent = "Not a valid IP address!"
                input.value = ""
            }
        } else {
            output.textContent = "Not a valid IP address!"
            input.value == ""
        }
    } else {
        output.textContent = "Error: No input detected!"
    }

})

// Notes
// check octets for non integers
// check input for only periods or 1 period