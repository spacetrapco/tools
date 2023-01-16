<script>
let colorPalettes = {
    "a": ["#490a3d", "#e97f02", "#bd1550", "#f8ca00", "#8a9b0f", "#e97f02", "#f8ca00", "#490a3d"],
    "b": ["#343838", "#005f6b", "#008c9e", "#00b4cc", "#00dffc", "#343838", "#008c9e", "#00b4cc"],
    "c": ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951", "#eb6841", "#cc333f", "#edc951"],
    "d": ["#300030", "#480048", "#601848", "#c04848", "#f07241", "#480048", "#c04848", "#300030"],
    "e": ["#2a044a", "#0b2e59", "#0d6759", "#7ab317", "#a0c55f", "#0d6759", "#7ab317", "#2a044a"],
    "f": ["#fc354c", "#29221f", "#13747d", "#0abfbc", "#fcf7c5", "#13747d", "#29221f", "#fc354c"],
    "g": ["#5c323e", "#a82743", "#e15e32", "#c0d23e", "#e5f04c", "#c0d23e", "#a82743", "#5c323e"],
    "h": ["#ff4e50", "#fc913a", "#f9d423", "#ede574", "#e1f5c4", "#f9d423", "#fc913a", "#ff4e50"],
    "i": ["#00a8c6", "#40c0cb", "#f9f2e7", "#aee239", "#8fbe00", "#aee239", "#f9f2e7", "#00a8c6"],
    "j": ["#fad089", "#ff9c5b", "#f5634a", "#ed303c", "#3b8183", "#f5634a", "#3b8183", "#6b0103"],
    "k": ["#1c0113", "#a30006", "#f0e68c", "#c21a01", "#f03c02", "#1c0113", "#c21a01", "#a30006"],
    "l": ["#1b325f", "#9cc4e4", "#e9f2f9", "#3a89c9", "#f26c4f", "#1b325f", "#f26c4f", "#e9f2f9"],
    "m": ["#a70267", "#f10c49", "#fb6b41", "#f6d86b", "#339194", "#fb6b41", "#a70267", "#339194"],
    "n": ["#ff003c", "#ff8a00", "#fabe28", "#88c100", "#00c176", "#ff8a00", "#00c176", "#ff003c"],
    "o": ["#30261c", "#403831", "#36544f", "#1f5f61", "#0b8185", "#36544f", "#30261c", "#0b8185"],
    "p": ["#aaff00", "#ffaa00", "#ff00aa", "#aa00ff", "#00aaff", "#ffaa00", "#00aaff", "#aaff00"]
};

function setColors() {
  let randomPalette = Object.values(colorPalettes)[Math.floor(Math.random() * Object.values(colorPalettes).length)];
  for(let i=0; i<randomPalette.length; i++){
    document.querySelector(`.shape-${i+1}`).style.backgroundColor = randomPalette[i];
  }
}
window.onload = setColors;
setInterval(setColors, 8000);
</script>