import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/atoms/user';

// import { Container } from './styles';

const UserView: React.FC = () => {

    const user = useRecoilValue(userState);

    return (
        <div>
            {user.loading ? (<h1>Loading...</h1>) : (
                <>
                    <h3>{user.login}</h3>
                    <img src={user.avatar_url} alt={user.login} height="64" />
                    <h5>{user.public_repos}</h5>
                </>
            )}

        </div>
    );
}

export default UserView;