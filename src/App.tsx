import styles from './App.module.scss';
import { LandingPage } from './components/landing-page/landing-page';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Routes>
               <Route path={"/"} element = {<LandingPage />}></Route>
                <LandingPage />
               
            </Routes>
            <Footer />   
            
        </div>
    );
}

export default App;
