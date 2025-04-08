import React from 'react';
import s from "../styles.module.css";

const partners = [
    { name: 'АПТ', img: 'apt.png', link: 'https://almetpt.ru/2020/site' },
    { name: 'ФЦДО', img: 'fedcdo.png', link: 'https://fedcdo.ru/' },
    { name: 'Татарстан', img: 'tatarstan.png', link: '#' },
    { name: 'Айти Куб', img: 'itcube.png', link: 'https://almetpt.ru/2020/itcube/index' },
    { name: 'МЛБЛ', img: 'mlbl.jpg', link: 'https://ilovebasket.ru/' },
];

const Partners = () => {

    return (
        <div className={s.partners}>
            <div className={`__container ${s.partners__container}`}>
                <h2>Наши Партнеры</h2>
                <div className={s.partners__grid}>
                    {partners.map((p, i) => <Partner key={i} name={p.name} img={p.img} link={p.link} />)}
                </div>
            </div>
        </div>
    );
};

const Partner = ({name, img, link}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={s.partners__logoWrapper}
        >
            <img src={`/partners/${img}`} alt={name} className={s.partners__logo} title={name}/>
        </a>
    )
}

export default Partners;