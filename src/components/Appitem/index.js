import "./index.css";
const Appitem = (props) => {
  const { appDetails } = props;
  const { appName, imageUrl } = appDetails;

  return (
    <li className="app-item">
      <img className="app-image" alt={appName} src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  );
};

export default Appitem;
