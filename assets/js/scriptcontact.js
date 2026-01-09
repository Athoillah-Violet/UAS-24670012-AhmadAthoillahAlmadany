
//   contact


  const sendBtn = document.getElementById("sendBtn");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  sendBtn.addEventListener("click", () => {
    overlay.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  
  const cancel = document.getElementById("cancel");
  const overlayc = document.getElementById("overlayc");
  const closeB = document.getElementById("closeB");

  cancel.addEventListener("click", () => {
    overlayc.classList.add("show");
  });

  closeB.addEventListener("click", () => {
    overlayc.classList.remove("show");
  });