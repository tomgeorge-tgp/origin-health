import "./imageCard.css";

function CompetetionCard(props) {
  return (
    <>
      <div className="competetion__type__card">
        <div className="image__container">
          <img className="image__competetion" src={props.image} alt="comp-logo" />
        </div>
        <p className="title">{props.name}</p>
      </div>
    </>
  );
}
export default CompetetionCard;
