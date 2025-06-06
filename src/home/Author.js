import React, {Component} from 'react';

class Author extends Component{
    render(){
        
        return(
            <div className="elsa-bok-container-landscape">     
                <img className="elsa-bok-mynd"src={`assets/images/lla.jpg`} alt="" />
                <div className="elsa-book-text">
                    Ég tókst á við lífið af miklum krafti á mínum yngri árum, yfirsteig
                    hverja hindrunina á fætur annarri til þess eins að elta drauma
                    mína. Þegar lífið fór að verða flóknara, verkefnin fleiri og meira
                    krefjandi fór ég að tapa áttum, orku, ástríðu, áhuga. Ég tapaði
                    gleðinni, krafturinn var uppurinn, sköpunarkrafturinn var horfinn.
                    <br /><br />
                    Ég á yndislega fjölskyldu og vini, fallegt heimili, er með
                    doktorspróf í lyfjafræði og farsæl í starfi. Ég var því með afar
                    sannfærandi skjöld og komst lengi í gegnum lífið án þess að
                    nokkur væri var um mína skugga.
                    <br /><br />
                </div>
            </div>
    
        )
    }
}
export default Author;