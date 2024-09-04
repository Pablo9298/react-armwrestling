import {Header} from './components/header/Header.tsx';
import {About} from './components/about/About.tsx';
import {Team} from './components/team/Team.tsx';
import {MyGallery} from './components/gallery/MyGallery.tsx';
import {MyVideo} from './components/video/MyVideo.tsx';
import {useRef} from 'react';
// import MyMap from './components/map/MyMap.tsx';

function App() {

    const sectionRefs = {
        home: useRef<HTMLDivElement>(null),
        team: useRef<HTMLDivElement>(null),
        gallery: useRef<HTMLDivElement>(null),
        video: useRef<HTMLDivElement>(null),
        social: useRef<HTMLDivElement>(null),
    };

    return (
        <div>
            <Header sectionRefs={sectionRefs}/>
            <About sectionRefs={sectionRefs}/>
            <Team sectionRefs={sectionRefs}/>
            <MyGallery sectionRefs={sectionRefs}/>
            <MyVideo sectionRefs={sectionRefs}/>
            {/*<MyMap/>*/}
        </div>
    )
}

export default App
