import styles from './App.module.scss';
import { LandingPage } from './components/landing-page/landing-page';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';

function App() {
    return (
        <div className={styles.App}>
            <div>
                <NavBar />
                <LandingPage />
                <Footer />
            </div>
        </div>
    );
}

export default App;
