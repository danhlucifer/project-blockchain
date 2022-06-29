import React from 'react';
import { useState } from 'react';
import images from '../../constants/images';
import './TopBar.css';

function TopBar({title}) {
    const [popup, setPop] = useState(false);
    const handleClickOpen = () =>{
        setPop(!popup);
    }
    const handleClose = () => {
        setPop(false)
    }
    return (
        <>
            <div className='Topbar__header'>
                <div className='Topbar__head-logo'>
                    <img src={images.DynamicIcon} alt='dynamicicon' />
                </div>
                <p className='Topbar__header-title'>{title}</p>
                <div className='Topbar__list'>
                    <div className='Topbar__list-item_ethereum' onClick={handleClickOpen}>
                        <img src={images.Rectangle287} alt='rectangle' />
                        <p className='Topbar__list-item_ethereum-text'>
                            Ethereum
                        </p>
                    </div>
                    <div className='Topbar__list-item_notify'>
                        <img
                            className='img-bell'
                            src={images.NotificationsIcon}
                            alt='notify'
                        />
                        <img
                            className='img-alert'
                            src={images.Notificationalert}
                            alt='notifyalert'
                        />
                    </div>

                    <div className='dash' />
                    <div className='Topbar__list-item_avatar'>
                        <img src={images.ProfilePic} alt='profile' />
                    </div>
                </div>
                {/* Netword */}
                {popup ?
                <div className='network-model'>
                    <div className='network'>
                        <div className='network-header'>
                            <p>Network</p>
                            <div className='network-header_close' onClick={handleClose}>
                                <img src={images.CloseModal} alt="" />
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='network-list'>
                            <div className='network-list_item'>
                                <div className='network-list_item_content'>
                                    <img src={images.Rectangle287} alt="" />
                                    <p>Ethereum</p>
                                </div>
                                <button type='button' className='btn__current'>
                                    Current
                                </button>
                            </div>
                            <div className='line'></div>
                            <div className='network-list_item'>
                                <div className='network-list_item_content'>
                                    <img src={images.AVAXIcon} alt="" />
                                    <p>Avalanche</p>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='network-list_item'>
                                <div className='network-list_item_content'>
                                    <img src={images.Binance} alt="" />
                                    <p>Binance</p>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='network-list_item'>
                                <div className='network-list_item_content'>
                                    <img src={images.Polygon} alt="" />
                                    <p>Polygon</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>:""}
            </div>
        </>
    )
}

export default TopBar