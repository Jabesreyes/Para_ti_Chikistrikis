const messages = [
    "Este dia estas mas tiernita que siempre, hoy cumples un día más siendo la persona que más amito, y los que faltan solecito☀️",
    "Te deseo lo mejor para ti, que todo se te cumpla, te mereces todo 🥰",
    "Te amito más de lo que las palabras te podrian decir ❤️",
    "Cada dia contigo es un regalito 🎁",
    "Haces mi mundo brillar ✨",
    "Eres mi mundito 🌎",
    "Mi vida es mucho mejor contigo 💖",
    "No hay un solo día en el que no agradezca haberte conocido 🥰",
    "Me haces ser una mejor persona cada día 💫",
    "Adicto a mi mujer hermosa, preciosa, sabrosa, a tus preciosos ojitos, a tus hermosos y exquisitos labios, eres perfecta, maravillosa, increible, fabulosa, exquisita, Te amito  🫦"
  ];
  
  let cakeClicked = false;
  let messageIndex = 0;  // Para llevar un control del índice de los mensajes
  
  function showMessage() {
    const messageElement = document.getElementById("message");
    const titleElement = document.getElementById("title");
    const cakeElement = document.getElementById("cake");
  
    // Desaparece el pastel en el primer clic
    if (!cakeClicked) {
      cakeElement.style.display = "none";
      cakeClicked = true;
    }
  
    // Mostrar el siguiente mensaje
    if (messageIndex < messages.length) {
      messageElement.textContent = messages[messageIndex];
      messageElement.style.display = "block";
      titleElement.style.display = "none";
      messageIndex++;  // Avanzar al siguiente mensaje
    } else {
      // Mostrar el botón del cupón después de todos los mensajes
      document.getElementById("cuponButton").style.display = "block";
    }
  
    // Crear fuegos artificiales
    createFireworks();
  }
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  
  // Genera fuegos artificiales
  function createFireworks() {
    const cardElement = document.querySelector(".card");
  
    // Generar 20 fuegos artificiales
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
  
      // Aleatorizar el tamaño del fuego artificial
      const size = Math.random() * 10 + 5;
      firework.style.width = `${size}px`;
      firework.style.height = `${size}px`;
  
      // Aleatorizar la posición de los fuegos
      const randomSide = Math.random();
      if (randomSide < 0.33) {
        // Fuegos desde el lado izquierdo
        firework.style.left = `${cardElement.offsetLeft - Math.random() * 50}px`;
        firework.style.top = `${cardElement.offsetTop + Math.random() * cardElement.offsetHeight}px`;
      } else if (randomSide < 0.66) {
        // Fuegos desde el lado derecho
        firework.style.left = `${cardElement.offsetLeft + cardElement.offsetWidth + Math.random() * 50}px`;
        firework.style.top = `${cardElement.offsetTop + Math.random() * cardElement.offsetHeight}px`;
      } else {
        // Fuegos desde la parte superior
        firework.style.left = `${cardElement.offsetLeft + Math.random() * cardElement.offsetWidth}px`;
        firework.style.top = `${cardElement.offsetTop - Math.random() * 50}px`;
      }
  
      // Aleatorizar el color de los fuegos
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      firework.style.backgroundColor = color;
  
      document.body.appendChild(firework);
  
      // Eliminar el fuego artificial después de la animación
      setTimeout(() => {
        firework.remove();
      }, 1000);  // Tiempo de duración de la animación
    }
  }
  
  // Funciones para abrir y cerrar el modal
  function openModal() {
    document.getElementById("cuponModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("cuponModal").style.display = "none";
  }
  
  setInterval(createHeart, 300);