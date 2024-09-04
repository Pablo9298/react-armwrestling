import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import img from '../../assets/images/images.jpg'
import {Container} from '../../common/container/Container.tsx';
import styles from './mygallery.module.scss'

const images = [
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
    {
        original: img,
        thumbnail: img,
    },
];

export const MyGallery: React.FC = () => {
    return (
        <div className={styles.gallery}>
            <Container>
                <h3 id='gallery'>Our Gallery</h3>
                <div className={styles.galleryWrapper}>
                    <ImageGallery items={images} thumbnailPosition="bottom"/>
                </div>
            </Container>
        </div>

    )
};
