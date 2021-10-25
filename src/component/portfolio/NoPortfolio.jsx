import FoundImg from "../../assets/img/notfound.png";
const NoPortfolio = () => {
  return (
    <div className="mt-5">
      <img className="not-found-img mx-auto d-block" src={FoundImg} />
      <h1 className="text-center">Currently You don't have any portfolio.</h1>
    </div>
  );
};
export default NoPortfolio;
