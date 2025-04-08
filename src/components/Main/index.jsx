import React from 'react';
import s from "./styles.module.css"
import BGBlock from "./components/BGBlock.jsx";
import Partners from "./components/Partners.jsx";
import Why from "./components/Why.jsx";
import AboutUs from "./components/AboutUs.jsx";
import News from "./components/News.jsx";

const Main = () => {
    return (
        <div className={s.main}>
            <BGBlock/>
            <News/>
            <AboutUs/>
            <Partners/>
            <Why/>
        </div>
    );
};

export default Main;