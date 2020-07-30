import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';

class MobileMenu extends React.Component {

    render() {
        return (
            <div>
                <Link to={`/${this.props.match.params.page}`}>
                    <div className={'close-btn'}>X</div>
                </Link>
                <Link to={`/posters`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand red menu-mobile-center'}>Posters</div>
                </Link>

                <Link to={`/drawings`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand pink menu-mobile-center'}>Digital Drawings</div>
                </Link>

                <Link to={`/branding`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand yellow menu-mobile-center'}>Branding</div>
                </Link>

                <Link to={`/sewing`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand green menu-mobile-center'}>Sewing</div>
                </Link>

                <Link to={`/webdesign`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand light-blue menu-mobile-center'}>Web Design</div>
                </Link>

                <Link to={`/embroidery`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand dark-blue menu-mobile-center'}>Embroidery</div>
                </Link>

                <Link to={`/misc`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand purple menu-mobile-center'}>Misc.</div>
                </Link>

                <Link to={`/about`} style={{ textDecoration: 'none' }}>
                    <div className={'block-expand black menu-mobile-center'}>About</div>
                </Link>
            </div>

        )
    }
}

export default MobileMenu;