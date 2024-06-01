import { useTranslation } from "react-i18next";
import ServicesMep from "../Services/ServicesMep";
import hvac from "../../assets/HVAC.png";
import mech from "../../assets/Mechanical.png";
import ElectricalDesign from "../../assets/electrical-installation-design-residential-buildings-.jpg";
import Light from "../../assets/electrical.png";
import power from "../../assets/power.png";
import volt from "../../assets/volt.jpg";
import plumb from "../../assets/plumb.png";
import auto from "../../assets/Impact_Sprinkler_Mechanism_2.jpg";
const Mechanical = () => {
  const [t] = useTranslation();
  return (
    <div id="Mechanical">
      <h3 className="mainColor mx-auto sm:mx-0 font-bold text-2xl capitalize border-b-2 border-[#2B9DD9] w-fit mb-4">
        {t("Mechanical Services")}
      </h3>
      <ServicesMep
        title={t("HVAC")}
        info={t("HVACInfo")}
        textImg={t("ductwork")}
        img={hvac}
      />{" "}
      <ServicesMep
        title={t("Fire Fighting Systems")}
        info={t("firefighting")}
        textImg={t("sprinkler")}
        img={mech}
      />
      <div id="Electrical">
        <h3 className="mainColor mx-auto sm:mx-0 font-bold text-2xl capitalize border-b-2 border-[#2B9DD9] w-fit mb-4">
          {t("Electrical Services")}
        </h3>
        <ServicesMep
          title={t("Electrical Design and Installation")}
          info={t("electrical")}
          textImg={t("Electricians")}
          img={ElectricalDesign}
        />
        <ServicesMep
          title={t("Lighting Systems")}
          info={t("Lighting")}
          textImg={t("LED")}
          img={Light}
        />
        <ServicesMep
          title={t("Power Distribution Systems")}
          info={t("Power")}
          textImg={t("power distribution")}
          img={power}
        />{" "}
        <ServicesMep
          title={t("Low Voltage and Extra Low Voltage Systems")}
          info={t("cabling")}
          textImg={t("IT")}
          img={volt}
        />
      </div>
      <div id="Plumbing">
        <h3 className="mainColor mx-auto sm:mx-0 font-bold text-2xl capitalize border-b-2 border-[#2B9DD9] w-fit mb-4">
          {t("Plumbing Services")}
        </h3>
        <ServicesMep
          title={t("Drainage and Sewage Systems")}
          info={t("Sewage")}
          textImg={t("Plumbers")}
          img={plumb}
        />{" "}
        <ServicesMep
          title={t("Irrigation Systems")}
          info={t("irrigation")}
          textImg={t("Automated")}
          img={auto}
        />
      </div>
    </div>
  );
};

export default Mechanical;
