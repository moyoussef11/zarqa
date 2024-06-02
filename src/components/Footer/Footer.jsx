import { useTranslation } from "react-i18next";
import LinksUl from "../links/LinksUl";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
import logo from '../../assets/logoffooter.jpeg';
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [t] = useTranslation();
  return (
    <footer className="mt-auto w-full text-center sm:text-start text-white p-5 bg-[#01B0F1]">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <img src={logo} className=" h-28 mx-auto sm:mx-0" alt="logo" />
          <ul>
            <li className="font-bold">UNITED</li>
            <li className="font-bold">ZARQA</li>
          </ul>
        </div>
        <LinksUl
          title="Saudi Arabia"
          li1="Riyadh 12613 - Al-Murabe King Faisal St."
          li2="info@unitedzarqa.com"
          li3="00966570122102"
          icon1={<CiLocationOn size={15} />}
          icon2={<MdMarkEmailUnread size={15} />}
          icon3={<FaPhoneAlt size={15} />}
        />
        <LinksUl
          title="Oman"
          li1="Shinas 324 Northern Al Batinah."
          li2="info.oman@unitedzarqa.com"
          li3="0096896920499"
          icon1={<CiLocationOn size={15} />}
          icon2={<MdMarkEmailUnread size={15} />}
          icon3={<FaPhoneAlt size={15} />}
        />
        <LinksUl
          title={t("Social media")}
          li1="Facebook"
          li2="Twitter"
          li3="Instagram"
          icon1={<FaFacebookSquare size={15} />}
          icon2={<FaTwitter size={15} />}
          icon3={<FaInstagram size={15} />}
          path1="https://www.facebook.com/elevatorsq?mibextid=qi2Omg&rdid=bwfQrqrkOknpwq27&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FuiecrerephsfEoff%2F%3Fmibextid%3Dqi2Omg"
          path2="https://x.com/ElevatorsQ?t=0kTvKjVvfaxpvna1xoU5Gg&s=09"
          path3="https://www.instagram.com/elevatorsq/?igsh=MWQxdWMyd21xOHY5bg%3D%3D"
        />
      </div>
      <hr className="w-4/5 mt-2 mx-auto" />
      <div className="text-center my-2">
        <p> {t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
