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

