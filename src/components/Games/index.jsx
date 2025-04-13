import React, {useEffect} from 'react';
import s from "./styles.module.css";
import axios from "axios";
import { useStores } from "../../stores/root-store-context.js";
import { observer } from "mobx-react-lite";
import { apiGamesURL } from "../../configs/constants.js";
import Card from "./components/Card.jsx";

const Games = observer(() => {
    const {
        games: { games, setGames }
    } = useStores();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get(apiGamesURL)

                setGames(response.data.content);

            } catch (err) {
                console.error(err)
            }
        }
        fetchGames()
    }, [])

    return (
        <div className={s.games}>
            <div className={`__container ${s.games__container}`}>
                <h1 className={s.gamesTitle}>Игры</h1>

                <div className={s.gameList}>
                    {games.length > 0 ? (
                        games.map((g) => <Card key={g.id} {...g} />)
                    ) : (
                        <p className={s.noGames}>Календарь игр пуст.</p>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Games;