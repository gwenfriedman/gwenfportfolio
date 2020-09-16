import React from 'react';
import './Privacy.css'
import kal from './images/kal.png'

class PrivacyPolicy extends React.Component {
    render() { return(
        <div>
            <div className={'p-header'}>
                <h1 className={'p-title'}>Howlerr Privacy Policy</h1>
            </div>

            <h5 className={'txt'}>
                We don't store any of your data.
                Camera, microphone, and camera roll access will be requested in order to take a video of your dog and save it your device.
            </h5>

            <img src={kal} className={'kal d-none d-sm-none d-md-block'}/>
            <img src={kal} className={'kal2 kal d-block d-md-none d-lg-none'}/>
        </div>
    )
    }
}
export default PrivacyPolicy;