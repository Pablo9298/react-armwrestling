import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {Container} from '../../common/container/Container.tsx';
import styles from './map.module.scss'

const containerStyle = {
    width: '50%',
    height: '600px'
}

const center = {
    lat: 58.37873458862305,
    lng: 24.52432632446289,
}


const position = {
    lat: 58.37873458862305,
    lng: 24.52432632446289,
};

const MyMap = () => {
    return (
        <div className={styles.map}>
            <Container>
                <LoadScript googleMapsApiKey={'AIzaSyAgaf2TIqu4cxDzSWfItBfcPbxHS1IOSVw'}>
                    <GoogleMap mapContainerStyle={containerStyle}
                               center={center}
                               zoom={14}
                    >
                        <Marker position={position}  title="My location" />
                    </GoogleMap>
                </LoadScript>
            </Container>
        </div>

    );
};

export default MyMap;