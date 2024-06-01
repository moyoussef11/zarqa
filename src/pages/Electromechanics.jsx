import { useTranslation } from "react-i18next";
import Mechanical from "../components/Mechanical/Mechanical";

const Electromechanics = () => {
  const [t] = useTranslation();
  return (
    <div className="p-5 bg-slate-100">
      <h3 className="text-center mainBg w-fit p-2 text-white rounded mx-auto sm:text-5xl font-bold capitalize mb-5">
        {t("MEP Services")}
      </h3>
      <div className="flex items-center justify-center space-x-5 border-2 w-fit mx-auto p-2">
        <a className="mainColor hover:altColor mx-1" href="#Mechanical">
          {t("Mechanical Services")}
        </a>
        <a className="mainColor hover:altColor mx-1" href="#Electrical">
          {t("Electrical Services")}
        </a>
        <a className="mainColor hover:altColor mx-1" href="#Plumbing">
          {t("Plumbing Services")}
        </a>
      </div>
      <Mechanical />
    </div>
  );
};

export default Electromechanics;
