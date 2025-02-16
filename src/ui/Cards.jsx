const Cards = ({ src, title, count, color }) => {
  return (
    <div
      className={`relative flex p-5 rounded-2xl overflow-hidden ${color} w-full`}
    >
      <div className="grid gap-2 text-slate-950">
        <h3 className="text-4xl font-extrabold">{count}</h3>
        <p>{title}</p>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:-right-15 xl:-right-8">
        <img src={src} alt="Svg Decorative Image" className="" />
      </div>
    </div>
  );
};

export default Cards;
