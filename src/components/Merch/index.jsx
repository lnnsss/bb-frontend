import React from 'react';
import s from "./styles.module.css";
import Card from "./components/Card.jsx";

const merch = [
    {
        id: 1,
        title: "Джерси",
        price: 2999,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/unisex-nike-stephen-curry-white-golden-state-warriors-swingman-badge-jersey-association-edition_ss5_p-201321964+u-dyhclxekd70frlg5rhhz+v-5vyeqomdi3pszldapbbb.jpg?_hv=2&w=400"
    },
    {
        id: 2,
        title: "Значки + карабин",
        price: 999,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/wincraft-golden-state-warriors-5-pack-key-ring-and-fridge-magnet-set_ss5_p-202288075+u-qab7ydlkq8gm97kz1wck+v-xvt04pwpz4ctqid1m0xi.jpg?_hv=2&w=400"
    },
    {
        id: 3,
        title: "Шоппер",
        price: 999,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-stadium-clear-tote-bag_pi4985000_ff_4985838-4f194f69aa49bee17d35_full.jpg?_hv=2&w=400"
    },
    {
        id: 4,
        title: "Футболка",
        price: 2499,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/mens-nike-jimmy-butler-iii-royal-golden-state-warriors-icon-edition-name-and-number-t-shirt_ss5_p-202924836+u-mxd8bjhztcpsyhujglmy+v-7vhghuy1dnipcxw6nexo.jpg?_hv=2&w=400"
    },
    {
        id: 5,
        title: "Кепка",
        price: 1999,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/mens-new-era-black-golden-state-warriors-official-team-color-9fifty-snapback-hat_pi2735000_ff_2735247_full.jpg?_hv=2&w=400"
    },
    {
        id: 6,
        title: "Носки",
        price: 499,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/unisex-starter-golden-state-warriors-team-color-two-stripe-crew-socks_ss5_p-202168209+u-otxcqlyocafb8sqveq1t+v-qskyacu0g9oiwz6gccdz.jpg?_hv=2&w=400"
    },
    {
        id: 7,
        title: "Бутылка",
        price: 1299,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-32oz-logo-thirst-hydration-water-bottle_pi4453000_ff_4453394-553510e953d22c544b85_full.jpg?_hv=2&w=400"
    },
    {
        id: 8,
        title: "Бомбер",
        price: 5499,
        imageUrl: "https://images.footballfanatics.com/golden-state-warriors/mens-jh-design-royal/white-golden-state-warriors-reversible-fleece-and-faux-leather-full-snap-jacket_pi3245000_ff_3245144_full.jpg?_hv=2&w=400"
    },
]

const Merch = () => {

    return (
        <div className={s.merch}>
            <div className={`__container ${s.merch__container}`}>

                <h2 className={s.merch__title}>Мерч</h2>

                <div className={s.productList}>
                    {merch.map((item) => <Card key={item.id} {...item} />)}
                </div>

            </div>
        </div>
    );
};

export default Merch;