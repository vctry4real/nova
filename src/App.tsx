import styles from './App.module.scss';
import { LandingPage } from './components/landing-page/landing-page';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';
import {Routes, Route} from 'react-router-dom';
import  {Service}  from './components/service/service';
import { About } from './components/about/about';
import { Blog } from './components/blog/blog';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Routes>
               <Route path={"/"} element = {<LandingPage />}></Route>
               <Route path={"/service"} element = {<Service />}></Route>
               <Route path={"/about"} element = {<About />}></Route>
               <Route path={"/blog"} element = {<Blog />}></Route>
               
            </Routes>
            <Footer />   
            
        </div>
    );
}

export default App;
