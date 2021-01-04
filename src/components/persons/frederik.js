import React from "react"

import frederik from '../../images/fotos/personen/geile frederik.jpg'

export default function Page() {
  return (
    <div>
      <div className="profile-block">
        <p>
        Frederik is onze onofficiële papa en een van de 3 F’s, hij laat zijn mentor-skills los op de jaarclub en probeert ervoor te zorgen dat iedereen gezellig meedoet en zich op hun gemak voelt.
        Hij is dan ook al 3e jaars Computer science en een van de makers van onze prachtige website.
        Daarnaast is hij ook nog lid van de SEC (step estafette commissie) en is hij daarvoor vaak promotie aan het maken.
        </p>
        <p>
        Hij is geboren in Kirgizstan, maar het merendeel van zijn leven in Limburg doorgebracht en is dus ook een echte Limburger want hij zegt beurs ipv portemonnee.
        Zijn achternaam “Ondrikov” wordt door veel mensen als te lastig gezien dus gaat hij vaak onder de achternaam van zijn stiefvader “Smeets”.
        </p>
<p>
Als mentor zou je denken dat hij zijn zaken op orde heeft, maar het komt toch zeer regelmatig voor dat hij ‘s avonds laat tijdens de borrels nog aan zijn deadlines moet werken en dan ook pas gaat eten, vandaar zijn prachtige tripplekin die hij vaak op fotos showed.
</p>
  <p>
  Wanneer je bij Frederik thuis gaat borrelen zal hij je er nooit vandoor laten gaan voordat je zijn afscheids shotje doet, maar zelf kan hij er niet zo goed tegen en heeft dus ook al de nodige keren in zn leven moeten barfen.
  </p>
      </div>
      <img className="profile-img" src={frederik}></img>
    </div>

  );
}