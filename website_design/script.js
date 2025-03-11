//change background function
function changeBackgroundColor() {
  const colors = ["#f4f5f8", "#ffcccb", "#d3f4d8", "#fffdd0", "#a7c7e7"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

//greeting function
function displayGreeting() {
  const greetingElement = document.getElementById("greeting");
  const currentTime = new Date().getHours();

  if (currentTime >= 0 && currentTime < 12) {
    greetingElement.textContent = "Good Morning!";
  } else if (currentTime >= 12 && currentTime < 18) {
    greetingElement.textContent = "Good Afternoon!";
  } else {
    greetingElement.textContent = "Good Evening!";
  }
}
//call the greeting function
window.onload = displayGreeting;
