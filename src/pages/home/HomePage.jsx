import React from 'react';
// import {useHistory, useLocation} from 'react-router'; //useNavigate v5

const HomePage = () => {

    // const location = useLocation();
    // const history = useHistory();

    // console.log('We are in Route: ', location.pathname);

    // const navigate = (path) => {
    //     history.push(path)
    // }

    // const goBack = () => {
    //     history.goBack();
    // }

    // const goForward = () => {
    //     history.goForward();
    // }


    return (
        <div>
            <h1>Home Page</h1>
            {/* <button onClick={()=> navigate('/profile')}>
                Go to Profile
            </button>
            <button onClick={goBack}>
                Go Back
            </button>
            <button onClick={goForward}>
                Go Forward
            </button> */}

        </div>
    );
}

export default HomePage;
