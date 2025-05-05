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


//script oefening1
const container = document.querySelector("#lijst")

groenten.forEach((groente)=>{
  const optieGroente = document.createElement("p")
  groente.textContent = groente.naam
  container.appendChild(optieGroente)
})


console.log("test");
