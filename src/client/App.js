import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { UserProvider } from './components/context/user';
import LoginRegisterForm from './components/loginRegister';
import { useCurrentUserQuery } from './apollo/queries/currentUser';
import Feed from './Feed';
import Chats from './Chats';
import '../../assets/css/style.css';
import './components/fontawesome';
import Bar from './components/bar';
import Loading from './components/Loading';

const App = () => {
    // store whether user logged in, also on first render of app, check state based on local storage
    const [ loggedIn, setLoggedIn ] = useState(!!localStorage.getItem('jwt'));
    const { data, error, loading, refetch } = useCurrentUserQuery();

    if (loading){
        return <Loading />;
    }
    
    return (
        <div className="container">
            <Helmet>
                <title>Graphbook - Feed</title>
                <meta name="description" content="Newsfeed of all your friends on Graphbook" />
            </Helmet>
            { loggedIn && (
                <div>
                    <Bar changeLoginState={setLoggedIn} />
                    <Feed />
                    <Chats />
                </div>
            )}
            {!loggedIn && <LoginRegisterForm changeLoginState={setLoggedIn} />}
        </div>
    )
}

export default App