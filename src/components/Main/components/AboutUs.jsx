import React from 'react';
import s from "../styles.module.css";

const blocks = [
    {
        title: "Наша История",
        text: "Мы - баскетбольная команда Альметьевского политехнического колледжа, страстно увлеченные игрой и стремящиеся к новым вершинам."
    },
    {
        title: "Наше Вдохновение",
        text: "Наше вдохновение - легендарная команда Golden State Warriors. Мы восхищаемся их командным духом, инновационным стилем игры и стремлением к совершенству."
    },
    {
        title: "Наша Цель",
        text: "Наша цель - не только побеждать на площадке, но и развивать командную работу, уважение и спортивный дух среди наших игроков. Мы стремимся быть лучшими не только в колледже, но и за его пределами."
    },
    {
        title: "Наше Сообщество",
        text: "Мы гордимся своей историей, своими игроками и нашими болельщиками. Вместе мы создаем сильное и дружное сообщество, объединенное любовью к баскетболу."
    },
    {
        title: "Ждём вас!",
        text: "Присоединяйтесь к нам, поддерживайте нашу команду, и вместе мы добьемся новых побед!"
    },
]

const AboutUs = () => {
    return (
        <div className={s.aboutUs}>
            <div className={s.aboutUs__container}>
                <h2>О нас</h2>
                <div className={s.aboutUs__content}>
                    {blocks.map((b, i) => <AboutSection key={i} title={b.title} text={b.text} />)}
                </div>
            </div>
        </div>
    );
};

const AboutSection = ({title, text}) => {
    return (
        <div className={s.aboutUs__section}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default AboutUs;