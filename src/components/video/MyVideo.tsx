import {Container} from '../../common/container/Container.tsx';
import styles from './myvideo.module.scss'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

interface VideoProps {
    sectionRefs: {
        home: React.RefObject<HTMLDivElement>;
        team: React.RefObject<HTMLDivElement>;
        gallery: React.RefObject<HTMLDivElement>;
        video: React.RefObject<HTMLDivElement>;
        social: React.RefObject<HTMLDivElement>;
    };
}


export const MyVideo = ({sectionRefs}:VideoProps) => {


    return (
        <div className={styles.video}  ref={sectionRefs.video}>
            <Container>
                <div className={styles.videoWrapper}>
                    <h3 id='video'>Our Video</h3>
                    <Player
                        playsInline
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
            </Container>
        </div>
    );
};

