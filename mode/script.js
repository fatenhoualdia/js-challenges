
  const modeToggle = document.getElementById("modeToggle")
  const body = document.body
  

  modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
      body.classList.add("dark-mode")  
    } else {
      body.classList.remove("dark-mode")
    }
  })


const h2Element = document.getElementById("changeColor")

function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#" //hexadecemal color rgb(250,0,0)
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
 
  }
  return color
}
console.log(Math.random() * 16)  //renvoie un nombre aléatoire entre 0 et 16

h2Element.addEventListener("click", () => {
  // Génère une couleur aléatoire
  const randomColor = getRandomColor()
  
  // Applique la couleur de fond aléatoire à l'élément <h2>
  h2Element.style.backgroundColor = randomColor
})


  // Get the time element
  const timeElement = document.querySelector('.post-full-meta-date');
  
  // Get the datetime attribute value
  const datetimeAttributeValue = timeElement.getAttribute('datetime');
  
  // Convert the datetime string to a Date object
  const date = new Date(datetimeAttributeValue);

  // Format the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  
  // Display the formatted date
  timeElement.textContent = formattedDate;

