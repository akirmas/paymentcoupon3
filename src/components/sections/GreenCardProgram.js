import React from 'react'
import Product from '../blocks/Product'
import Image from '../shared/Image'

const GreenCardProgram = ({
  chance: { title, message, img },
  saveProducts,
  changeSelectedProduct,
}) => {
  return (
    <div className="program">
      <div className="program__header">
        <h2 className="program__title-header">
          The Official Green Card Program
        </h2>
        <h3 className="program__title-header program__title-header--italic">
          Come Live and Work In the US
        </h3>
      </div>

      <div className="program__container">
        <div className="program__chance">
          <div className="program__chance-box">
            <h3 className="program__chance-title">{title}</h3>
            <p className="program__chance-message">{message}</p>
          </div>
        </div>
        <div className="program__chance-img-container">
          <Image {...img} className="program__chance-img" />
        </div>
        <div className="program__products">
          {saveProducts &&
            saveProducts.map((props, i) => (
              <Product
                key={props.title}
                {...props}
                index={i}
                changeSelectedProduct={changeSelectedProduct}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default GreenCardProgram
