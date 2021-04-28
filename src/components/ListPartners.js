import React, { useState, useEffect } from 'react'
import { partners } from '../mock.json';
import { useParams } from 'react-router-dom';

console.log(partners);

const statusMap = {
  0: 'inactive',
  1: 'active',
  2: 'visit',
  3: 'idle'
}

function ListPartners () {
  const [classes, setClasses] = useState(["list-group-item", "border-bottom", "border-right", "partner-list"]);
  let { id } = useParams();
  useEffect => (() => {

  }, [])

  return (
    <div className="list-group list-group-flush">
      {partners.map((partner, i) => {
        return (
          <div key={partner.id} className={classes.join(' ')}>
            <Link to={`/partners/${partner.id}`}>
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