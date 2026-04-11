const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
{filename: "pic1.jpg", alt: "Closeup of a human eye" },
{filename: "pic2.jpg", alt: "Rock that looks like a Wave" },
{filename: "pic3.jpg", alt: "Purple and White pansies" },
{filename: "pic4.jpg", alt: "Secton of wall from a tomb" },
{filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {
const newImage = document.createElement("img");
newImage.src = `${baseURL}${image.filename}`;
newImage.alt = image.alt;
thumbBar.appendChild(newImage);
newImage.addEventListener("click", updateDisplayedImage);
newImage.addEventListener("keydown", (e) => {
if (e.code === "Enter") {
updateDisplayedImage(e);
}
})
}

function updateDisplayedImage(e) {
displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;
}
/*
btn.addEventListener("click", () =. {
if (btn.classList.contains("dark")) {
overlay.style.backgroundColor("grey");
} else
overlay.style.backgroundColor("black");
}*/