import React from 'react';
// import { useLocation, useHistory } from 'react-router-dom'; // useNavigate v6

const AboutPage = () => {

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
            <h1>About | FAQs Page</h1>
            {/* <div>
                <button onClick={() => navigate('/')}>Go to Home</button>
                <button onClick={goBack}>Go to Back</button>
                <button onClick={goFor}>Go to Forward</button>
            </div> */}
        </div>
    );
}

export default AboutPage;
