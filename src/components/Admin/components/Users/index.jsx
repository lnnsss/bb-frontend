import React, {useEffect} from 'react';
import s from "./styles.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../stores/root-store-context.js";
import User from './components/User.jsx';
import axios from "axios";
import {apiUsersURL} from "../../../../configs/constants.js";

const Users = observer(() => {
    const {
        users: { users, setUsers }
    } = useStores();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(apiUsersURL);
                setUsers(response.data.content);
            } catch (err) {
                console.error(err)
            }
        }
        fetchUsers()
    }, []);

    if (!users || users.length === 0) {
        return (
            <div className={s.users}>
                <div className={`__container ${s.users__container}`}>
                    <h2 className={s.title}>Пользователи</h2>
                    <p className={s.noUsers}>Пользователи не найдены.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={s.users}>
            <div className={`__container ${s.users__container}`}>
                <h2 className={s.title}>Пользователи</h2>
                <div className={s.userList}>
                    {users.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Users;