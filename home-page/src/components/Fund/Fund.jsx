import React,{useState} from 'react';
import './Fund.css';
import images from '../../constants/images';

function Fund() {
    const [popup, setPop] = useState(false);
    const handleClickOpen = () => {
        setPop(!popup);
    }
    const handleClose = () => {
        setPop(false)
    }
    return (
        <div>
            <div className="fund">
                <p className="fund__title">Funding</p>

                <div className="fund__chasebank">
                    <div className="fund__chasebank-check">
                        <img src={images.ChaseBankIcon} alt="chasebank" />
                        <div className="fund__chasebank-check_text">
                            <p className="fund__chasebank-check_text-title">Chase Bank 0245</p>
                            <p className="fund__chasebank-check_text-desc">Checking account</p>
                        </div>
                    </div>

                    <div className="fund__chasebank-btn" onClick={handleClickOpen}>Change</div>
                </div>

                <div className="fund__input-first">
                    <p>0.00</p>
                    <div className="fund__input-btn">$200</div>
                    <div className="fund__input-btn">$500</div>
                    <div className="fund__input-btn">$1,000</div>
                    <img src={images.Switch} alt="switch" />
                </div>

                <div className="fund__input-second">
                    <p>0.00</p>
                    <div className="fund__input-btn">
                        <img src={images.USDCIcon} alt="USDCIcon" />
                        <p>USDC</p>
                        <img src={images.DropdownIcon} alt="DropdownIcon" />
                    </div>
                </div>

                <button type="button" className="btn-fund btn__fund-acc">
                    Fund Account
                </button>

                <button type="button" className="btn-fund btn__fund-withdraw">
                    Withdraw Funds
                </button>
            </div>
            {popup ?
                    <div className='Funding-model'>
                        <div className='Funding-Source'>
                            <div className='Funding-Source-top'>
                                <h3 className='Funding-Source-top_header'>
                                    Funding Source
                                </h3>
                                <div className='Funding-Source-top_close' onClick={handleClose}>
                                    <img src={images.CloseModal} alt="" />
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='Funding-Source-bot'>
                                <div className='Funding-Source-bot_title'>
                                    <div className='Funding-Source-bot_title-title2'>
                                        <p>
                                            Bank account
                                        </p>
                                        <span>Connect new</span>
                                    </div>
                                    <button className='Funding-Source-bot_title-box'>
                                        Current
                                    </button>
                                </div>
                                <div className='line'></div>
                                <div className='Funding-Source-bot_title'>
                                    <div className='Funding-Source-bot_title-title2'>
                                        <p>
                                            Debit / Credit
                                        </p>
                                        <span>Add card</span>

                                    </div>
                                </div>
                                <div className='line'></div>
                                <div className='Funding-Source-bot_title'>
                                    <div className='Funding-Source-bot_title-title2'>
                                        <p>
                                            Wire transfer
                                        </p>
                                        <span>More info</span>

                                    </div>
                                </div>
                                <div className='line'></div>
                                <div className='Funding-Source-bot_title'>
                                    <div className='Funding-Source-bot_title-title2'>
                                        <p>
                                            Crypto
                                        </p>
                                        <span>0x23..4935</span>

                                        <div className='Funding-Source-bot_title-copy'>
                                            <img src={images.Rectangle258} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""}
        </div>
    )
}

export default Fund