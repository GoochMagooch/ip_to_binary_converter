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
                    } else if (octets[i].length == 0) {
                        validOctet = false;
                        break;
                    }
                }
                // output depending on valid/invalid octets
                if (validOctet == false) {
                    output.textContent = "Invalid octet"
                } else {
                    // converts IP address to binary
                    let bits = [128, 64, 32, 16, 8, 4, 2, 1];

                    let finalAdd = "";

                    for (let i = 0; i < octets.length; i++) {
                        let binary = "0";
                        let addCounter = octets[i];
                        for (let j = 0; j < bits.length; j++) {
                            if (j == 0) {
                                if (addCounter == 0) {
                                    continue
                                } else if (addCounter - bits[j] < 0) {
                                    continue
                                } else if (addCounter - bits[j] == 0) {
                                    binary = "1";
                                    addCounter = addCounter - bits[j];
                                } else if (addCounter - bits[j] > 0) {
                                    binary = "1";
                                    addCounter = addCounter - bits[j]
                                }
                            } else {
                                if (addCounter == 0) {
                                    binary += "0";
                                } else if (addCounter - bits[j] < 0) {
                                    binary += "0";
                                } else if (addCounter - bits[j] == 0) {
                                    binary += "1";
                                    addCounter = addCounter - bits[j];
                                } else if (addCounter - bits[j] > 0) {
                                    binary += "1";
                                    addCounter = addCounter - bits[j]
                                }
                            }
                        }
                        if (i == 3) {
                            finalAdd += binary;
                        } else {
                            finalAdd += binary + ".";
                        }
                    }
                    output.textContent = finalAdd;
                }
            } else {
                output.textContent = "Not a valid IP address!"
                input.value = ""
            }
        } else {
            output.textContent = "Not a valid IP address!"
            input.value = ""
        }
    } else {
        output.textContent = "Error: No input detected!"
    }

})

// Notes
// check octets for non integers
// check input for only periods or 1 period