window.cismu.receive("music", (data) => {
  let musics = [];
  for (music in data) {
    let q = data[music].split("\\").at(-2);
    if (!musics.includes(q)) {
      musics.push(q);
    }
  }

  for (music in musics) {
    document.querySelector("h1").innerHTML += "<h4>" + musics[music] + "</h4>";
  }

  document.querySelector("h1").innerHTML += "<h1>" + musics.length + "</h1>";
});