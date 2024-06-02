import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div dir="ltr" className="mainBg hidden sm:block px-5 py-2 text-white">
      <ul className="text-sm flex space-x-3">
        <li className="flex items-center space-x-1">
          <CiLocationOn size={15} />
          <span>Riyadh 12613 - Al-Murabe King Faisal St.</span>
        </li>
        <li className="flex items-center space-x-1">
          <MdMarkEmailUnread size={15} />
          <span>info@unitedzarqa.com</span>
        </li>
        <li className="flex items-center space-x-1">
          <FaPhoneAlt size={15} />
          <span>00966570122102</span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
