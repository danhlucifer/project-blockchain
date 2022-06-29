import React from 'react'
import images from '../../constants/images'
import TopBar from '../TopBar/TopBar';
import './VaultsContainer.css'

function VaultsContainer() {
  return (
    <>
        <div className='VaultsContainer'>
            <TopBar title="Vaults"/>
            <div className='Vaults'>
                <div className='Vaults-header'>
                    <div className='Vaults-header-left'>
                        <p>Stable</p>
                        <span>Sort by APY</span>
                    </div>
                    <div className='Vaults-header-right'>
                        <div className='Vaults-header-right_lend'>
                            <p>Lend</p>
                        </div>
                        <div className='Vaults-header-right_Borrow'>
                            <p>Borrow</p>
                        </div>
                    </div>
                </div>

                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                </div>
                <div className='Vaults-header'>
                    <div className='Vaults-header-left'>
                        <p>Native</p>
                        <span>Sort by APY</span>
                    </div>
                </div>
                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                </div>
                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>7.42%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VaultsContainer