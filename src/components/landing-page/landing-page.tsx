import styles from './landing-page.module.scss';
import classNames from 'classnames';
import ai from '../../assets/ai.png';
import AI2 from '../../assets/AI2.png';
import AVR from '../../assets/AVR.png';
import Robotic from '../../assets/Robotic.png';
import blockchain from '../../assets/blockchain.png';
import { Cards } from '../cards/cards';

export interface LandingPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-landing-pages-and-templates
 */
export const LandingPage = ({ className }: LandingPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section className={styles.container}>
                <h2 className={styles.h2}>Welcome to V-TechHub</h2>
                <h4 className={styles.h4}> Where Innovation Meets Collaboration!</h4>
                <br />
                <div className={styles.content}>
                    <p className={styles.p}>
                        Discover V-TechHub, a vibrant community where
                        techenthusiasts,innovators,andlearners unite. Immerse yourself in our
                        collaborative space, fosteringcreativity, knowledge sharing, and meaningful
                        connections.Explorecutting-edge facilities, advanced technology, and
                        tailored programs in AI,blockchain, cybersecurity, and software development.
                    </p>
                    <div className={styles.btn_container}>
                        <button className={classNames(styles.btn, styles.lm)}>Learn More</button>
                        <button className={styles.btn}>Get Started</button>
                    </div>
                </div>
                <br />
                <br />
                <div className={styles.dyk_container}>
                    <h3 className={styles.h3}>Did You Know ?</h3>
                    <div className={styles.dyk_items}>
                        <div className={styles.image_container}>
                            <div className={styles.dyk_item_image}>
                                <img src={ai} alt="Artificial Image" className={styles.ai} />
                            </div>
                        </div>
                        <div className={styles.dyk_content}>
                            <article className={styles.dyk_article}>
                                <p>
                                    AI, standing at the forefront of technological advancements, is
                                    undoubtedly shaping the future with its vast potential. As we
                                    venture into an era where artificial intelligence becomes
                                    increasingly integrated into various aspects of our lives, its
                                    impact is becoming more pronounced and transformative. AI
                                    possesses the ability to revolutionize industries such as
                                    healthcare, transportation, finance, and manufacturing,
                                    improving efficiency, accuracy, and accessibility.
                                </p>
                            </article>
                            <article className={styles.dyk_article}>
                                <p>
                                    From personalized medical treatments to autonomous vehicles,
                                    AI&apos;s capabilities are propelling us towards a future where
                                    human-machine collaboration enhances productivity and unlocks
                                    new possibilities. However, as we tread into this territory, it
                                    is crucial to approach the development and deployment of AI
                                    ethically and responsibly. By prioritizing transparency,
                                    fairness, and accountability, we can harness the full potential
                                    of AI while mitigating potential risks.
                                </p>
                            </article>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className={styles.dyk_items}>
                        <div className={styles.image_container}>
                            <div className={styles.dyk_item_image}>
                                <img src={blockchain} alt="Blockchain" className={styles.ai} />
                            </div>
                        </div>
                        <div className={styles.dyk_content}>
                            <article className={styles.dyk_article}>
                                <p>
                                    Blockchain technology, with its decentralized and transparent
                                    nature, holds immense potential to shape the future across
                                    various industries. As we move forward, blockchain has the power
                                    to revolutionize sectors such as finance, supply chain
                                    management, healthcare, and more. Its ability to provide secure,
                                    tamper-proof, and immutable records creates a new level of trust
                                    and efficiency.
                                </p>
                            </article>
                            <article className={styles.dyk_article}>
                                <p>
                                    Blockchain&apos;s distributed ledger system enables faster and
                                    more cost-effective transactions while reducing the risk of
                                    fraud and improving transparency. Moreover, smart contracts,
                                    built on blockchain platforms, have the potential to automate
                                    complex processes, streamline operations, and eliminate
                                    intermediaries. As we explore the future of blockchain, it is
                                    crucial to address challenges such as scalability, regulatory
                                    frameworks, and interoperability.{' '}
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <h3 className={styles.h3}>
                        We Are Your Eyes And Ears To Technological Advancements
                    </h3>
                    <div className={styles.article_container}>
                        <article className={styles.article}>
                            <p className={styles.p}>
                                In today&apos;s rapidly evolving world, staying updated with
                                technological advancements is vital. As your eyes and ears to this
                                ever-changing landscape, we curate the most relevant information,
                                explore emerging technologies, share industry insights, address
                                ethical implications, and foster a vibrant tech community. By
                                following our blog, you will gain the knowledge and perspective
                                needed to navigate the tech-driven era, seize opportunities, and
                                contribute to shaping the future. Join us on this exciting journey
                                as we continue to be your trusted source for all things tech.
                            </p>
                        </article>
                    </div>
                    <div className={styles.cards_container}>
                        <Cards>
                            <div>
                                <h4>AI as a service</h4>
                                <p>Unlock the Power, Unleash AI&apos;s Brilliance!</p>
                                <a href="/">Take a look &gt;&gt;</a>
                                <br />
                                <img src={AI2} className={styles.ai_image} />
                            </div>
                        </Cards>
                        <Cards>
                            <div>
                                <h4>Virtual and Augmented Reality</h4>
                                <p>Step into the Unreal, Embrace the Augmented</p>
                                <a href="/">Take a look &gt;&gt;</a>
                                <br />
                                <img src={AVR} className={styles.ai_image} />
                            </div>
                        </Cards>
                        <Cards>
                            <div>
                                <h4>Robotics</h4>
                                <p>Robotic Revolution: Where Innovation Meets Automation!</p>
                                <a href="/">Take a look &gt;&gt;</a>
                                <br />
                                <img src={Robotic} className={styles.ai_image} />
                            </div>
                        </Cards>
                    </div>
                    <br />
                </div>
            </section>
        </div>
    );
};
