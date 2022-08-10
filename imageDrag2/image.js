const magicBox = document.getElementById("magicBox");

// Change color of the box if something being dragged 🖍
const dragging = (e) => {
  e.preventDefault();
  magicBox.style = "border-color: rgba(164, 37, 228)";
};

// Back to initial stage when dragging ends 🏃🏾‍♂️
const dragLeft = () => {
  magicBox.style = "border-color: #c6c6c6";
};
