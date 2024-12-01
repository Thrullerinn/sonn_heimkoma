import React, {Component} from 'react';
import NavBar from '../components/NavBar';

class Author extends Component{
    render(){
        
        return(
            <div>
                <NavBar/>
                <div className="elsa-bok-container-landscape">     
                    <img className="elsa-bok-mynd"src={`assets/images/elsagella1.jpg`} alt="" />
                    <div className="elsa-book-text">
                    Ég tókst á við lífið af miklum krafti á mínum yngri árum, yfirsteig hverja hindrunina á fætur
annarri til þess eins að elta drauma mína. Þegar lífið fór að verða flóknara, verkefnin fleiri og
meira krefjandi fór ég að tapa áttum, orku, ástríðu, áhuga. Ég tapaði gleðinni, krafturinn var
uppurinn, sköpunarkrafturinn var horfinn.<br /><br />


Ég á yndislega fjölskyldu og vini, fallegt heimili, er með doktorspróf í lyfjafræði og farsæl í starfi,
sem er líklega mest sannfærandi skjöldur sem hægt er að bera í okkar samfélagi. Ég komst því
lengi vel í gegnum lífið án þess að nokkur væri var um mína skugga.<br /><br />


Ég örmagnaðist af streitu, stöðugri innri streitu. Hún skapaðist við að þurfa að vera stöðugt á
varðbergi, á flótta, í feluleik. Ábyrgðin, dugnaðurinn, grímurnar, hlutverkin, sektarkenndin,
skömmin og óttinn skapaði streitu. Ég tók hana inn í hverju skrefi sem ég steig, inn í hvert
verkefni. Hún litaði allt mitt líf, en samt sá ég hana ekki.<br /><br />


Ég fann sterka þörf fyrir að afhjúpa þennan sannleika, afhjúpa mína skugga. Ég sá ekki lengur
ástæðu til að fela þá fyrir öðrum, þetta þunga akkeri sem ég dró á eftir mér. Mig langaði að ná
andanum, ég þráði að finna frelsið, frelsið þar sem hamingjan dvelur.<br /><br />
                    </div>
                </div>
            </div>
    
        )
    }
}
export default Author;