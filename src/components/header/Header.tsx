import {Container} from '../../common/container/Container.tsx';
import arm from '../../assets/images/arm.jpg';
import styles from './header.module.scss'

export function Header() {

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.menu}>
                    <img src={arm} alt="armwerestling logo" width={60} height={60}/>
                    <ul className={styles.lists}>
                        <li ><a className={styles.active} href="#">Home</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">Social</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}