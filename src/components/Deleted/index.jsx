import React from 'react';
import s from "./styles.module.css"
import Header from "./components/Header.jsx";
import {observer} from "mobx-react-lite";
import {useStores} from "../../stores/root-store-context.js";
import PlayerCard from "./components/PlayerCard.jsx";
import NewsCard from "./components/NewsCard.jsx";

const Deleted = observer(() => {
    const {
        deleted: { mode },
        players: { deletedPlayers },
        news: { deletedNews }
    } = useStores()

    return (
        <div className={s.deleted}>
            <div className={`__container ${s.deleted__container}`}>
                <Header/>
                {
                    mode == "player" && (
                        <div className={s.players__grid}>
                        {deletedPlayers && deletedPlayers.length > 0 ? (
                            deletedPlayers.map((p, i) => <PlayerCard key={i} {...p} />)
                        ) : (
                            <p className={s.players__empty}>Информация об игроках загружается или отсутствует.</p>
                        )}
                    </div>
                    )
                }
                {
                    mode == "news" && (
                        <div className={s.news__grid}>
                            {deletedNews && deletedNews.length > 0 ? (
                                deletedNews.map((n, i) => <NewsCard key={i} {...n} />)
                            ) : (
                                <p className={s.news__empty}>Новости загружаются или отсутствуют.</p>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
    );
});

export default Deleted;