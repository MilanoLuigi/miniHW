function list(contenuti) {
  // Elemento lista:
  const list = document.getElementById("grid");

  for (let i = 0; i < contenuti.length; i++) {
    // Elemento lista:
    const item = document.createElement("div");
    item.className = "article";

    // Impostiamo il contenuto:
    const h2 = document.createElement("h2");
    h2.textContent = contenuti[i].titolo;
    item.appendChild(h2);

    const btnimg = document.createElement("img");
    btnimg.src = button;

    const btn = document.createElement("a");
    btn.className = "button";
    btn.href = "#";
    btn.appendChild(btnimg);

    item.appendChild(btn);

    const img = document.createElement("img");
    img.src = contenuti[i].immagine;

    const imgcontainer = document.createElement("div");
    imgcontainer.className = "imgcontainer";
    imgcontainer.appendChild(img);

    item.appendChild(imgcontainer);

    const p = document.createElement("p");
    p.textContent = contenuti[i].descrizione;
    item.appendChild(p);

    // Aggiungiamo alla lista:
    list.appendChild(item);
  }

  // Return della lista costruita:
  return list;
}

grid.appendChild(list(contenuti));

function preferbottom(event){
const new_img = document.createElement('img');
new_img = "src/bottone-preferiti-blu.jpg";

const button = document.querySelector(button);
button.appendChild(new_img);
}
