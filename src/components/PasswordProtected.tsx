import { useState } from "react";
import { ThursdayDate } from "./ThursdayDate";
import { getWrongPasswordMessage } from "../wrongPasswordMocks";
export const PasswordProtected = (): JSX.Element => {
  const [password, setPassword] = useState("");
  const [invalidString, setInvalidString] = useState("");
  const [hasRendered, setHasRendered] = useState(false);
  const [loggedInComp, setLoggedInComp] = useState<JSX.Element | undefined>(
    undefined
  );

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };
  const toHex = (arrayBuffer: ArrayBuffer): string => {
    return Array.from(new Uint8Array(arrayBuffer))
      .map((n) => n.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setInvalidString("");
    crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(password))
      .then((e) => {
        console.log(toHex(e));
        switch (toHex(e)) {
          case "1a64d30b0ed1bef12cccab39782e521589b7a6e17d39302ab2e36080fa7032b3": //AugustIsTheHottestMonth
            setLoggedInComp(ThursdayDate);
            return;
          default:
            setInvalidString(getWrongPasswordMessage());
            return;
        }
      });
  };

  if (loggedInComp !== undefined) {
    return <>{loggedInComp}</>;
  }

  return (
    <div className="row">
      <div className="col">
        <div className="row">enter your unique password.</div>
        <form onSubmit={handleSubmit}>
          <div className="col">
            <div className="row">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="submit">Continue</button>
            </div>
          </div>
          <div className="row">
            {invalidString === "" ? null : (
              <div className="invalid">{invalidString}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
