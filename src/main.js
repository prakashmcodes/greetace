let nameInput = document.getElementById('name-input')

nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
});


let enterButton = document.getElementById("enter-button")

let text = document.getElementById("greet-text")

enterButton.addEventListener('click',()=>{
    let nameValue = nameInput.value.trim()
    if(nameValue === ""){
        return alert("Please Enter Your Name")
    }
    else{
        text.textContent = `Hello ${nameValue}, Welcome to CyberDude Networks`
    }
})