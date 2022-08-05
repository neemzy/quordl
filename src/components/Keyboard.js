import classNames from "classnames";

const keys = [
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split("")
];

export default function Keyboard({correctLetters, misplacedLetters, absentLetters}) {
  return (
    <div className="flex flex-col px-4 py-1 font-mono">
      {keys.map((keyRow, index) => (
        <div key={index} className="flex justify-center">
          {keyRow.map(key => {
            const isCorrectLetterTopLeft = correctLetters[0].includes(key);
            const isCorrectLetterTopRight = correctLetters[1].includes(key);
            const isCorrectLetterBottomLeft = correctLetters[2].includes(key);
            const isCorrectLetterBottomRight = correctLetters[3].includes(key);
            const isMisplacedLetterTopLeft = misplacedLetters[0].includes(key);
            const isMisplacedLetterTopRight = misplacedLetters[1].includes(key);
            const isMisplacedLetterBottomLeft = misplacedLetters[2].includes(key);
            const isMisplacedLetterBottomRight = misplacedLetters[3].includes(key);
            const isPresentLetter = isCorrectLetterTopLeft || isCorrectLetterTopRight || isCorrectLetterBottomLeft || isCorrectLetterBottomRight || isMisplacedLetterTopLeft || isMisplacedLetterTopRight || isMisplacedLetterBottomLeft || isMisplacedLetterBottomRight;
            const isAbsentLetter = absentLetters.includes(key);

            return (
              <div
                key={key}
                className={classNames(
                  "relative",
                  "w-12",
                  "h-12",
                  "m-1",
                  "rounded",
                  "text-center",
                  "uppercase",
                  "bg-slate-600",
                  {"bg-slate-500": isPresentLetter},
                  {"opacity-25": isAbsentLetter}
                )}
                style={{lineHeight: "3rem"}}
              >
                <div className={classNames(
                  "absolute",
                  "top-0",
                  "left-0",
                  "w-6",
                  "h-6",
                  "rounded-tl",
                  {"bg-green-500": isCorrectLetterTopLeft},
                  {"bg-yellow-500": !isCorrectLetterTopLeft && isMisplacedLetterTopLeft}
                )}></div>
                <div className={classNames(
                  "absolute",
                  "top-0",
                  "right-0",
                  "w-6",
                  "h-6",
                  "rounded-tr",
                  {"bg-green-500": isCorrectLetterTopRight},
                  {"bg-yellow-500": !isCorrectLetterTopRight && isMisplacedLetterTopRight}
                )}></div>
                <div className={classNames(
                  "absolute",
                  "bottom-0",
                  "left-0",
                  "w-6",
                  "h-6",
                  "rounded-bl",
                  {"bg-green-500": isCorrectLetterBottomLeft},
                  {"bg-yellow-500": !isCorrectLetterBottomLeft && isMisplacedLetterBottomLeft}
                )}></div>
                <div className={classNames(
                  "absolute",
                  "bottom-0",
                  "right-0",
                  "w-6",
                  "h-6",
                  "rounded-br",
                  {"bg-green-500": isCorrectLetterBottomRight},
                  {"bg-yellow-500": !isCorrectLetterBottomRight && isMisplacedLetterBottomRight}
                )}></div>
                <div className={classNames("absolute", "inset-0", {"text-black": isPresentLetter})}>{key.toUpperCase()}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
