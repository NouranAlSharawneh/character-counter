const LetterStatus = ({ percantage, letter, status }) => {
  return (
    <div className="flex gap-5 justify-around items-center">
      <span className="w-4">{letter}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2.5 mx-auto dark:bg-slate-900">
        <div
          className="bg-purple-600/40 h-2.5 rounded-full dark:bg-purple-400/90"
          style={{ width: `${percantage}%` }}
        ></div>
      </div>

      <span className="w-22 text-right">{status}</span>
    </div>
  );
};

export default LetterStatus;
