// index
  function setGreeting(hour) {
    if (hour >= 5 && hour < 12) return "Selamat Pagi ☀️";
    if (hour >= 12 && hour < 15) return "Selamat Siang 🌤️";
    if (hour >= 15 && hour < 18) return "Selamat Sore 🌇";
    return "Selamat Malam 🌙";
  }

  function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    document.getElementById("greeting").textContent = setGreeting(hour);
    document.getElementById("clock").textContent =
      `${hour.toString().padStart(2, "0")}:` +
      `${minute.toString().padStart(2, "0")}:` +
      `${second.toString().padStart(2, "0")}`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  const btnDaftar = document.getElementById("btnDaftar");
  const layanan = document.getElementById("layanan");

    btnDaftar.addEventListener("click", () => {
    if (layanan.classList.contains("hidden")) {
      layanan.classList.remove("hidden");
      setTimeout(() => layanan.classList.add("show"), 10);
      btnDaftar.layananContent = "Batal";
    } else {
      layanan.classList.remove("show");
      setTimeout(() => layanan.classList.add("hidden"), 300);
      btnDaftar.textContent = "Daftar";
    }
  });

   btnsentuh.addEventListener("click", () => {
    if (text.classList.contains("hidden")) {
      text.classList.remove("hidden");
      setTimeout(() => text.classList.add("show"), 10);
      btnsentuh.textContent = "Tutup";
    } else {
      text.classList.remove("show");
      setTimeout(() => text.classList.add("hidden"), 300);
      btnsentuh.textContent = "Sentuh aku";
    }
  });

