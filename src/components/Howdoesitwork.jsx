import React from 'react'
import Mobil1 from '../assets/Desktop bilder/mobil1.svg'
import Mobil2 from '../assets/Desktop bilder/mobil2.svg'
import Mobil3 from '../assets/Desktop bilder/mobil3.svg'


const Howdoesitwork = () => {
  return (
    <section className="how-it-works">
    <div className="container">

      <h1>How Does It Work?</h1>
      
      <div className="phone-images">
          <img src={Mobil1} />
          <img src={Mobil2} />
          <img src={Mobil3} />
      </div>

      <div className="transaction-info">
          <h4>Latest transaction history</h4>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
      </div>

    </div>
  </section>
  )
}

export default Howdoesitwork