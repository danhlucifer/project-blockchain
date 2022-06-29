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
                            <button className='lend'>Lend</button>
                            <button className='borrow'>Borrow</button>

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
                            <img src={images.USDTIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDT</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>9.58%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.BUSDIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>BUSD</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>3.77%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                </div>
                <div className='Vaults-header Vaults-native'>
                    <div className='Vaults-header-left'>
                        <p>Native</p>
                        <span>Sort by APY</span>
                    </div>
                </div>
                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.BTCIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>BTC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>3.64%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.ETHIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>ETH</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>4.82%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.BNBIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>BNB</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>5.19%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                </div>
                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.XRPIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>XRP</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>4.12%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.DOTIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>DOT</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>3.98%</h2>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>                      
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.MATICIcon} alt="" className='img-big'/>
                            <img src={images.DynamicIcons} alt="" className='img-small'/>
                        </div>
                        <div className='Vaults-list-item_title'>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>MATIC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p>APY</p>
                                <h2>2.63%</h2>
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