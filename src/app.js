import "./style.css";

window.onload = function() {
  let numerosCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let simbolos = ["Corazones", "Diamantes", "Picas", "Treboles"];
  let randomNumerosCarta = Math.floor(Math.random() * numerosCarta.length);
  let randomSimbolos = Math.floor(Math.random() * simbolos.length);
  let simboloFinal = simbolos[randomSimbolos];
    
  document.getElementById('numeroCarta').innerHTML = numerosCarta[randomNumerosCarta];
  document.getElementById('carta').className = "";
  document.getElementById('carta').classList.add("card");
  document.getElementById('carta').classList.add(simboloCarta(simboloFinal));

}
  
function simboloCarta(simbolos) {
    switch (simbolos) {
      case "Corazones": return "simbolo-corazon";
      case "Diamantes": return "simbolo-diamante";
      case "Picas": return "simbolo-pica";
      case "Treboles": return "simbolo-trebol";
    }
}

