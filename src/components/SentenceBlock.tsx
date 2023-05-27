import { useState, useEffect } from "react";

export interface Options {
  optionText?: string;
  subOptions?: Options[];
}

export interface IProps {
  options: Options;
}

export const SentenceBlock = (props: IProps): JSX.Element => {
  const { optionText, subOptions } = props.options;
  const [selectedOption, setSelectedOption] = useState<Options | undefined>(
    undefined
  );

  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => setHasRendered(true), []);
  if (subOptions !== undefined && subOptions.length !== 0) {
    if (selectedOption === undefined) {
      const optionMap = subOptions.map((opt) => {
        return (
          <button onClick={() => setSelectedOption(opt)}>
            {opt.optionText + (opt.subOptions ? "..." : "")}
          </button>
        );
      });

      return (
        <>
          {optionText !== undefined ? (
            <div className={hasRendered ? "hasRendered" : "hasNotRendered"}>
              {optionText}
            </div>
          ) : null}
          <div className="col">{optionMap}</div>
        </>
      );
    } else {
      return (
        <>
          {optionText !== undefined ? (
            <div className={hasRendered ? "hasRendered" : "hasNotRendered"}>
              {optionText}
            </div>
          ) : null}
          <button
            className="cancelButton"
            onClick={() => setSelectedOption(undefined)}
          >
            {"^"}
          </button>
          <SentenceBlock options={selectedOption} />
        </>
      );
    }
  } else {
    return (
      <>
        {" "}
        {optionText !== undefined ? (
          <div className={hasRendered ? "hasRendered" : "hasNotRendered"}>
            {optionText}
          </div>
        ) : null}
      </>
    );
  }
};
