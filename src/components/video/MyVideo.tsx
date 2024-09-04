import {Container} from '../../common/container/Container.tsx';
import styles from './myvideo.module.scss'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


export const MyVideo = () => {


    return (
        <div className={styles.video}>
            <Container>
                <div className={styles.videoWrapper}>
                    <h3>Our Video</h3>
                    <Player
                        playsInline
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
            </Container>
        </div>
    );
};

