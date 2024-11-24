import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import {Link} from 'react-router-dom';

class SonnHeimkomaAndSonnBook extends Component{
    render(){
        
        return(
            <div>
                <NavBar/>
                <div className="elsa-bok-container-landscape">
                    <div><img className="elsa-bok-mynd" src={`assets/images/sonn_heimkoma_bok.jpg`} alt="" /></div>
                    <div className="elsa-book-text">
                        Sönn Heimkoma lýsir leið minni til að uppræta doðann, tilbreytingaleysið,
                        vanlíðanin. Horfast í augu við þá stöðu sem ég var komin í og byrja að
                        taka til hendinni. Hlusta, opna augun, hleypa birtunni inn. Finna, snerta,
                        grafa ofan í mold sögunnar. Brjóta niður veggi og múra, vinsa burt allan
                        óþarfa sem ég veit ekki hvernig endaði hjá mér.

                        Ég fann styrk til að færast nær mínum skuggum og þar með nær
                        stelpunni sem tók þessar ákvarðanir eftir sinni bestu getu. Ég get enn
                        verið til staðar fyrir hana, tekið hana í faðminn, leyft mér að finna til með
                        henni. Það er aldrei of seint að elska hana, vera stolt af henni, sýna
                        henni að hún er verðug, mannleg, falleg fyrirmynd.

                        Einfaldleikinn, fyrirgefningin, sjálfsskoðunin, töfrakonan, hugrekkið,
                        umbreytingin, drifkrafturinn, sjálfstraustið, samkenndin, hamingjan,
                        tilbreytingin, fögnuðurinn, ástin, frelsið.

                        Sönn Heimkoma er önnur bók Elsu og kom út árið 2024.
                        <br />
                        <br />
                        <Link className="elsa-order" to={`${process.env.PUBLIC_URL}/contact-us`}>Panta</Link>


                </div>
            </div>
            <div>
                <div className="elsa-bok-container-landscape">
                <div><img className="elsa-bok-mynd"src={`assets/images/sonn_bok.jpg`} alt="" /></div>
                <div className="elsa-book-text">
                    Sönn varpar ljósi á þá skugga sem mér hafa fylgt, skugga sem þoldu svo
                    illa ljós að ég sá þá ekki sjálf. Ég gat ekki komið orðum að því hvers
                    vegna mér leið ekki vel, hvers vegna einföldustu verkefni voru orðin mér
                    erfið, hvers vegna líf mitt var orðið svona litlaust. Mér fannst ég hafa það
                    fínt, eiga að hafa það fínt, en gleðin innra með mér var ekki til staðar
                    lengur.

                    Skuggarnir voru ekki áþreifanlegir en erfitt var orðið að bera þá. Þeim
                    mun meira sem ég nærði þá urðu þeir þyngri, skref mín urðu þyngri,
                    líkami minn varð þyngri. Ég gaf skuggunum kraft minn. Hvert sinn sem ég
                    nærði þá urðu þeir sterkari, sjálfsmynd mín veikari.

                    Dugnaðurinn, ábyrgðin, góðvildin, óreiðan, feimnin, letin, höfnunin,
                    gremjan, þögnin, einmannaleikinn, óttinn, sektarkenndin, sjálfsniðurbrotið,
                    skömmin.

                    Sönn er fyrsta bók Elsu og kom út árið 2023.
                        <br />
                        <br />
                        <Link className="elsa-order" to={`${process.env.PUBLIC_URL}/contact-us`}>Panta</Link>
                </div>
            </div>
            </div>
        </div>
        )
    }
}


export default SonnHeimkomaAndSonnBook;