function manageInputs(){
    let calc_btn = document.querySelectorAll(".calc_btn");
    let calc_inp = document.getElementById("calc_inp");
    let result = document.getElementById("result");

    calc_btn.forEach((btn) =>{
        btn.addEventListener("click" , ()=>{
            let btnTextContent = btn.textContent;
            
            if(btnTextContent != "=" && btnTextContent != "C" && btnTextContent != "") { 
                calc_inp.value += btnTextContent;

            }else{
                if(btnTextContent == "C"){
                    calc_inp.value = "";
                    result.textContent = "";
                    result.style.display = 'none';
                }else if(btnTextContent == "") {
                    calc_inp.value = calc_inp.value.charAt(calc_inp.value.length - 1) === " " ? calc_inp.value.replace(/.{3}$/, "") : calc_inp.value.replace(/.{1}$/, "")
                }else if(btnTextContent == "="){
                    calc_inp.value = calc_inp.value.includes("√") ? calc_inp.value.replace(/√(\d+)/g, "Math.sqrt($1)") : calc_inp.value;
                    calc_inp.value = calc_inp.value.includes("^") ? calc_inp.value.replace(/\^/g, "**") : calc_inp.value;
                    result.textContent = "= " + eval(calc_inp.value);
                    result.style.display = 'inline';
                }
            }
        });


    });
    
    document.body.addEventListener("keydown", (e) => {
        if(["+","-","/","*","%","^","0","1","2","3","4","5","6","7","8","9"].includes(e.key)){
            calc_inp.value += e.key
        }else{
            if(e.key == "Backspace"){
                calc_inp.value = calc_inp.value.charAt(calc_inp.value.length - 1) === " " ? calc_inp.value.replace(/.{3}$/, "") : calc_inp.value.replace(/.{1}$/, "")
            }else if(e.key == "Enter"){
                calc_inp.value = calc_inp.value.includes("√") ? calc_inp.value.replace(/√(\d+)/g, "Math.sqrt($1)") : calc_inp.value;
                calc_inp.value = calc_inp.value.includes("^") ? calc_inp.value.replace(/\^/g, "**") : calc_inp.value;
                result.textContent = "= " + eval(calc_inp.value);
                result.style.display = 'inline';
            }
        }
    });
}
manageInputs()