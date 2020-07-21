import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
            return (
                <div>
                    <div className={'d-none d-sm-none d-md-block'}>
                    <h1 className={'header'}> Gwendolyn Friedman </h1>
                    <div className={'underline'}></div>
                    <div className={'menu'}>
                        {this.props.open === 'posters' && (
                                <Link to={`/graphicart`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand red'}>Posters</div>
                                </Link>
                        )}
                        {this.props.open !== 'posters' && (
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block red'}></div>
                            </div>
                            <div>
                                <Link to={`/graphicart`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand red'}>Posters</div>
                                </Link>
                            </div>
                        </div>
                        )}

                        {this.props.open === 'drawings' && (
                            <Link to={`/drawings`} style={{ textDecoration: 'none' }}>
                                <div className={'hover-button--on block-expand pink'}>Digital Drawings</div>
                            </Link>
                        )}

                        {this.props.open !== 'drawings' && (
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block pink'}></div>
                            </div>
                            <div>
                                <Link to={`/drawings`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand pink'}>Digital Drawings</div>
                                </Link>
                            </div>
                        </div>
                        )}

                        {this.props.open === 'branding' && (
                            <Link to={`/branding`} style={{ textDecoration: 'none' }}>
                                <div className={'hover-button--on block-expand yellow'}>Branding</div>
                            </Link>
                        )}
                        {this.props.open !== 'branding' && (
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block yellow'}></div>
                            </div>
                            <div>
                                <Link to={`/branding`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand yellow'}>Branding</div>
                                </Link>
                            </div>
                        </div>
                        )}


                        {this.props.open === 'sewing' && (
                            <Link to={`/sewing`} style={{ textDecoration: 'none' }}>
                                <div className={'hover-button--on block-expand green'}>Sewing</div>
                            </Link>
                        )}
                        {this.props.open !== 'sewing' && (
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block green'}></div>
                            </div>
                            <div>
                                <Link to={`/sewing`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand green'}>Sewing</div>
                                </Link>
                            </div>
                        </div>
                        )}

                        {this.props.open === 'web' && (
                            <Link to={`/webdesign`} style={{ textDecoration: 'none' }}>
                                <div className={'hover-button--on block-expand light-blue'}>Web Design</div>
                            </Link>
                        )}
                        {this.props.open !== 'web' && (
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block light-blue'}></div>
                            </div>
                            <div>
                                <Link to={`/webdesign`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand light-blue'}>Web Design</div>
                                </Link>
                            </div>
                        </div>
                        )}

                        {this.props.open === 'embroidery' && (
                            <Link to={`/embroidery`} style={{ textDecoration: 'none' }}>
                                <div className={'hover-button--on block-expand dark-blue'}>Embroidery</div>
                            </Link>
                        )}
                        {this.props.open !== 'embroidery' && (
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block dark-blue'}></div>
                            </div>
                            <div>
                                <Link to={`/embroidery`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand dark-blue'}>Embroidery</div>
                                </Link>
                            </div>
                        </div>
                        )}

                        {this.props.open === 'about' && (
                            <Link to={`/about`} style={{ textDecoration: 'none' }}>
                                <div className={'hover-button--on block-expand black'}>About</div>
                            </Link>
                        )}

                        {this.props.open !== 'about' && (
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block black'}></div>
                            </div>
                            <div>
                                <Link to={`/about`} style={{ textDecoration: 'none' }}>
                                    <div className={'hover-button--on block-expand black'}>About</div>
                                </Link>
                            </div>
                        </div>
                        )}
                    </div>
                    </div>
                <div className={'d-sm-block d-md-none'}>
                    <h1 className={'mobile-head'}> Gwendolyn Friedman </h1>
                    <div className={'underline-mobile'}></div>

                    <Link to={`/mobilemenu`}>
                <div className={'menu mobile-menu'}>
                    <div>
                        <div className={'hamburger red'}></div>
                    </div>
                    <div>
                        <div className={'hamburger pink'}></div>
                    </div>
                    <div>
                        <div className={'hamburger light-blue'}></div>
                    </div>
                </div>
                    </Link>
                </div>
                </div>
            )
    }
}

export default Header;