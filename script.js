const password = document.getElementById("password");
const generate = document.getElementById("generate");
const copyBtn = document.getElementById("copyBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generate.addEventListener("click", () => {

    let chars = "";

    if(uppercase.checked)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(lowercase.checked)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if(numbers.checked)
        chars += "0123456789";

    if(symbols.checked)
        chars += "!@#$%^&*()_+-=[]{}<>?";

    if(chars.length===0){
        alert("Select at least one option.");
        return;
    }

    let result="";

    for(let i=0;i<lengthSlider.value;i++){
        const random=Math.floor(Math.random()*chars.length);
        result += chars[random];
    }

    password.value=result;

});

copyBtn.addEventListener("click",()=>{

    if(password.value==="") return;

    navigator.clipboard.writeText(password.value);

    copyBtn.textContent="Copied!";

    setTimeout(()=>{
        copyBtn.textContent="Copy";
    },1500);

});

generate.click();
