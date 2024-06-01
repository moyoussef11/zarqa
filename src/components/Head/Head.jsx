const Head = ({title,info}) => {
  return (
    <div className="w-full sm:w-1/2 text-center sm:text-start py-4">
      <h3 className="mainColor mx-auto sm:mx-0 font-bold text-2xl capitalize border-b-2 border-[#2B9DD9] w-fit mb-4">
        {title}
      </h3>
      <p className="font-semibold py-4 text-gray-500">
       {info}
      </p>
    </div>
  );
};

export default Head;
