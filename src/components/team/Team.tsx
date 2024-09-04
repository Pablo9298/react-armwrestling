import {Container} from '../../common/container/Container.tsx';
import avatar from '../../assets/images/images.jpg'
import styles from './team.module.scss'

interface TeamProps {
    sectionRefs: {
        home: React.RefObject<HTMLDivElement>;
        team: React.RefObject<HTMLDivElement>;
        gallery: React.RefObject<HTMLDivElement>;
        video: React.RefObject<HTMLDivElement>;
        social: React.RefObject<HTMLDivElement>;
    };
}

export function Team({sectionRefs}: TeamProps) {

    return (
        <div className={styles.team} ref={sectionRefs.team}>
            <Container>

                <div className={styles.bosswrapper} >
                    <div className={styles.teacher}>
                        <h3 id="team"></h3>
                        <img src={avatar} alt="avatar" className={styles.avatar}/>
                        <p>Andrii L</p>
                        <span>PRO WRESTLER</span>
                    </div>

                    <div className={styles.content}>
                        <h3>A MESSAGE FROM OUR FOUNDER</h3>

                        <div className={styles.textContent}>
                            <p>
                                I love armwrestling and I finally see tens of thousands of people who share the same
                                feelings that I have for this sport. Do I have the capacity to serve this sport? Yes, I
                                do, and I will serve as long as I am supported and my health will allow me to. I enjoy
                                seeing community enjoying these events.
                            </p>

                            <p>
                                We (fans, athletes, coresports) are doing a good job together so far. Thanks to all of
                                you
                                who have been supporting me to organize EvW.
                            </p>

                            <span> <span>– Engin Terzi</span>, The Enigma of Rage.</span>
                        </div>
                    </div>
                </div>

                <div className={styles.subTeam}>
                    <h2>MEET THE TEAM!</h2>
                    <div className={styles.restTeam}>
                        <div className={styles.teacher}>
                            <img src={avatar} alt="avatar" className={styles.avatar}/>
                            <p>Andrii L</p>
                            <span>PRO WRESTLER</span>
                        </div>

                        <div className={styles.teacher}>
                            <img src={avatar} alt="avatar" className={styles.avatar}/>
                            <p>Andrii L</p>
                            <span>PRO WRESTLER</span>
                        </div>

                        <div className={styles.teacher}>
                            <img src={avatar} alt="avatar" className={styles.avatar}/>
                            <p>Andrii L</p>
                            <span>PRO WRESTLER</span>
                        </div>

                        <div className={styles.teacher}>
                            <img src={avatar} alt="avatar" className={styles.avatar}/>
                            <p>Andrii L</p>
                            <span>PRO WRESTLER</span>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}