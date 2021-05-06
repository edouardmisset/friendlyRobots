import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(({ id, email, name }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
