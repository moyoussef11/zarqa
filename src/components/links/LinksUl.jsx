

const LinksUl = ({ title, li1, li2, li3, icon1, icon2, icon3 ,path1,path2,path3 }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul className="text-sm flex flex-col space-y-3">
        <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
          {icon1}
          <a target="_blank" className="px-1" href={path1}>{li1}</a>
        </li>
        <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
          {icon2}
          <a target="_blank" className="px-1" href={path2}>{li2}</a>
        </li>
        <li className="flex items-center space-x-1 hover:altColor duration-150 cursor-pointer">
          {icon3}
          <a target="_blank" className="px-1" href={path3}>{li3}</a>
        </li>
      </ul>
    </div>
  );
};

export default LinksUl;
