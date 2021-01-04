import React from "react"
import christine_feut from "../../images/fotos/personen/christine de feut.jpg"
export default function Page() {
  return (
    <div>
      <div className="profile-block">
      <p>Christine is onze EMC mama maar ook tevens de grootste feut van de JC. Bij de kennismaking tussen de JC en ouders lukte het Christine om in de generatie chat te zeggen dat ze 
        een van onze leden in de zoom zag. Maar dat ze een feut is maakt haar zeker niet minder leuk. Zij zorgt ervoor dat de JC blijft bestaan, dat alles goed geregeld is en ze doet 
        natuurlijk volledig objectief JC punten verdelen ook al wordt ze door de JC gevraagd om af en toe wat extra punten aan ons te geven. Een avondje goed meezuipen met de 
        JC kan ze ook zeker maar dan staat ze in de ochtend wel weer fris en fit op het veld om een balletje in de doel van de tegenstanders te schieten. Van haar fitheid kan 
        iedereen wel wat leren. </p>

      <p>Daarnaast is Christine ook nog eens flink internationaal, en nee we ze is niet Limburgs. Ze heeft overal gewoond: Thailand, 
        Turkije, Libanon, Egypte en nu in het geweldige cozy en gezellige Woensel. Je zou wel kunnen zeggen dat ze on tour is ;)</p>


      </div>
      <img className="profile-img" src={christine_feut}/>
    </div>

  );
}