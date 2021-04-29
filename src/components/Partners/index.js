import React, { useState, useEffect } from 'react'
import { partners } from '../../constants/mock.json';
import { useParams, Link, useHistory } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import {statusMap} from '../../constants/statusMap';


function ListPartners () {
  const baseClass = ["list-group-item", "border-bottom", "border-right", "partner-list"];
  const activeClass = [...baseClass, "active-partner-item"];
  const [activeId, setactiveId] = useState('');
  const { id } = useParams();
  const history = useHistory();
  
    useEffect(() => {
      if(!isMobile){
        const [firstpartner] = partners;
        let currentId = id ? id : firstpartner.id;
        setactiveId(currentId);
        history.push(`/partners/${currentId}`)
      }
    }, [])

  return (
    <div className="list-group list-group-flush">
      {partners.map((partner, i) => {
        return (
          <div key={partner.id} className={activeId == partner.id ? activeClass.join(' ') : baseClass.join(' ')}>
            <Link to={`/partners/${partner.id}`} onClick={() => setactiveId(partner.id)}>
              <p className="mb-half"><strong className="strong-light">{partner.name}</strong></p>
              <p className="mb-half"><small className="v-small">{partner.id} | {partner.phone}</small></p>
              <p className="mb-half v-small">
                <span className={`status-round rounded-circle px-1 me-2 bg-${statusMap[partner.status]}`}></span>
              <strong className="strong-light"><span className="text-uppercase">{statusMap[partner.status]}</span> {partner.currentOrderId}</strong>
              </p>
              <span className="show-details rounded-circle bg-show-details px-1 v-small">{'>'}</span>
              </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ListPartners;