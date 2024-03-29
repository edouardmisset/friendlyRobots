const Card = ({ name, email, id }) => (
  <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='robot' src={`https://robohash.org/${id}?400x400`} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
