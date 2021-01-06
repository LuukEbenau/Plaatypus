import React from "react"
import img1 from '../images/fotos/groepsfotos/ember en de rest.jpg'
import img2 from '../images/fotos/groepsfotos/spelletjes.jpeg'
import img3 from '../images/fotos/groepsfotos/sokadt met congo.png'
import img4 from '../images/fotos/groepsfotos/foto 2 square.jpg'
import img5 from '../images/fotos/mongooltjes.jpg'



export default class About extends React.Component {
    render() {
        return (
            <div>
            <div className="profile-block">
                <p><b>Ontstaansgeschiedenis J.C. i.o. 6</b></p>
                <p>
                Ze leefden in het sprookjesbos meestal lang en gelukkig, 
            maar er was eens een dag dat dat anders was… Een witte Prins op een knap paard (en vice versa) 
            ontsnapte uit de hiërarchische en autocratische sprookjeswereld, opzoek naar een democratische en egalitaire omgeving. 
            </p>
            <p>
            Spoedig sloeg de dorst toe bij de Prins en hij vroegh een vreemdeling om drincken, alwat hem gul werd verschaft. 
            “O, het voelt warempel alsof duizend engelen op mijnen tong wateren. Wie bent Gij? En hoe komt Gij aan deze goddelijke dranck?”, 
            waarop de vreemdeling antwoorde “Men noemt mij de Wijze uit het Oosten. Het Gerstenat is het levenswater van de Filosofische stroming 
            van het Studentenleven.” De Prins was meteen vastbesloten om het epicentrum van deze levensbeschouwing op te zoeken, de stad Eindhoven.
            </p>
            <p>
            Door een kleine misnavigatie kwam het tweetal eerst bij een gat tusschen Bredaa en Tilburgh terecht. Hier leefde een schone Jonkvrouwe, 
            die wat graag de tavernes in het nabijgelegen Tilburgh wilde bezoeken, maar helaasch vast zat in het gat. Gelukkig had de Wijze 
            in het verre Tiensjangebergte leren klimmen en kon zo de Jonkvrouwe uit het gat bevrijden. 
                </p>
                <p>
                De Wijze sprak: 
            “Al is Tilburgh niets vergeleken met Eindhoven, het kan geen kwaad om even langs te wippen.” Na een plezierige avond stappen, 
            kreeg het drietal honger. Gelukkig wezen twee laatmiddelbare vrouwen hen (bijna onvoorwaardelijk) de weg naar een “nabijgelegen”
            hoeve in het barbaarsche land van boven de rivieren.
                </p>
                <p>
                Om in den koude provinciën van het hooghe Noorden te komen, moest het gezelschap
            de Maas en Waal oversteken. De enighe overgang werd helaasch bewaakt door een kundig Kolonel, die sprak: “Halt, eerdat U oversteken kunt,
            moet U een riskant spel van mij winnen.” De groep werd volledig ingemaakt, maar de Kolonel was de moeilijkste niet, en hij sloot zich bij
            hen aan en ze passeerden de brug.
                </p>
                <p>
                Bij de hoeve aanghekomen, werd de deur geopend door een oude man. “O Boer, heeft Gij wat te eten voor
            ons hongerig reizigers?” Vroeg de Kolonel. “Ik ben geen boer.” antwoorde de man, waarop hij een levende Python tevoorschijn haalde en
            met hem een virtueel feestmaal voor de reizigers programmeerde. Het gezelschap was stupéfait door deze toverkunst en smickelde lustig van de traktatie.
            Ze smeeckten de Magiër om hen te vergezellen op hunnen reis. De Magiër was van de partij en de reis werd vervolgd tot plots een noodkreet
            klonk. Een Witte Koning stond op het punt geschaakt te worden door een zwarte dame. Gelukkig had de Prins een wit paard,
            dat met een geweldige paardensprong de dame sloeg.  
                </p>
                <p>
                De Witte Koning was gered van een zekere ondergang en voegde zich bij de groep.
            In een donker bos aanghekomen werd het gezelschap bevangen door de overheerlijke geuren van vers gebraden gevulde pauw en vers gebakken 
            bierbrood. 
                </p>
                <p>
                Eenieder trad gehypnotiseerd in de richting waar de geur vandaan kwam, totdat ze bij een verrukkelijk ogend peperkoekhuys
            aankwamen. Net voordat hun tongen de ramen likten, schoot een net omhoog en bungelden zij hulpeloos aan een boom. Nu zagen zij dat aan 
            een tegenoverstaande boom een net hing met een Ridder, zijnen harnas bezaaid met tandafdrukken. 
                </p>
                <p>
                Een bloedmooie Fee en een oogverblindende
            Elf kwamen uit het huysje naar buiten. De Fee sprak: “Het spijt ons, maar wij moeten U allen opeten, opdat wij eeuwig jong blijven.”,
            waarop de Wijze zei: “Eeuwig leven is niet alles. Een jaar Studentenleven is meer waard dan een eeuw in een afgelegen koekhuys in het 
            bos. Kom met ons mee naar Eindhoven!”
                </p>
                <p>
                De Fee en de Elf waren overtuigd en met de hulp van een beetje elfenstof vlogen de Fee de Elf, 
            de Ridder en de rest van de groep spoedig hoogh in de lucht. De Kolonel zag hoe een Wolkendokter een wolkbreuk spalkte en vroeg: 
            “Hé daar, kunnen wij U ergens mee helpen?”, waarop de Wolkendokter antwoorde: “O, haal me uit de wolken! Het zijn zulke depressieve 
            jankballen.” De Wolkendokter kreeg ook wat elfenstof en het duurde niet lang, vooraleer het gezelschap in Eindhoven landde. 
                </p>
  <p>
  In Eindhoven laafden de vrienden zich aan de nectar der goden, maar ze waren ontgoocheld door het haantjesgedrag van zelfverklaarde 
            koorzangers e.d. Daarom gingen ze opzoek naar meer liefdevolle en gelijkwaardige mensen. Gelukkig duurde het niet lang voordat de groep
            werd uitgenodigd voor een audiëntie bij de Keizer en daar vonden ze eindelijk waar ze naar opzoek waren. Dat doet me trouwens denken aan
            het geëscaleerde bacchanaal van Carnaval 2021, maar dat lieve kinderen, dat is weer een ander verhaal…    
  </p>
            </div>
            <div className="profile-img">
            <img className="w-100" src={img1}/>
            <img className="w-100" src={img2}/>
            <img className="w-100" src={img3}/>
            <img className="w-100" src={img4}/>
            <img className="w-100" src={img5}/>
            </div>
            
            {/* <img className="profile-img" src={frederik}/> */}
            </div>
        )
    }
}