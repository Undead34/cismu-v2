window.cismu.receive("", (err, data) => {
  if (err) throw err;
  document.querySelector("h1").innerHTML = data;
});