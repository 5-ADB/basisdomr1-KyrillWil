const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 2,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 3,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 4,
    naam: "erwten",
    prijs: 0.7,
  },
];


//voorbeeld
// <h2>dropdown lijst</h2>
// <div class="dropdown">
//   <select id="naam">
//     <option value="1">optie 1</option>
//     <option value="2">optie 2</option>
//     <option value="3">optie 3</option>
//   </select>


//script oefening2:

//titel
const lijst = document.querySelector("#lijst")
const titel  = document.createElement("h2")
titel.textContent = "dropdown lijst"
lijst.appendChild(titel)
//selectBox
const selectBox = document.createElement("select")
selectBox.classList.add("naam")
selectBox.id = "naam"
lijst.appendChild(selectBox)
//opties
groenten.forEach((groente)=>{
  const groenteOptie = document.createElement("option")
  groenteOptie.textContent = groente.naam
  groenteOptie.value = groente.id
  selectBox.appendChild(groenteOptie)
})

//kostprijs
selectBox.addEventListener("change", (args) => {
  const gevondenGroente = groenten.find(
    (groente) => groente.id == args.target.value)
  console.log(gevondenGroente);
  setKostprijs(kostprijs, gevondenGroente.prijs)
});

function setKostprijs(element,kostprijs){
  element.textContent = ""
  const newP = document.createElement("p")
  newP.textContent = "$" + kostprijs
  element.appendChild(newP)
}














