const UserBreks = (props) => {
  return (
    <>
      <div className="user_breks_row">
        <div className="row m-0">
          <div className="col-3">{props.icon}</div>
          <div className="col-6">
            <p>{props.title}</p>
          </div>
          <div className="col-3">
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserBreks;
