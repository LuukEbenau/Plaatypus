import React from "react"

import ember from '../../images/fotos/groepsfotos/ember en de rest.jpg'

export default function Page() {
  return (
    <div>
      <div className="profile-block">
        <p>
        Ember is de kleinste van onze JC, maar dat betekent niet dat ze een laffe borrelaar is.
          Legendes zeggen dat als je een wijnfles binnen een straal van 2 km houdt bij Ember dat ze dan deze binnen enkele tellen gevonden heeft en verslonden heeft.
        </p>
        <p>
        Haar liefde voor wijn komt voort uit haar liefde voor koken, dit doet ze al minstens 2 weken.
          Ons Ember komt uit een klein dorpje genaamd Holthees in Limbur…. Brabant.
          De grens tussen die twee provincies is klein net als de tolerantie van Ember.
          Ember zal je nooit tegenkomen bij cafe de trefpunt, alleen voor verkiezingen.
          Wil je weten waarom? Dan moet je dat bij de volgende borrel zeker even vragen aan haar.
        </p>
        <p>
        Ember is enorm verliefd op haar vriendje, die ze overigens online ontmoet heeft.
          Hij klinkt als een topvent, alleen een beetje jammer dat die uit Drenthe komt.
          Van haar vriend heeft ze waarschijnlijk ook haar gewaagte humor, en heeft ze genoeg zelfvertrouwen om iedereen boven de 1,60 omver te blazen met haar gevatte grappen.
          
          <p>De grappen gaan wel eens over ballen, en verbazend genoeg is Ember verder dan ook een fervent volleybalster.
          Hoe ze dat doet, we hebben geen IDee, maar dat geldt overigens ook voor haar studie.</p>   
        </p>       
      </div>
      <img className="profile-img" src={ember}/>
    </div>
  );
}