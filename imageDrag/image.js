const dropzone = document.getElementById("dropzone");
const gallery = document.getElementById("gallery");
const imagelinkform = document.getElementById("imagelinkform");
const cleargallery = document.getElementById("cleargallery");
const fileinput = document.getElementById("fileinput");

function stopPropagationAndPreventDefault(e) {
    e.stopPropagation();
    e.preventDefault();
}

function handleFileAndAppend(file) {
    if (!file.type.startsWith("image/")) {
        console.log("not an image");
        return;
    }
    
    const imgElement = document.createElement("img");
    imgElement.file = file;
    if (gallery.firstChild) {
      gallery.prepend(imgElement, gallery.firstChild); 
    } else {
      gallery.appendChild(imgElement);
    }
  
    dropzone.classList.remove("dragging");
    
    const fileReader = new FileReader();
    fileReader.onload = ((img) => (e) => {img.src = e.target.result;})(imgElement);
    fileReader.readAsDataURL(file);   
}

function imageLinkHandler(e) {
    stopPropagationAndPreventDefault(e);
        
    const imgElement = document.createElement("img");
    imgElement.src = e.target.imageurl.value;
    gallery.appendChild(imgElement);
}

function clearGalleryHandler(e) {
  stopPropagationAndPreventDefault(e);
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild);
  }
}

function dropHandler(e) {
    stopPropagationAndPreventDefault(e);
    const file = e.dataTransfer.files[0];
    handleFileAndAppend(file);
}

function fileInputHandler(e) {
  const file = this.files[0];
  handleFileAndAppend(file);
}

function dragoverHandler(e) {
  stopPropagationAndPreventDefault(e);
  dropzone.classList.add("dragging");
}

function dragleaveHandler(e) {
  stopPropagationAndPreventDefault(e);
  dropzone.classList.remove("dragging");
}

imagelinkform.addEventListener("submit", imageLinkHandler, false);
cleargallery.addEventListener("click", clearGalleryHandler, false);
fileinput.addEventListener("change", fileInputHandler, false);
dropzone.addEventListener("dragenter", stopPropagationAndPreventDefault, false);
dropzone.addEventListener("dragover", dragoverHandler, false);
dropzone.addEventListener("dragleave", dragleaveHandler, false);
dropzone.addEventListener("drop", dropHandler, false)