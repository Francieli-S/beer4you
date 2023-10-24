export default function BeerCard({
  name,
  image,
  subtitle,
  firstBrewed,
  description,
  alcoholLevel,
  brewersTips,
  brewmaster,
  today,
}) {
  return (
    <>
      <div>
        <div>
          <img className="beers-img" src={image} />
        </div>
        <h3>{name}</h3>
        <h4>{subtitle}</h4>
        <p>{firstBrewed}</p>
        <p>{description}</p>
        <p>{alcoholLevel}</p>
        <p>{brewersTips}</p>
        <p>{brewmaster}</p>
        <p>{today}</p>
      </div>
    </>
  );
}
