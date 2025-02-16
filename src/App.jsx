import { useState } from "react";
import CharacterCount from "./components/CharacterCount";
import Header from "./components/Header";
import Input from "./components/Input";
import WelcomeText from "./ui/WelcomeText";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [excludeSpace, setExcludeSpace] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(false);
  const [inputLimit, setInputLimit] = useState(300);
  return (
    <>
      <Header />
      <main className="grid gap-10 pt-10 xl:max-w-248 xl:mx-auto xl:gap-12 dark:bg-slate-950 dark:text-gray-50">
        <WelcomeText />
        <Input
          textInput={textInput}
          setTextInput={setTextInput}
          excludeSpace={excludeSpace}
          setExcludeSpace={setExcludeSpace}
          characterLimit={characterLimit}
          setCharacterLimit={setCharacterLimit}
          inputLimit={inputLimit}
          setInputLimit={setInputLimit}
        />
        <CharacterCount textInput={textInput} excludeSpace={excludeSpace} />
      </main>
    </>
  );
};

export default App;
