
const ServicesMep = ({ title, info, img, textImg }) => {
  return (
    <div className="flex items-center flex-col sm:flex-row space-x-0 sm:space-x-5 space-y-3 sm:space-y-0 py-10 sm:even:flex-row-reverse gap-6">
      <div className="w-full sm:w-1/2 text-center mx-auto sm:text-start py-4">
        <h3 className="mx-auto sm:mx-0 font-bold text-2xl capitalize w-fit mb-4">
          {title}
        </h3>
        <p className="font-semibold py-4 text-gray-500">{info}</p>
      </div>
      <div className="w-full sm:w-1/2 text-center text-sm">
        <img src={img} className="h-1/2 rounded w-full object-cover" alt={textImg} />
        <p>{textImg}</p>
      </div>
    </div>
  );
};

export default ServicesMep;
