let input = document.querySelector(".Form9input");
let value = document.querySelector(".Form9input").value;
let button = document.querySelector(".Form9Button");
let div = document.querySelector(".Form9Conteiner");
let isInputChanged = 0;
input.oninput  = handleChange;
function handleChange(e) {

    let val = e.target.value;
    let  re = /\S+@\S+\.\S+/;
    console.log(re.test(val));

    if(!re.test(val)){

            input.style.borderColor = "red";
            button.disabled = true;
            isInputChanged ++;


    }
    else {
        console.log(val);
        input.style.borderColor = "black";
        button.disabled = false;
    }


}
