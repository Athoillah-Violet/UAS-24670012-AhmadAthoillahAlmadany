
//   service

  function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
      page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
  }


  const btnlayanan = document.getElementById("btnlayanan");
  const textlayanan = document.getElementById("textlayanan");

    btnlayanan.addEventListener("click", () => {
    if (textlayanan.classList.contains("hidden")) {
      textlayanan.classList.remove("hidden");
      setTimeout(() => textlayanan.classList.add("show"), 10);
      btnlayanan.textlayananContent = "Tutup";
    } else {
      textlayanan.classList.remove("show");
      setTimeout(() => textlayanan.classList.add("hidden"), 300);
      btnlayanan.textContent = "Masuk Layanan";
    }
  });
