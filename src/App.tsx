import {Header} from './components/header/Header.tsx';
import {About} from './components/about/About.tsx';
import {Team} from './components/team/Team.tsx';
import {MyGallery} from './components/gallery/MyGallery.tsx';
import {MyVideo} from './components/video/MyVideo.tsx';
// import MyMap from './components/map/MyMap.tsx';

function App() {

    return (
        <div>
            <Header/>
            <About/>
            <Team/>
            <MyGallery/>
            <MyVideo/>
            {/*<MyMap/>*/}
        </div>
    )
}

export default App
