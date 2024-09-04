declare module 'react-image-gallery' {
    import { FC, ReactNode, SyntheticEvent } from 'react';

    export type Image = {
        original: string;
        thumbnail: string;
        originalAlt?: string;
        thumbnailAlt?: string;
        originalTitle?: string;
        thumbnailTitle?: string;
        description?: string;
        srcSet?: string;
        sizes?: string;
        renderItem?: (item: Image) => ReactNode;
        renderThumbInner?: (item: Image) => ReactNode;
    };

    export type ImageGalleryProps = {
        items: Image[];
        showNav?: boolean;
        autoPlay?: boolean;
        lazyLoad?: boolean;
        infinite?: boolean;
        showBullets?: boolean;
        showThumbnails?: boolean;
        showPlayButton?: boolean;
        showFullscreenButton?: boolean;
        disableThumbnailScroll?: boolean;
        disableKeyDown?: boolean;
        disableSwipe?: boolean;
        useBrowserFullscreen?: boolean;
        preventDefaultTouchmoveEvent?: boolean;
        flickThreshold?: number;
        stopPropagation?: boolean;
        indexSeparator?: string;
        slideDuration?: number;
        slideInterval?: number;
        slideOnThumbnailOver?: boolean;
        additionalClass?: string;
        useTranslate3D?: boolean;
        isRTL?: boolean;
        thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left';
        onErrorImageURL?: string;
        onThumbnailError?: (event: SyntheticEvent<HTMLImageElement>, index: number) => void;
        onImageError?: (event: SyntheticEvent<HTMLImageElement>, index: number) => void;
        onSlide?: (currentIndex: number) => void;
        onBeforeSlide?: (nextIndex: number) => void;
        onScreenChange?: (fullScreenElement: Element) => void;
        onPlay?: (currentIndex: number) => void;
        onPause?: (currentIndex: number) => void;
        renderCustomControls?: () => ReactNode;
        renderLeftNav?: (onClick: () => void, disabled: boolean) => ReactNode;
        renderRightNav?: (onClick: () => void, disabled: boolean) => ReactNode;
        renderPlayPauseButton?: (onClick: () => void, isPlaying: boolean) => ReactNode;
        renderFullscreenButton?: (onClick: () => void, isFullscreen: boolean) => ReactNode;
    };

    const ImageGallery: FC<ImageGalleryProps>;
    export default ImageGallery;
}
