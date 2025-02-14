<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video con Subtítulos de "Si Pudiera" - Manuel Medrano</title>
  <style>
    #lyrics {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      color: white;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      text-align: center;
    }
  </style>
</head>
<body>
  <!-- Video que contiene el audio -->
  <video id="mi_video.mp4" controls>
    <source src="mi_video.mp4" type="video/mp4">
    Tu navegador no soporta este formato de video.
  </video>
  
  <!-- Contenedor para las letras -->
  <div id="lyrics"></div>

  <script>
    var video = document.querySelector("#video");
    var lyricsElement = document.querySelector("#lyrics");

    // Datos de las letras con sus tiempos de aparición (en segundos)
    var lyricsData = [
      { text: "Si pudiera volar, iría hasta donde estás", time: 7 },
      { text: "Te traería el sol, para verte brillar", time: 12 },
      { text: "Si pudiera soñar, soñaría con tu amor", time: 17 },
      { text: "Cada noche, cada día", time: 22 },
      { text: "Sin cesar, solo contigo", time: 28 },
      { text: "Si pudiera vivir, te daría mi ser", time: 33 },
      { text: "Para estar junto a ti, y nunca más perderte", time: 40 },
      { text: "Sé que es imposible", time: 45 },
      { text: "Pero te quiero tanto", time: 50 },
      { text: "Solo en mis sueños", time: 55 },
      { text: "Puedo tenerte conmigo", time: 60 },
      { text: "Y aunque no estés aquí", time: 65 },
      { text: "Te llevo en mi corazón", time: 70 },
      { text: "Si pudiera volar...", time: 75 },
      { text: "¡Iría hasta donde estás!", time: 80 },
    ];

    // Actualiza las letras en pantalla
    function updateLyrics() {
      var currentTime = video.currentTime;

      // Encontrar la línea que debe mostrarse según el tiempo actual
      var currentLine = lyricsData.find(
        (line) => currentTime >= line.time && currentTime < line.time + 5
      );

      if (currentLine) {
        // Animar la aparición de las letras
        lyricsElement.style.opacity = 1;
        lyricsElement.innerHTML = currentLine.text;
      } else {
        lyricsElement.style.opacity = 0;
        lyricsElement.innerHTML = "";
      }
    }

    // Llamar a la función cada 100ms para actualizar las letras
    setInterval(updateLyrics, 100);
  </script>
</body>
</html>
