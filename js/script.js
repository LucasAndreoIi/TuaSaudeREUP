function buscar() {
  const termo = document.getElementById("search-input").value.toLowerCase();
  const texto = document.body;
  texto.innerHTML = texto.innerHTML.replace(/<mark>|<\/mark>/g, "");

  if (!termo) return;

  const regex = new RegExp("(" + termo + "\\w*)", "i");
  let encontrado = texto.innerHTML.match(regex);

  if (encontrado) {
    texto.innerHTML = texto.innerHTML.replace(regex, "<mark>$1</mark>");
    const marcado = document.querySelector("mark");
    marcado.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    alert("Nenhuma palavra semelhante encontrada!");
  }

}


function applyTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    const body = document.body;
    const icon = document.getElementById('dark-mode-icon');
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        icon.textContent = '☀️'; 
    } else {
        body.classList.remove('dark-mode');
        icon.textContent = '🌙';
    }
}

function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode'); 
    const icon = document.getElementById('dark-mode-icon');
    
    if (isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
        icon.textContent = '☀️'; 
    } else {
        localStorage.setItem('darkMode', 'disabled');
        icon.textContent = '🌙';
    }
}


applyTheme();

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
});