import { useState } from "react";
import "./styles.css";

function Naglowek({tytulowyTytul}) {
  return <h1>{tytulowyTytul}</h1>;
}

function OtfarzaczMuzyky({showControls = true, piosnka}) {
  const { adresHyta, okladkaHyta} = piosnka;
  return (
    <section>
      <Naglowek tytulowyTytul="Mjuzik Plajer"/>
      <img width="250"s height="250" src={okladkaHyta} alt="Okladka hyta"/>
      <audio key={adresHyta} audio controls={showControls}>
        <source src={adresHyta} />
      </audio>
    </section>
  );
}

function LystaHytuf ({ piosnka, leciTera, naWybur }) {
  const background = leciTera ? "blueviolet" : "none" 
  const styluwa = {background}
  function handleClick () {
    naWybur(piosnka);
  } 
 return (
    <li style = {styluwa} onClick ={handleClick}>
      {piosnka.tytulowyTytul} by {piosnka.alytor}
    </li>
  )
}
export default function App() {
  const piosnki = [
    {
      adresHyta:"https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
      okladkaHyta: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
      tytulowyTytul: "Deadfro5h",
      alytor: "starfrosh"
    },
    {
      adresHyta:"https://examples.devmastery.pl/assets/audio/majesty.mp3",
      okladkaHyta: "https://examples.devmastery.pl/assets/audio/majesty.jpg",
      tytulowyTytul: "Majesty (Original Mix)",
      alytor: "Ryan Craig Martin"
    },
    {
      adresHyta:"https://examples.devmastery.pl/assets/audio/runs.mp3",
      okladkaHyta: "https://examples.devmastery.pl/assets/audio/runs.jpg",
      tytulowyTytul: "Runs",
      alytor: "Wowa"
    }
  ];

  const [obecnyHiciorIndex, ustafObecnyHiciorIndex] = useState(0);
  const obecnyHicior = piosnki[obecnyHiciorIndex];
  function handleWybranyHicior (wybranyHicior) {
      const muzaIndex = piosnki.findIndex(
        (piosnka) => piosnka.adresHyta === wybranyHicior.adresHyta
        );
      if (muzaIndex >= 0) {
        ustafObecnyHiciorIndex (muzaIndex);
      }
    }
    return (
        <div className="App">
          <OtfarzaczMuzyky piosnka={obecnyHicior} /> 
            <section>
                <Naglowek tytulowyTytul="Piosnki" />
                <ul>
                  {piosnki.map(piosnka => (
                    <LystaHytuf
                    key = {piosnka.adresHyta} 
                    piosnka = {piosnka} 
                    leciTera = {obecnyHicior.adresHyta === piosnka.adresHyta}
                    naWybur = {handleWybranyHicior}
                    />
                  ))}
                </ul>
            </section>
        </div>
    );
  }
