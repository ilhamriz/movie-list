import './Card.css'

function Card({data, constant}) {
  return (
    <div className={constant ? 'card-container constant' : 'card-container'}>
      <div className="card">
        <img src={data.Poster} alt="" />
        <div className="card__details">
          <p className='card__title'>{data.Title}</p>
          <p className='card__subtitle'>{data.Type}, {data.Year}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
