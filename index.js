function togglemode() {
  const body = document.body;
  const word = document.getElementById("word");

  const isDark = body.classList.toggle("togglemode");

  // Toggle emoji based on theme
  word.textContent = isDark ? "🌤️" : "🌙";
}
