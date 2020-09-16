import React from 'react';
import './Privacy.css'
import one from './images/1.PNG'
import two from './images/2.PNG'
import three from './images/3.PNG'
import four from './images/4.PNG'
import five from './images/5.png'
import six from './images/6.png'

class AppSupport extends React.Component {
    render() { return(
        <div>
            <div className={'p-header'}>
                <h1 className={'p-title'}>Howlerr Support</h1>
            </div>

            <div className={'step'}>
                <h5 className={'support-text'}> Enter your dog's name</h5>
                <img src={one} className={'images'}/>
            </div>

            <div className={'step'}>
                <h5 className={'support-text'}> Select if your dog is male or female</h5>
                <img src={two} className={'images'}/>
            </div>

            <div className={'step'}>
                <h5 className={'support-text'}> Answer questions about your dog</h5>
                <img src={three} className={'images'}/>
            </div>

            <div className={'step'}>
                <h5 className={'support-text'}> Press play button to play song, press camera button
                to record a video of your dog with the song playing, or press start over to make a new song.</h5>
                <img src={four} className={'images'}/>
            </div>

            <div className={'step'}>
                <h5 className={'support-text'}> Press and hold the round button to record a video.</h5>
                <img src={five} className={'images'}/>
            </div>

            <div className={'step'}>
                <h5 className={'support-text'}> Press the X to record another video. Press the save button to save to camera roll.</h5>
                <img src={six} className={'images'}/>
            </div>
        </div>
    )
    }
}
export default AppSupport;