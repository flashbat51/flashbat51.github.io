const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images.jpg") {
    myImage.setAttribute("src", "images/download.png");
  } else {
    myImage.setAttribute("src", "images/images.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Beauty Saloon!!, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Beauty Saloon!!, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
