function Card({ img, title, text }) {
  return (
    <div className="card flex items-start not-last:mb-10 not-last:border-b-2 border-gray-700/20">
      <img className="mr-11" src={img} />
      <div className="card-content max-w-[300px]">
        <h3 className="text-blue-950 font-medium text-2xl leading-6 mb-6">
          {title}
        </h3>
        <p className="text-gray-700 font-normal text-[18px] leading-[27px] pb-10">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card;
