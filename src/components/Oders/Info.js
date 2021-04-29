import React, {useState, useEffect} from 'react'
import {orders} from '../../constants/mock.json'
import StopInfo from './StopInfo';
import {isMobile} from 'react-device-detect';
import Carousel from 'react-elastic-carousel'


function OrderInfo({ partnerId }) {
  let [currentOrder, setCurrentOrder] = useState(orders.find(o => o.partnerId == partnerId))
  useEffect(() => {
    setCurrentOrder(orders.find(o => o.partnerId == partnerId));
  }, [partnerId])
  return (
    <>
    {isMobile ?
      <Carousel itemsToShow={1} pagination={false}>
        {currentOrder.stops.map((stop, i) => {
          return(
            <StopInfo stop={stop} index={i} />
          )
        })}
      </Carousel>
    :
      <div className="d-flex flex-row p-0 flex-wrap stops-list">
        {currentOrder.stops.map((stop, i) => {
          return(
            <StopInfo stop={stop} index={i} />
          )
        })}
      </div>
  }

    </>
    
  )
}

export default OrderInfo;

