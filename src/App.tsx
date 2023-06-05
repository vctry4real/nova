import styles from './App.module.scss';
import { LandingPage } from './components/landing-page/landing-page';

function App() {
    return (
        <div className={styles.App}>
            <LandingPage />
        </div>
    );
}

export default App;
