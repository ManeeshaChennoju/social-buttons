const Button = (props) => {
  const { name, color } = props;
  return <button className={color}> {name} </button>;
};

const element = (
  <div className="bg_container">
    <h1 className="Heading">Social Buttons </h1>
    <div className="btn_container">
      <Button name="Like" color="like_btn" />
      <Button name="Comment" color="Comment_btn" />
      <Button name="Share" color="Share_btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
