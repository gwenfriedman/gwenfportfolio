import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';

class Header extends React.Component {
    render() {
            return (
                <div>
                    <div className={'d-none d-sm-none d-md-block'}>
                    <h1 className={'header'}> Gwendolyn Friedman </h1>
                    <div className={'underline'}></div>
                    <div className={'menu'}>
                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block red'}></div>
                            </div>
                            <div>
                                <Link to={`/graphicart`}>
                                    <div className={'hover-button--on block-expand red'}>Posters</div>
                                </Link>
                            </div>
                        </div>

                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block pink'}></div>
                            </div>
                            <div>
                                <Link to={`/drawings`}>
                                    <div className={'hover-button--on block-expand pink'}>Digital Drawings</div>
                                </Link>
                            </div>
                        </div>

                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block yellow'}></div>
                            </div>
                            <div>
                                <Link to={`/branding`}>
                                    <div className={'hover-button--on block-expand yellow'}>Branding</div>
                                </Link>
                            </div>
                        </div>

                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block green'}></div>
                            </div>
                            <div>
                                <Link to={`/sewing`}>
                                    <div className={'hover-button--on block-expand green'}>Sewing</div>
                                </Link>
                            </div>
                        </div>

                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block light-blue'}></div>
                            </div>
                            <div>
                                <Link to={`/webdesign`}>
                                    <div className={'hover-button--on block-expand light-blue'}>Web Design</div>
                                </Link>
                            </div>
                        </div>

                        <div className='hover-button'>
                            <div>
                                <div className={'hover-button--off block dark-blue'}></div>
                            </div>
                            <div>
                                <Link to={`/embroidery`}>
                                    <div className={'hover-button--on block-expand dark-blue'}>Embroidery</div>
                                </Link>
                            </div>
                        </div>
                        <div className='hover-button'>


                            <div>
                                <div className={'hover-button--off block black'}></div>
                            </div>
                            <div>
                                <Link to={`/about`}>
                                    <div className={'hover-button--on block-expand black'}>About</div>
                                </Link>
                            </div>
                        </div>
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