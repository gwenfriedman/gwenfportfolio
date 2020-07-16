import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';

class MobileMenu extends React.Component {

    render() {
        return (
            <div>
                {/*todo: fix this, should link to whatever was open before*/}
                <Link to={`/graphicart`}>
                    <div className={'close-btn'}>X</div>
                </Link>
                                <Link to={`/graphicart`}>
                                    <div className={'block-expand red menu-mobile-center'}>Posters</div>
                                </Link>

                                <Link to={`/drawings`}>
                                    <div className={'block-expand pink menu-mobile-center'}>Digital Drawings</div>
                                </Link>

                                <Link to={`/branding`}>
                                    <div className={'block-expand yellow menu-mobile-center'}>Branding</div>
                                </Link>

                                <Link to={`/sewing`}>
                                    <div className={'block-expand green menu-mobile-center'}>Sewing</div>
                                </Link>

                                <Link to={`/webdesign`}>
                                    <div className={'block-expand light-blue menu-mobile-center'}>Web Design</div>
                                </Link>

                                <Link to={`/embroidery`}>
                                    <div className={'block-expand dark-blue menu-mobile-center'}>Embroidery</div>
                                </Link>

                                <Link to={`/about`}>
                                    <div className={'block-expand black menu-mobile-center'}>About</div>
                                </Link>
            </div>

        )
    }
}

export default MobileMenu;