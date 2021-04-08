function list(contenuti) {
  // Elemento lista:
  let list = document.getElementById("grid");

  for (let i = 0; i < contenuti.length; i++) {
    // Elemento lista:
    let item = document.createElement("div");
    item.className = "article";

    // Impostiamo il contenuto:
    let h2 = document.createElement("h2");
    h2.textContent = contenuti[i].titolo;
    item.appendChild(h2);

    let img = document.createElement("img");
    img.src = contenuti[i].immagine;

    let imgcontainer = document.createElement("div");
    imgcontainer.className = "imgcontainer";
    imgcontainer.appendChild(img);

    item.appendChild(imgcontainer);

    let p = document.createElement("p");
    p.textContent = contenuti[i].descrizione;
    item.appendChild(p);

    // Aggiungiamo alla lista:
    list.appendChild(item);
  }

  // Return della lista costruita:
  return list;
}

grid.appendChild(list(contenuti));
