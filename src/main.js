let nameInput = document.getElementById('name-input')

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