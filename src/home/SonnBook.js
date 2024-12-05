import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import {Link} from 'react-router-dom';

class SonnBook extends Component{
    render(){
        
        return(
            <div>
                <NavBar/>
                <div className="elsa-bok-container-landscape">
                <div><img className="elsa-bok-mynd"src={`assets/images/sonn_bok.jpg`} alt="" /></div>
                <div className="elsa-book-text">
                    Sönn varpar ljósi á þá skugga sem mér hafa fylgt, skugga sem þoldu svo
                    illa ljós að ég sá þá ekki sjálf. Ég gat ekki komið orðum að því hvers
                    vegna mér leið ekki vel, hvers vegna einföldustu verkefni voru orðin mér
                    erfið, hvers vegna líf mitt var orðið svona litlaust. Mér fannst ég hafa það
                    fínt, eiga að hafa það fínt, en gleðin innra með mér var ekki til staðar
                    lengur. <br /><br />

                    Skuggarnir voru ekki áþreifanlegir en erfitt var orðið að bera þá. Þeim
                    mun meira sem ég nærði þá urðu þeir þyngri, skref mín urðu þyngri,
                    líkami minn varð þyngri. Ég gaf skuggunum kraft minn. Hvert sinn sem ég
                    nærði þá urðu þeir sterkari, sjálfsmynd mín veikari.<br /><br />

                    Dugnaðurinn, ábyrgðin, góðvildin, óreiðan, feimnin, letin, höfnunin,
                    gremjan, þögnin, einmannaleikinn, óttinn, sektarkenndin, sjálfsniðurbrotið,
                    skömmin.<br /><br />

                    Sönn er fyrsta bók Elsu og kom út árið 2023.
                        <br />
                        <br />
                        <Link className="elsa-order" to={`${process.env.PUBLIC_URL}/contact-us`}>Panta</Link>
                </div>
            </div>
            </div>
        )
    }
}
export default SonnBook;