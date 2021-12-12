import "./CreationItem.css";

const CreationItem = (props) => {
  return (
    <div className="creation__item">
      <div className="image-wrapper">
        <img src={props.image} alt={props.alt} />
      </div>
      <h3 className="creation__item--text">{props.text}</h3>
    </div>
  );
};

export default CreationItem;
