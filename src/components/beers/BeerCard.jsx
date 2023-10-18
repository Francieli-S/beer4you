export default function BeerCard({ name, image }) {

  return (
    <>
      <div>
        <h3>{name}</h3>
        <div>
          <img className='beers-img' src={image} />
        </div>
      </div>
    </>
  );
}
