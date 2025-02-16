import Cards from "../ui/Cards";
import PurpleSvg from "/assets/images/pattern-character-count.svg";
import OrangeSvg from "/assets/images/pattern-word-count.svg";
import RedSvg from "/assets/images/pattern-sentence-count.svg";
import LetterStatus from "../ui/LetterStatus";
import { formatCount } from "../helper";
import { useState } from "react";

const CharacterCount = ({ textInput, excludeSpace }) => {
  const [showMore, setShowMore] = useState(false);

  const countCharacter = () => {
    if (excludeSpace) return formatCount(textInput.replace(/\s/g, "").length);
    return formatCount(textInput.length);
  };

  const wordCount = () => formatCount(textInput.split(" ").length);
  const sentenceCount = () => formatCount(textInput.split(".").length - 1);

  const totalLetters = textInput.replace(/[^a-zA-Z]/g, "").length;

  const letterArray = textInput
    .replace(/[^a-zA-Z]/g, "") // Remove non-alphabetic characters
    .split("")
    .reduce((acc, letter) => {
      const existing = acc.find(
        (item) => item.letter.toUpperCase() === letter.toUpperCase()
      );
      if (existing) {
        existing.count++;
      } else {
        acc.push({ letter, count: 1 });
      }
      return acc;
    }, []);

  return (
    <div className="px-6 grid gap-5">
      <div className="flex flex-col gap-4 md:flex-row">
        <Cards
          className="flex-1"
          src={PurpleSvg}
          title="Total Characters"
          count={countCharacter()}
          color="bg-purple-600/40 "
        />
        <Cards
          className="flex-1"
          src={OrangeSvg}
          title="Word Count"
          count={textInput === "" ? "00" : wordCount()}
          color="bg-orange-400/90"
        />
        <Cards
          className="flex-1"
          src={RedSvg}
          title="Sentence Count"
          count={sentenceCount()}
          color="bg-orange-600/70"
        />
      </div>
      <div className="grid gap-3 mb-15">
        <h4 className="text-2xl font-bold">Letter Density</h4>
        <div className="grid gap-2">
          {letterArray.length === 0 ? (
            <p className="text-sm text-gray-500">
              No characters found. Start typing to see letter density.
            </p>
          ) : (
            <>
              {letterArray
                .sort((a, b) => b.count - a.count)
                .slice(0, showMore ? letterArray.length : 4)
                .map(({ letter, count }) => {
                  const percentage = ((count / totalLetters) * 100).toFixed(2);
                  return (
                    <LetterStatus
                      key={letter}
                      letter={letter.toUpperCase()}
                      percantage={percentage}
                      status={`${count} (${percentage}%)`}
                    />
                  );
                })}
              {letterArray.length > 4 && (
                <div className="py-2 xl:py-4">
                  <p
                    onClick={() => setShowMore(!showMore)}
                    className="cursor-pointer"
                  >
                    {showMore ? "See less  \u2191" : "See more  \u2193"}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCount;
