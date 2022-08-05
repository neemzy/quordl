import classNames from "classnames";
import tryWord, {WRONG, MISPLACED, RIGHT} from "../tryWord";

export default function Row({leTry, answer}) {
  const letterStates = tryWord(leTry, answer);

  return (
    <div className="flex font-mono">
      {leTry.split("").map((letter, index) => (
        <div key={index} className={classNames(
          "grow",
          "m-1",
          "rounded",
          "text-center",
          "uppercase",
          {"text-black": [MISPLACED, RIGHT].includes(letterStates[index])},
          {"bg-slate-800": letterStates[index] === WRONG},
          {"bg-yellow-500": letterStates[index] === MISPLACED},
          {"bg-green-500": letterStates[index] === RIGHT}
        )}>{letter}</div>
      ))}
    </div>
  );
}
