import React, { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import people from "./data"

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const prevCard = () => {
    setIndex(prev => index ? prev - 1 : people.length - 1)
  }
  const nextCard = () => {
    setIndex(prev => prev === people.length - 1 ? 0 : prev + 1)
  }
  const randCard = () => {
    setIndex(Math.floor(Math.random() * (people.length - 1 - 0) + 0))
  }


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />{" "}
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevCard} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextCard} className="next-btn">
          <FaChevronRight />
        </button>
      </div>

      <button onClick={randCard} className="random-btn">Suprise me</button>
    </article>
  )
}
export default Review
