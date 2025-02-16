const Input = ({ textInput, setTextInput, excludeSpace, setExcludeSpace }) => {
  return (
    <div className="px-6 grid gap-5">
      <textarea
        placeholder="Start typing here… (or paste your text)"
        className="w-full h-50 border-2 border-gray-200 rounded-lg font-light  p-4 bg-gray-300/20 text-md md:text-lg/6 "
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />

      <div className="flex  flex-col gap-2 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="excludeSpaces"
              checked={excludeSpace}
              value={excludeSpace}
              onChange={(e) => setExcludeSpace(e.target.checked)}
              className="mr-2 appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 relative before:content-['✔'] before:absolute before:left-0.5 before:top-0 before:text-white before:opacity-0 checked:before:opacity-100 checked:before:text-xs"
            />

            <label className="text-xs">Exclude Spaces</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="setCharacterLimit"
              value="checkedValue"
              className="mr-2 appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 relative before:content-['✔'] before:absolute before:left-0.5 before:top-0 before:text-white before:opacity-0 checked:before:opacity-100 checked:before:text-xs"
            />
            <label className="text-xs">Set Character Limit</label>
          </div>
        </div>
        <p className="text-xs">Approx. reading time: &lt;1 minute</p>
      </div>
    </div>
  );
};

export default Input;
