

//============ Buttons
//Get all buttons
const btns = document.querySelectorAll(".btn");

//add presed styles when a button is pressed
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("btn-pressed")
  });
});

//============ Knob
//Get the knob element
const knob = document.querySelector(".knob");

/*Function that returns the degree of
the cursor on the screen */
function calculateDegree(e) {
  //Setting the coordinates
  const x1 = window.innerWidth / 2;
  const y1 = window.innerWidth / 2;
  const x2 = e.clientX;
  const y2 = e.clientY;

  const deltaX = x1 - x2;
  const deltaY = y1 - y2;

  //Calculating the degree
  const rad = Math.atan2(deltaY, deltaX);
  let deg = rad * (180 / Math.PI);
  return deg;
}

//Set a mouse dawn on the knob
knob.addEventListener("mousedown", function () {
  /* Set mousemove on the screen
  when the mouse is clicked down */
  window.addEventListener("mousemove", rotate);

  function rotate(e) {
    //Round the degree value & call the function
    const result = Math.floor(calculateDegree(e) - 90);
    /*Rotate the knob based on the position of the mouse,
    which we get from our calculateDegree function */
    knob.style.transform = `rotate(${result}deg)`;
  }

  /*When the mouse is released, remove the mousemove event */
  window.addEventListener("mouseup", function () {
    window.removeEventListener("mousemove", rotate);
  })
})


//================ Clock
//Add '0' if its a one digit number
function formatTime(val) {
  if (val < 10) {
    return "0";
  } else {
    return "";
  }
}

function clock() {
  //Date Object
  const d = new Date();

  //Time variables
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();



  //Formatting and displaying the time
  const time =
    formatTime(h) + h + ":" +
    formatTime(m) + m + ":" +
    formatTime(s) + s;

  //Output the time
  document.querySelector(".time").innerHTML = time;

//Updating the time every second
  setInterval(clock, 1000);
}

clock();

//============== Sliders
//Select the main container
const container =
  document.querySelectorAll(".range-slider");

//Loop through all the sliders
for (let i = 0; i < container.length; i++) {
  //Select the individual parts
  const slider = document.querySelector(".slider");
  const thumb = document.querySelector(".slider-thumb");
  const tooltip = document.querySelector(".tooltip");
  const progress = document.querySelector(".progress");

  function customSlider() {
    //Get the percentage
    const maxVal = slider.getAttribute("max");
    const val = (slider.value / maxVal) * 100 + "%";

    //Display the value in the tooltip
    tooltip.innerHTML = slider.value;
    //Set the thumb and progress to the current value
    progress.style.width = val;
    thumb.style.left = val;
  }

  customSlider();

  //Repeat the function when the slider is selected
  slider.addEventListener("input", () => {
    customSlider();
  })
}
















