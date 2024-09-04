import {Container} from '../../common/container/Container.tsx';
import styles from './about.module.scss'

interface AboutProps {
    sectionRefs: {
        home: React.RefObject<HTMLDivElement>;
        team: React.RefObject<HTMLDivElement>;
        gallery: React.RefObject<HTMLDivElement>;
        video: React.RefObject<HTMLDivElement>;
        social: React.RefObject<HTMLDivElement>;
    };
}

export function About({sectionRefs}: AboutProps) {

    return (
        <div className={styles.about} ref={sectionRefs.home}>
            <Container>
                <h1 className={styles.mainTitle} id='home' >
                    EVERYTHING TO KNOW
                    <span> ABOUT EAST VS WEST</span>
                </h1>


                <h2 className={styles.secondTitle}>HOW IT ALL BEGAN…</h2>
                <div className={styles.content}>
                    <div className={styles.textWrapper}>
                        <p>
                            There’s an old saying: “Hard times create strong men, strong men create good times, good
                            times create weak men, and weak men create hard times.” Not long ago, the world endured a
                            global pandemic that brought life to a standstill, significantly impacting our community.
                            International events were halted. In response, EvW’s crew organized two international events
                            in Istanbul in March and April 2021. On June 12, 2021, we hosted the first edition of East
                            vs West in Yalova, Türkiye, featuring 11 international supermatches.
                        </p>

                        <p>
                            Following careful planning, we organized East vs West 2 on February 12, 2022, in Istanbul,
                            East vs West 3 on May 19, East vs West 4 on August 6, and are now gearing up for East vs
                            West 5 on November 19. We are also excited to announce the launch of our new website,
                            designed by our talented graphic designer, Sol Arun.
                        </p>
                    </div>

                    <div className={styles.textWrapper}>
                        <p>
                            Including East vs West X, we have organized 135 elite world-level supermatches.
                        </p>

                        <p>
                            Armwrestling deserves a higher standing among professional sports, but we aren’t there yet.
                            Our goal is to elevate this great sport to the level of other well-developed professional
                            events.
                        </p>

                        <p>
                            We don’t view East vs West as merely our brand. It has reached this point through the
                            collective efforts of fans and athletes who have participated in our events.
                        </p>

                        <p>
                            We will continue to serve the community as long as we have your support.
                        </p>

                        <p>
                            Thank you all for your continued dedication!
                        </p>
                    </div>
                </div>
            </Container>

        </div>
    )
}