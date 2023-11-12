document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square");
    const divElement = document.getElementById("board")

    function getRandomColor() {
        const letters = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    divElement.addEventListener("click", () => {
        const randomColor = getRandomColor()
        console.log(randomColor)

        if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = randomColor
        }
    });

    // Add a click event listener to each square
    divElement.forEach(square => {
        square.addEventListener("click", function () {
            // Change the background color of the clicked square
            const randomColor = getRandomColor()
            this.style.backgroundColor = randomColor
        })
    })
})
