import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { useTranslation } from "react-i18next";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const [t, i18n] = useTranslation();
  if (i18n.language == "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }
  const handleBtn = () => {
    setToggle(!toggle);
  };
  return (
    <header className="bg-[#FFFFFF] flex justify-between items-center px-5 border-[#53A7D4] shadow shadow-[#53A7D4] relative">
      <div>
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-2 lg:space-x-10">
          <li
            className={`navLink ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link to="/">{t("Elevators")}</Link>
          </li>
          <li
            className={`navLink ${
              location.pathname === "/electromechanics" ? "active" : ""
            }`}
          >
            <Link to="/electromechanics">{t("electromechanics")}</Link>
          </li>
          <li
            className={`navLink ${
              location.pathname === "/contracting" ? "active" : ""
            }`}
          >
            <Link to="/contracting">{t("almuqawalat")}</Link>
          </li>{" "}
          <li
            className={`navLink ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <Link to="/contact">{t("contact us")}</Link>
          </li>
          <li>
            {i18n.language == "en" ? (
              <button className="btn" onClick={() => i18n.changeLanguage("ar")}>
                AR
              </button>
            ) : (
              <button className="btn" onClick={() => i18n.changeLanguage("en")}>
                EN
              </button>
            )}
          </li>
        </ul>
      </nav>
      <div onClick={handleBtn} className="cursor-pointer md:hidden z-10">
        {toggle ? (
          <CiMenuFries
            size={35}
            className="mainColor hover:altColor duration-300"
          />
        ) : (
          <IoMdClose
            size={35}
            className="mainColor hover:altColor duration-300"
          />
        )}
      </div>
      {/* mobile menu */}
      <nav
        className={`absolute left-0 ${
          !toggle ? "top-[80px]" : "-top-96"
        }  w-full altBg duration-300 md:hidden z-10`}
      >
        <ul className="flex flex-col items-center space-y-3 py-1">
          <li
            className={`navLink ${
              location.pathname === "/" ? "active" : ""
            } text-white`}
          >
            <Link to="/">{t("Elevators")}</Link>
          </li>
          <li
            className={`navLink ${
              location.pathname === "/electromechanics" ? "active" : ""
            } text-white`}
          >
            <Link to="/electromechanics">{t("electromechanics")}</Link>
          </li>
          <li
            className={`navLink ${
              location.pathname === "/contracting" ? "active" : ""
            } text-white`}
          >
            <Link to="/contracting">{t("almuqawalat")}</Link>
          </li>{" "}
          <li
            className={`navLink ${
              location.pathname === "/contact" ? "active" : ""
            } text-white`}
          >
            <Link to="/contact">{t("contact us")}</Link>
          </li>
          <li>
            {i18n.language == "en" ? (
              <button className="btn" onClick={() => i18n.changeLanguage("ar")}>
                AR
              </button>
            ) : (
              <button className="btn" onClick={() => i18n.changeLanguage("en")}>
                EN
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
