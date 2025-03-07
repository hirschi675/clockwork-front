function ButtonDetails(props:any) {
  const projects = 2;
  return (
    <div className="details-button-wrapper">
      <div className="details-button-info">
          <h3 className="details-button-title">Details</h3>
          <span>Projects <span>{projects}</span></span>
      </div>
    </div>
);
}

export default ButtonDetails;