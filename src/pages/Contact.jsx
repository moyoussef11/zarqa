import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="p-5">
      <h4 className=" text-4xl mainColor font-bold text-center capitalize my-4">
        contact us
      </h4>
      <div className="flex items-center justify-center space-x-7 capitalize font-semibold">
        <a href="#oman">oman</a>
        <a href="#Saudi Arabia">Saudi Arabia</a>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row items-center justify-center space-x-0 sm:space-x-5">
        <div
          id="oman"
          className="mainBg w-fit text-white px-4 py-2 capitalize mt-10 rounded"
        >
          <h4 className="mb-3">oman</h4>
          <ul className="text-sm flex flex-col space-y-3">
            <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
              <CiLocationOn />
              <a target="_blank" className="px-1" href="">
                Shinas 324 Northern Al Batinah.
              </a>
            </li>
            <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
              <MdMarkEmailUnread />
              <a target="_blank" className="px-1" href="">
                info.oman@unitedzarqe.com
              </a>
            </li>
            <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
              <FaPhoneAlt />
              <a target="_blank" className="px-1" href="">
                0096896920499
              </a>
            </li>
          </ul>
        </div>
        <div
          id="Saudi Arabia"
          className="mainBg w-fit text-white px-4 py-2 capitalize mt-10 rounded"
        >
          <h4 className="mb-3">Saudi Arabia</h4>
          <ul className="text-sm flex flex-col space-y-3">
            <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
              <CiLocationOn />
              <a target="_blank" className="px-1" href="">
                Riyadh 12613 - Al-Murabe King Faisal St.
              </a>
            </li>
            <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
              <MdMarkEmailUnread />
              <a target="_blank" className="px-1" href="">
                info@unitedzarqe.com
              </a>
            </li>
            <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
              <FaPhoneAlt />
              <a target="_blank" className="px-1" href="">
                00966570122102
              </a>
            </li>
          </ul>
        </div>{" "}
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B966570122102&text&type=phone_number&app_absent=0"
        target="_blank"
        className="mt-4 capitalize w-fit mx-auto font-semibold flex items-center mainBg p-2 rounded hover:scale-125 text-white duration-300"
      >
        whatsapp
        <FaWhatsapp className="mx-1 " />
      </a>{" "}
    </div>
  );
};

export default Contact;
