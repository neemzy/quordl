import classNames from "classnames";
import Row from "./Row";

export default function Word({tries, currentTry, answer, maxTries}) {
  const foundIndex = tries.findIndex(leTry => leTry === answer);
  const found = foundIndex !== -1;

  return (
    <div className="basis-2/4 px-4 py-1">
      {tries.map((leTry, index) => {
        if (found && foundIndex < index) {
          return (
            <div key={index} className={classNames(
              "h-6",
              "m-1",
              "bg-slate-800",
              "rounded",
              {"mt-2": index - foundIndex > 1}
            )}></div>
          );
        }

        return <Row key={index} leTry={leTry} answer={answer} />;
      })}
      {tries.length < maxTries && <>
        <div className="flex mb-1 font-mono" style={{lineHeight: "3rem"}}>
          <div className={classNames(
            "grow",
            "h-12",
            "m-1",
            "rounded",
            "text-center",
            "uppercase",
            {"bg-slate-600": !found},
            {"bg-slate-800": found},
          )}>{found ? " " : (currentTry[0] || " ")}</div>
          <div className={classNames(
            "grow",
            "h-12",
            "m-1",
            "rounded",
            "text-center",
            "uppercase",
            {"bg-slate-600": !found},
            {"bg-slate-800": found},
          )}>{found ? " " : (currentTry[1] || " ")}</div>
          <div className={classNames(
            "grow",
            "h-12",
            "m-1",
            "rounded",
            "text-center",
            "uppercase",
            {"bg-slate-600": !found},
            {"bg-slate-800": found},
          )}>{found ? " " : (currentTry[2] || " ")}</div>
          <div className={classNames(
            "grow",
            "h-12",
            "m-1",
            "rounded",
            "text-center",
            "uppercase",
            {"bg-slate-600": !found},
            {"bg-slate-800": found},
          )}>{found ? " " : (currentTry[3] || " ")}</div>
          <div className={classNames(
            "grow",
            "h-12",
            "m-1",
            "rounded",
            "text-center",
            "uppercase",
            {"bg-slate-600": !found},
            {"bg-slate-800": found},
          )}>{found ? " " : (currentTry[4] || " ")}</div>
        </div>
        {Array(maxTries - tries.length - 1).fill().map((osef, index) => (
          <div
            key={index}
            className={classNames(
              "h-6",
              "mx-1",
              "mb-2",
              "rounded",
              {"bg-gray-600": !found},
              {"bg-slate-800": found},
            )}
          ></div>
        ))}
      </>}
    </div>
  );
}
