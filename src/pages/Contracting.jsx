import { useTranslation } from "react-i18next";
import landscaped from "../assets/landscaped.jpg";
import warehouse from "../assets/warehouse.jpg";
import historic from "../assets/historic.jpg";
import glass from "../assets/glass.jpg";
import ContractServices from "../components/Services/ContractServices";
const Contracting = () => {
  const [t] = useTranslation();
  return (
    <div className="p-5">
      <h3 className="text-center mainBg w-fit p-2 text-white rounded mx-auto sm:text-5xl font-bold capitalize mb-5">
        {t("Your Trusted Contracting Partner")}
      </h3>
      <ContractServices
        path={landscaped}
        title={t("Residential Buildings")}
        infoImg={t("landscaped")}
        info={t("exceed")}
        ulHead={t("residential")}
        li1={t("Custom")}
        li2={t("Custom home construction")}
        li3={t("Renovations")}
        li4={t("Apartment")}
      />
      <ContractServices
        path={glass}
        title={t("Commercial Buildings")}
        infoImg={t(
          "A modern office building with glass facades and a busy street in front"
        )}
        info={t("commercial")}
        ulHead={t("Our commercial services include")}
        li1={t("Office buildings")}
        li2={t("Retail spaces")}
        li3={t("Restaurants and cafes")}
        li4={t("Healthcare facilities")}
      />
      <ContractServices
        path={warehouse}
        title={t("Industrial Buildings")}
        infoImg={t("A large warehouse facility with loading docks and trucks")}
        info={t("comprehensive")}
        ulHead={t("Our industrial services include")}
        li1={t("Warehouses")}
        li2={t("Manufacturing plants")}
        li3={t("Distribution centers")}
        li4={t("Storage facilities")}
      />
      <ContractServices
        path={historic}
        title={t("Restoration of Buildings")}
        infoImg={t("building")}
        info={t("preserve")}
        ulHead={t("Our restoration services include")}
        li1={t("Historical building restoration")}
        li2={t("Structural repairs and reinforcements")}
        li3={t("Facade restoration")}
        li4={t("Interior and exterior refurbishments")}
      />
    </div>
  );
};

export default Contracting;
