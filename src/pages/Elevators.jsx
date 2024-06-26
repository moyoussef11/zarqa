import { useTranslation } from "react-i18next";
import { FaArrowCircleDown, FaStar } from "react-icons/fa";
import elevtorTech from "../assets/140826053[1].jpg";
import elevator from "../assets/Elevators .jpg";
import cabinet1 from '../assets/cap1.jpeg';
import cabinet2 from '../assets/cap2.jpeg';
import cabinet3 from '../assets/cap3.jpeg';
import cabinet4 from '../assets/cap4.jpeg';
import modernized from "../assets/1654077684_LcUJvLrpes.jpg";
import Packages from "../components/package/Packages";
import Head from "../components/Head/Head";
const Elevators = () => {
  const [t] = useTranslation();
  return (
    <div className="p-1 md:p-5 bg-slate-100 relative">
      <h1 className="text-center mainBg w-fit p-2 text-white rounded mx-auto sm:text-5xl font-bold capitalize mb-5">
        {t("Welcome to UNITED ZARQA")}
      </h1>
      <div className="flex items-center flex-col sm:flex-row space-x-0 sm:space-x-5 space-y-3 sm:space-y-0">
        <div className="w-full sm:w-1/2 text-center mx-auto sm:text-start py-4">
          <h3 className="mainColor mx-auto sm:mx-0 font-bold text-2xl capitalize border-b-2 border-[#2B9DD9] w-fit mb-4">
            {t("Elevators Maintenance")}
          </h3>
          <p className="font-semibold sm:text-2xl py-4 text-gray-500">
            {t("At")}{" "}
            <span className="mainColor font-bold">{t("UNITED ZARQA")}</span>,
            {t("understand")}
          </p>
          <a
            href="#package"
            className="flex items-center altBg mx-auto sm:mx-0 hover:mainBg duration-150 p-2 rounded w-fit capitalize text-white group"
          >
            {t("show Packages")}{" "}
            <FaArrowCircleDown
              className="mainColor group-hover:altColor animate-bounce mx-2 duration-150"
              size={20}
            />
          </a>
        </div>
        <div className="w-full sm:w-1/2 ">
          <img src={elevator} className=" h-1/2 rounded" alt="elevator" />
        </div>
      </div>
      {/* elvetor */}
      <div id="package" className="infoAll py-5">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-stretch">
          <Packages
            name={t("Home Package")}
            serve1={t("PPM")}
            serve2={t("Free light bulbs replacement")}
            serve3={t("Oil and grease free")}
            serve4={t("Emergency 24/7 service")}
            serve5={t("Repairing faults during official working hours")}
            price={t("price1")}
          />
          <Packages
            name={t("Business Package")}
            star={<FaStar className="text-yellow-300" />}
            serve1={t("PPMP")}
            serve2={t("Free light bulbs replacement")}
            serve3={t("Oil and grease free")}
            serve4={t("Emergency 24/7 service")}
            serve5={t("Free door shoes")}
            serve6={t("Repairing faults during official working hours")}
            serve7={t("5% discount on spare parts")}
            price={t("price2")}
          />
          <Packages
            name={t("Hotels and Restaurants Package Only 3500 riyals")}
            star={<FaStar className="text-yellow-300" />}
            star2={<FaStar className="text-yellow-300" />}
            serve1={t("PPMP")}
            serve2={t("Free light bulbs replacement")}
            serve3={t("Oil and grease free")}
            serve4={t("Emergency 24/7 service")}
            serve5={t("Free door shoes")}
            serve6={t("10% discount on spare parts")}
            serve7={t("Immediate fault repair")}
            price={t("price3")}
          />
        </div>
        <div className=" text-center font-semibold capitalize">
          <p>{t("Choose")}</p>
        </div>
        <div className="pt-10 flex flex-col items-center space-y-3">
          <img src={elevtorTech} className="w-1/2 rounded" alt="luxurious" />
          <p>{t("luxurious")}</p>
        </div>
        <div className="flex items-center flex-col sm:flex-row space-x-0 sm:space-x-4 my-2">
          <Head title={t("Elevators Installation")} info={t("Installation")} />
          <div className="w-full sm:w-1/2 text-center">
            <div className="grid grid-cols-2 gap-2">
              <img src={cabinet1} className="w-full h-[400px] sm:w-64" alt="4cabinet" />
              <img src={cabinet3} className="w-full h-[400px] sm:w-64" alt="4cabinet" />
              <img src={cabinet4} className="w-full h-[400px] sm:w-64" alt="4cabinet" />
              <img src={cabinet2} className="w-full h-[400px] sm:w-64" alt="4cabinet" />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row space-x-0 sm:space-x-4 my-2 py-10">
          <Head
            title={t("Elevators Modernization")}
            info={t("Modernization")}
          />
          <div className="w-full sm:w-1/2 text-center">
            <img src={modernized} className="rounded" alt="modernized" />
            <p className="text-sm">{t("modernized")}</p>
          </div>
        </div>
      </div>
      <div className="mainBg text-white rounded font-semibold p-2">
        <p>{t("solutions")}</p>
      </div>
    </div>
  );
};

export default Elevators;
