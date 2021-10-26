import FoundImg from "../../assets/img/notfound.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const NoPortfolio = () => {
  const { layoutClickChanger } = useLayoutChangerProvider();

  return (
    <div className="my-5">
      <img className="not-found-img mx-auto mt-100  d-block" src={FoundImg} />
      <h2 className="text-center">
        {layoutClickChanger ? "." : ""}
        Currently You don't have any portfolio{layoutClickChanger ? "" : "."}
      </h2>
    </div>
  );
};
export default NoPortfolio;
