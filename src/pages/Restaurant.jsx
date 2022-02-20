import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantProduct from '../components/Restaurant/RestaurantProduct'
import '../styles/Restaurant.scss'
const Restaurant = () => {
  const [pageInfo, setPageInfo] = useState()
  const [products, setProducts] = useState([])
  const { id } = useParams() 
  const getRestoranInfo = async () => { 
    axios.get(`https://trp-web.github.io/Delivery-Food/DeliveryFood/id-restoran/${id}.json`) 
      .then(res => {
        setPageInfo(res.data[0])
        setProducts(res.data[0].products)
      })
  }

  useEffect(() => {
    getRestoranInfo()
  }, [id])

  return (
    <div className="back-gorodun">
      <div className="container">
        {!!products.length && pageInfo && <>
          <div className="restaurant__inner">
            <h3 className="restaurant__name">{pageInfo.name}</h3>
            <div className="restaurant__reiting">
              <img src="/img/star.svg" alt="" />
              <span>{pageInfo.raiting}</span>
            </div>
            <div className="restaurant__prise">
              <span>От {pageInfo.prise} ₽</span>
            </div>
            <div className="restaurant__catigories">
              {pageInfo.prof}
            </div>
          </div>
          <div className="restaurant-product">
            {products.map(product => { 
              return (
                <RestaurantProduct product={product} key={product.id} />
              )
            })}
          </div>
        </>
        }
      </div>
    </div>

  )
}

export default Restaurant