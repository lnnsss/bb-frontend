import React from 'react';
import s from "../styles.module.css";
import {useStores} from "../../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";
import Game from "./Game.jsx";

const MyTickets = observer(() => {
    const {
        ticket: { games }
    } = useStores()

    return (
        <div className={s.accountSection}>
            <h3 className={s.sectionTitle}>Мои билеты</h3>
            <div className={s.ticketsList}>
                {games.length > 0 ? (
                    games.map((g, i) => <Game key={i} {...g} />)
                ) : (
                    <p>У вас пока нет билетов.</p>
                )}
            </div>
        </div>
    );
});

export default MyTickets;