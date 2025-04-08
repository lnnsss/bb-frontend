import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import s from "./styles.module.css";
import { observer } from "mobx-react-lite";
import Logo from "./components/Logo.jsx";
import Burger from "./components/Burger.jsx";
import Nav from "./components/Nav.jsx";

const Header = observer(() => {
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileBreakpoint = 768;
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    // Эффект цвета фона шапки
    useEffect(() => {
        if (!isHomePage) {
            setIsScrolled(false);
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const viewportHeight = window.innerHeight;
            const isDesktop = window.innerWidth > mobileBreakpoint;

            if (isDesktop) {
                if (scrollPosition >= viewportHeight) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isHomePage]);

    const headerClasses = [s.header];
    if (!isHomePage || isScrolled) {
        headerClasses.push(s.scrolled);
    }

    return (
        <header className={headerClasses.join(' ')}>
            <div className={`__container ${s.header__container}`}>
                <Logo/>
                <Burger/>
                <Nav/>
            </div>
        </header>
    );
});

export default Header;