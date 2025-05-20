import React from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.js";
import s from "../styles.module.css";

const ModeBtn = observer(({name, title}) => {
    const {
        deleted: { mode, setMode }
    } = useStores()

    return (
        <button onClick={() => setMode(name)} className={`${s.btn} ${mode == name && s.activeBtn}`}>{title}</button>
    )
})

export default ModeBtn;