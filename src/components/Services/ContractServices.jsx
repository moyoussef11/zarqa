const ContractServices = ({path,title,infoImg,info,ulHead,li1,li2,li3,li4}) => {
  return (
    <div>
      <h4 className="mb-5 font-bold text-3xl">{title}</h4>
      <div className="flex items-center flex-col text-center sm:text-start sm:flex-row sm:even:flex-row-reverse gap-5">
        <div className="text-center w-full sm:w-1/2">
          <img
            src={path}
            className="w-full object-cover rounded"
            alt="landscaped"
          />
          <p>{infoImg}</p>
        </div>
        <div className="w-full sm:w-1/2">
          <p className="sm:text-3xl py-2">{info}</p>
          <h5 className="mainColor font-bold">{ulHead} </h5>
          <ul className="pl-5">
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContractServices;
