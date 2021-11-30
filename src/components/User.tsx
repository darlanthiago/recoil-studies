import axios from 'axios';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserData, userState } from '../store/atoms/user';


const User: React.FC = () => {

    const [user, setUser] = useState("");

    const [userGet, userSet] = useRecoilState(userState);

    const getUserFromGithub = () => {

        userSet({ ...userGet, loading: true });

        axios.get(`https://api.github.com/users/${user}`).then(resp => {

            const { login, avatar_url, public_repos } = resp.data;

            userSet({ login, avatar_url, public_repos, loading: false });

        }).catch(error => {

            alert(`Não foi possível encontrar uma conta no github com o usuário: ${user}`);

            userSet({ ...userGet, loading: false });

        });
    }

    function resetUser() {

        userSet({} as UserData);
        setUser("");

    }

    return (
        <div>
            <input type="text" onChange={e => setUser(e.target.value)} value={user} />
            <button type="button" onClick={getUserFromGithub}>Buscar</button>
            <button type="button" onClick={resetUser}>Limpar</button>
        </div>
    );
}

export default User;