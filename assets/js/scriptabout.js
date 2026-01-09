
//  about
  const btndes = document.getElementById("btndes");
  const textdes = document.getElementById("textdes");

  btndes.addEventListener("click", () => {
    if (textdes.classList.contains("hidden")) {
      textdes.classList.remove("hidden");
      setTimeout(() => textdes.classList.add("show"), 10);
      btndes.textdesContent = "Tutup";
    } else {
      textdes.classList.remove("show");
      setTimeout(() => textdes.classList.add("hidden"), 300);
      btndes.textdesContent = "Selengkapnya...";
    }
  });
