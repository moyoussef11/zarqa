import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Packages = ({
  name,
  serve1,
  serve2,
  serve3,
  serve4,
  serve5,
  serve6,
  serve7,
  star,
  star2,
  price,
}) => {
  const [t] = useTranslation();
  return (
    <div className="packages hover:-translate-y-5 duration-200 m-5 pb-6 px-1 md:h-[500px] shadow shadow-black  bg-white text-center justify-between py-2 flex flex-col items-center rounded  mainColor">
      <h2 className="font-bold capitalize text-black">{name}</h2>
      <div className="flex mt-3">
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        {star}
        {star2}
      </div>
      <span className="font-bold capitalize text-4xl altColor">{price}</span>
      <ul className="list">
        <li className="border-b p-[10px]">{serve1}</li>
        <li className="border-b p-[10px]">{serve2}</li>{" "}
        <li className="border-b p-[10px]">{serve3}</li>{" "}
        <li className="border-b p-[10px]">{serve4}</li>{" "}
        <li className="border-b p-[10px]">{serve5}</li>{" "}
        <li className="border-b p-[10px]">{serve6}</li>{" "}
        <li className=" p-[10px]">{serve7}</li>{" "}
      </ul>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B966570122102&text&type=phone_number&app_absent=0"
        target="_blank"
        className="mt-4 capitalize font-semibold flex items-center mainBg p-2 rounded hover:scale-125 text-white duration-300"
      >
        {t("order Now")}
        <FaWhatsapp className="mx-1 " />
      </a>
    </div>
  );
};

export default Packages;
