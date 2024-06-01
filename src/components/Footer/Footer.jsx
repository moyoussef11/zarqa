import { useTranslation } from "react-i18next";
import LinksUl from "../links/LinksUl";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [t] = useTranslation();
  return (
    <footer className="mt-auto w-full text-center sm:text-start text-white p-5 bg-[#2B9DD9]">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <h2 className="font-bold mb-4 text-7xl">Q</h2>
          <ul>
            <li className="font-bold">UNITED</li>
            <li className="font-bold">ZARGE</li>
          </ul>
        </div>
        <LinksUl
          title="Saudi Arabia"
          li1="Riyadh 12613 - Al-Murabe King Faisal St."
          li2="info@unitedzarqe.com"
          li3="00966570122102"
          icon1={<CiLocationOn size={15} />}
          icon2={<MdMarkEmailUnread size={15} />}
          icon3={<FaPhoneAlt size={15} />}
        />
        <LinksUl
          title="Oman"
          li1="Shinas 324 Northern Al Batinah."
          li2="info.oman@unitedzarqe.com"
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
          path1="https://www.facebook.com/?locale=ar_AR"
          path2="https://x.com/ElevatorsQ?t=0kTvKjVvfaxpvna1xoU5Gg&s=09"
          path3="https://www.instagram.com/"
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
