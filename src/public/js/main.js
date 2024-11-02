document.addEventListener("DOMContentLoaded", function () {
    const eventDate = new Date("December 15, 2024 05:30:00").getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }, 1000);
});
// main.js
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioCargar');
  
    // Intentar reproducir el audio automáticamente
    audio.play().catch((error) => {
      console.log("La reproducción automática fue bloqueada por el navegador:", error);
    });
  
    // Reiniciar el audio al finalizar
    audio.addEventListener('ended', () => {
      audio.currentTime = 0; // Reiniciar el tiempo de reproducción
      audio.play(); // Reproducir de nuevo
    });
  
    // Verificar si el usuario está en un dispositivo móvil
    // if (!isMobileDevice()) {
    // Mostrar un mensaje o redirigir al usuario
    //   alert('Este sitio solo es accesible desde dispositivos móviles.');
    // }
  });
  
  // Función para detectar dispositivos móviles
  // function isMobileDevice() {
    //return /Mobi|Android/i.test(navigator.userAgent);
  //}
  