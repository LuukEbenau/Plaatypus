import React from "react"

import spelletjes from '../../images/fotos/groepsfotos/spelletjes.jpeg'

export default function Page() {
  return (
    <div>
    <div className="profile-block">
      <p>
      Dionysus is niet als brasser geboren en hetzelfde geldt voor Joep. Overspoel hem niet met onnodige adtjes en shotjes, maar geef hem een Witte Trappist in een bruin café en je hebt een topavond.
      </p>
      <p>
      Op stap, strak in pak, avontuur, ijspret, Joep is ervoor in. Een sublieme gastheer, al moet je er wel helemaal voor
 naar Kaatsheuvel.
      </p>
      <p>
      Een potje Risk met Joep wordt snel spannend, maar denk twee keer na voordat je een pakt met hem sluit! 
      </p>
    </div>
      <img className="profile-img" src={spelletjes}></img>
    </div>

  );
}