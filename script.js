const colorButtons = document.querySelectorAll(".color-btn");
const colorInput = document.getElementById("colorInput");
console.log(colorInput)
const applyBtn = document.getElementById("applycolor")
const resetbtn = document.getElementById("resetcolor")

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color
}

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const color = button.getAttribute('data-color');
        changeBackgroundColor(color)
    })
})


applyBtn.addEventListener("click", () => {
    if (colorInput.value) {
        changeBackgroundColor(colorInput.value)
    }
})

resetbtn.addEventListener("click", () => {
    changeBackgroundColor("white")
})