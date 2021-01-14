import React from "react"
import merijn_wcpapier from '../../images/fotos/personen/merijn wc papier.jpg'
import merijn from '../../images/fotos/personen/merijn.jpeg'
export default function Page() {
  return (
    <div>
    <div className="profile-block">
      <p>
      Merijn is met haar gezellige Limburgse gebabbel zelden in een slecht humeur aantreffen, en is daarmee het zonnetje van onze jaarclub.
      </p>
      <p>
        Wanneer je Merijn uitnodigt op een borrel, blijkt al snel haar liefde voor eten. Ze houdt namelijk erg van wafels, en kun je er bij een borrel dan ook op rekenen dat ze voor iedereen een zelfgebakken wafel heeft meegenomen.</p>
      <p>
      Naast gezelligheid weet Merijn ook van muziek wel raad, en doet ze de jaarclub naam eer aan en staat haar huis vol met meerdere platenspelers en stapels lp’s.
      </p>
     <p>
     Tijdens de borrel met Andrége probeerde óók Merijn haar verkoopskills op de proef te stellen door wc papier te verkopen aan een onbekende over de telefoon, maar toen dat niet lukte heeft ze dit meer dan goed gemaakt door met het wc papier samen met onze JC Mama Sietze een nieuwe kledingstijl begonnen.
     </p>
      <p>
      Met haar liefde voor platen en gezelligheid is Merijn een geweldig lid van onze mooie jaarclub.
      </p>
    </div>
    <div className="profile-img">
      <img className="profile-img" src={merijn}></img>
      <img className="profile-img" src={merijn_wcpapier}></img>
    </div>
    </div>
  );
}