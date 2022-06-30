import React, { useState } from 'react'
import TopBar from '../TopBar/TopBar'
import "./SwapContainer.css"
import images from '../../constants/images'

const SwapContainer = () => {
  const [chain, setChain] = useState(false);
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup)
  }
  const closePopup = () => {
    setPop(false);
  }

  const [popupModel, setPopModel] = useState(false);
  const handleClickOpenModel = () => {
    setPopModel(!popupModel)
  }
  const closePopupModel = () => {
    setPopModel(false);
  }
  return (
    <>
      <div className='SwapContainer'>
        <TopBar title="Swap" />

        <div className='Swap'>
          <div className='Swap-table'>
            <div className='Swap-top'>
              <button className='Same Chain' onClick={() => {
                setChain(() => ({
                  chain: false,
                }));
              }}>Same Chain</button>
              <button className='Cross Chain' onClick={() => {
                setChain(() => ({
                  chain: true,
                }));
              }}>Cross Chain</button>
            </div>
            <div className='Swap-tablemax'>
              {chain.chain === false ?
                <div className='Swap-chain'>
                  <div className='Swap-center'>
                    <div className='Swap-header'>
                      <div className='Name'>Swap</div>
                      <div className='iconn'>
                        <img src={images.Rectangle} />
                      </div>
                    </div>

                    <div className='choose'>

                      <div className='from ' onClick={handleClickOpen}>
                        <h5 onClick={handleClickOpen}>From</h5>
                        <img src={images.Rectangle231} />
                        <h5>Binance</h5>
                      </div>
                      <div className='down'>
                        <img src={images.Rectangle229} onClick={handleClickOpen} />
                      </div>

                    </div>
                    <div className='choose-ethereum'>

                      <div className='choose-ethereumleft'>
                        <div className='number'>0.00</div>
                        <div className='max'><h5>Max</h5></div>
                      </div>

                      <div className='choose-ethereumright'>
                        <img className='imgleft' src={images.Rectangle231} />
                        <h4>BUSD</h4>
                        <img className='imgright' src={images.Rectangle229} />
                      </div>

                    </div>
                    <div className='icon-center'>
                      <img src={images.Rectangle146} />
                    </div>
                    <div className='choose-min'>
                      <div className='from' >
                        <h5>To</h5>
                        <img src={images.AVAXIcon} />
                        <h5>Avalanche</h5>
                      </div>
                      <div className='down'>
                        <img src={images.Rectangle229} onClick={handleClickOpenModel} />
                      </div>
                    </div>
                    <div className='choose-ethereum'>

                      <div className='choose-ethereumleft'>
                        <div className='number'>0.00</div>

                      </div>

                      <div className='choose-ethereumright'>
                        <img className='imgleft' src={images.Rectangle231} />
                        <h4>BUSD</h4>
                        <img className='imgright' src={images.Rectangle229} />
                      </div>

                    </div>
                    <div className='click-transactionbutton'>
                      <h1>Begin Swap</h1>
                    </div>

                  </div>
                  <div className='Rectangle'>
                    <div className='sec-right'>
                      <h1> 45 sec </h1>
                      <br />
                      <p>Finality</p>
                    </div>
                    <div className='sec-left'>
                      <h1> 0.50% </h1>
                      <br />
                      <p>Fee</p>
                    </div>
                  </div>
                </div>


                :
                <div className='Cross-chain'>
                  <div className='Swap-centerbutton'>
                    <div className='Swap-header'>
                      <div className='Name'>Swap</div>
                      <div className='iconn'>
                        <img src={images.Rectangle} />
                      </div>
                    </div>

                    <div className='choose-ethereum'>

                      <div className='choose-ethereumleft'>
                        <div className='number'>0.00</div>
                        <div className='max'><h5>Max</h5></div>
                      </div>

                      <div className='choose-ethereumright'>
                        <img className='imgleft' src={images.Rectangle231} />
                        <h4>BUSD</h4>
                        <img className='imgright' src={images.Rectangle229} />
                      </div>

                    </div>
                    <div className='icon-center'>
                      <img src={images.Rectangle146} />
                    </div>
                    <div className='choose-ethereum-button'>

                      <div className='choose-ethereumleft'>
                        <div className='number'>0.00</div>

                      </div>

                      <div className='choose-ethereumright'>
                        <img className='imgleft' src={images.Rectangle231} />
                        <h4>BUSD</h4>
                        <img className='imgright' src={images.Rectangle229} />
                      </div>

                    </div>

                    <div className='click-transactionbutton'>
                      <h1>Begin Swap</h1>
                    </div>
                  </div>
                  <div className='Rectanglebotton'>
                    <div className='sec-right'>
                      <h1> 45 sec </h1>
                      <br />
                      <p>Finality</p>
                    </div>
                    <div className='sec-left'>
                      <h1> 0.50% </h1>
                      <br />
                      <p>Fee</p>
                    </div>
                  </div>
                </div>
              }



            </div>
          </div>
          {popup ?
            <div className='mainn'>
              <div className='Source'>
                <div className='table-Source'>
                  <div className='Sourcename'>Source</div>
                  <img src={images.CloseModal} onClick={closePopup} />
                </div>
                <div className='edge'></div>

                <div className='tabletwo-Source'>
                  <div className='Ethereum-Source'>
                    <img src={images.ETHIcon} />
                    <h1>Ethereum</h1>
                  </div>

                  <div className='edge'></div>

                  <div className='Ethereum-Source'>
                    <img src={images.AVAXIcon} />
                    <h1>Avalanche</h1>
                  </div>
                  <div className='edge'></div>

                  <div className='Ethereum-Source'>
                    <img src={images.Rectangle231} />
                    <h1>Binance</h1>
                    <div className='Current'><h1>Current</h1></div>
                  </div>
                  <div className='edge'></div>

                  <div className='Ethereum-Source'>
                    <img src={images.Polygon} />
                    <h1>Polygon</h1>
                  </div>
                </div>
              </div>

            </div> : ""}
          {popupModel ?
            <div className='mainn'>
              <div className='Source'>
                <div className='table-Source'>
                  <div className='Sourcename'>Source</div>
                  <img src={images.CloseModal} onClick={closePopupModel} />
                </div>
                <div className='edge'></div>

                <div className='tabletwo-Source'>
                  <div className='Ethereum-Source'>
                    <img src={images.ETHIcon} />
                    <h1>Ethereum</h1>
                    <div className='Current'><h1>Current</h1></div>
                  </div>

                  <div className='edge'></div>

                  <div className='Ethereum-Source'>
                    <img src={images.AVAXIcon} />
                    <h1>Avalanche</h1>
                  </div>
                  <div className='edge'></div>

                  <div className='Ethereum-Source'>
                    <img src={images.Rectangle231} />
                    <h1>Binance</h1>

                  </div>
                  <div className='edge'></div>

                  <div className='Ethereum-Source'>
                    <img src={images.Polygon} />
                    <h1>Polygon</h1>
                  </div>
                </div>
              </div>

            </div> : ""}
        </div>



      </div>


    </>
  )
}

export default SwapContainer