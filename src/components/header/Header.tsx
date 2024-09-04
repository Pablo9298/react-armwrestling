import {Container} from '../../common/container/Container.tsx';
import arm from '../../assets/images/arm.jpg';
import styles from './header.module.scss'
import {useEffect, useState} from 'react';
import classNames from 'classnames';

interface HeaderProps {
    sectionRefs: {
        home: React.RefObject<HTMLDivElement>;
        team: React.RefObject<HTMLDivElement>;
        gallery: React.RefObject<HTMLDivElement>;
        video: React.RefObject<HTMLDivElement>;
        social: React.RefObject<HTMLDivElement>;
    };
}


export function Header({sectionRefs}: HeaderProps) {

    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            const sections = Object.entries(sectionRefs).map(([key, ref]) => ({
                key,
                offsetTop: ref.current?.offsetTop || 0,
                offsetHeight: ref.current?.offsetHeight || 0,
            }))

            const scrollPosition = window.scrollY + window.innerHeight / 4;


            for (const {key, offsetTop, offsetHeight} of sections) {
                if (scrollPosition > offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(key)
                    break;
                }

            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [sectionRefs])

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.menu}>
                    <img src={arm} alt="armwerestling logo" width={60} height={60}/>
                    <ul className={classNames(styles.lists, {[styles.sticky]: isSticky})}>
                        <li>
                            <a href="#home" className={classNames({[styles.active]: activeSection === 'home'})}>Home</a>
                        </li>
                        <li>
                            <a href="#team" className={classNames({[styles.active]: activeSection === 'team'})}>Team</a>
                        </li>
                        <li>
                            <a href="#gallery"
                               className={classNames({[styles.active]: activeSection === 'gallery'})}>Gallery</a>
                        </li>
                        <li>
                            <a href="#video"
                               className={classNames({[styles.active]: activeSection === 'video'})}>Video</a>
                        </li>
                        <li>
                            <a href="#social"
                               className={classNames({[styles.active]: activeSection === 'social'})}>Social</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}