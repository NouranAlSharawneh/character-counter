import infoSvg from "/assets/images/icon-info.svg";

const Input = ({
  textInput,
  setTextInput,
  excludeSpace,
  setExcludeSpace,
  characterLimit,
  setCharacterLimit,
  inputLimit,
  setInputLimit,
}) => {
  const validTextArea =
    textInput.length >= Number(inputLimit) && characterLimit;

  return (
    <div className="px-6 grid gap-5">
      <textarea
        placeholder="Start typing here… (or paste your text)"
        className={`w-full h-50 border-2  rounded-lg font-light p-4 bg-gray-300/20 text-md md:text-lg/6    ${
          validTextArea
            ? "border-orange-500 focus:outline-orange-500 active:outline-orange-500 focus:outline-2 active:shadow-orange-500 focus:shadow-orange-500"
            : "border-gray-200 dark:border-gray-700 focus:outline-offset-2 focus:outline-purple-600 active:outline-purple-600 focus:outline-2 active:shadow-purple-600 focus:shadow-purple-600"
        }`}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />

      {validTextArea && (
        <div className="text-xs text-orange-500 flex gap-2">
          <img src={infoSvg} alt="Info Icon" />
          Limit reached! Your text exceeds {inputLimit} characters.
        </div>
      )}

      <div className="flex  flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="excludeSpaces"
              checked={excludeSpace}
              value={excludeSpace}
              onChange={(e) => setExcludeSpace(e.target.checked)}
              className="mr-2 appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 relative before:content-['✔'] before:absolute before:left-0.5 before:top-0 before:text-white before:opacity-0 checked:before:opacity-100 checked:before:text-xs dark:bg-slate-950 dark:border-gray-700"
            />

            <label className="text-xs">Exclude Spaces</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="setCharacterLimit"
              value={characterLimit}
              checked={characterLimit}
              onChange={(e) => setCharacterLimit(e.target.checked)}
              className="mr-2 appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 relative before:content-['✔'] before:absolute before:left-0.5 before:top-0 before:text-white before:opacity-0 checked:before:opacity-100 checked:before:text-xs dark:bg-slate-950 dark:border-gray-700"
            />
            <label className="text-xs">Set Character Limit</label>
            {characterLimit && (
              <input
                type="text"
                name="setCharacterLimit"
                value={inputLimit}
                onChange={(e) => setInputLimit(e.target.value)}
                className="w-12 text-xs ml-2 px-2 border-1 rounded-md border-gray-400 text-center dark:border-gray-700"
              />
            )}
          </div>
        </div>
        <p className="text-xs">
          Approx. reading time: {textInput.length > 5 ? "> 1" : "0"} minute
        </p>
      </div>
    </div>
  );
};

export default Input;
