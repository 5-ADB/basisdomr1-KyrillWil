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


    // <h2>checkbox</h2>
    // <div class="checkbox" id="checkboxGroup">
    //   <input type="checkbox" name="optie1" id="1" />
    //   <input type="checkbox" name="optie2" checked id="2" />
    // </div>
console.log("test");

//script oefening1
const checkbox = document.createElement("h2")
const container = document.querySelector("#lijst")

groenten.forEach((groente)=>{
  const optieGroente = document.createElement("input")
  container.appendChild(optieGroente)
  optieGroente.type = "checkbox"
  optieGroente.name = groente.naam
  optieGroente.id = groente.id

})

checkbox.textContent = "checkbox"
document.body.appendChild(checkbox)