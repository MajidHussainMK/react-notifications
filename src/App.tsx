import { useState } from "react";
import {
  NotificationPosition,
  NotificationType,
} from "./Notifications/Notification";
import { useNotification } from "./Notifications/NotificationContainer";
import { Radio, Radio as RadioButton } from "./Radio";
import { positions } from "./utils/helper";

const types = ["Success", "Info", "Warning", "Error"] as const;

function App() {
  const { addNotification } = useNotification();
  const [position, setPosition] = useState<NotificationPosition>("top-right");
  const [type, setType] = useState<NotificationType>("success");
  const [disableAutoClose, setAutoClose] = useState("");
  const [delay, setDelay] = useState(4000);

  const handlePosition = (value: string) => {
    setPosition(value as NotificationPosition);
  };

  const handleType = (value: string) => {
    setType(value as NotificationType);
  };

  const handleAutoClose = () => {
    setAutoClose(disableAutoClose ? "" : "true");
  };

  const positionContent = (
    <>
      <span className="heading">Position</span>
      <div className="flex-row ai-c mb-8">
        {Object.values(positions).map((p) => {
          const label = p.split("-").join(" ");
          return (
            <RadioButton
              key={p}
              value={p}
              label={label}
              name="position"
              onClick={handlePosition}
              defaultChecked={p === "top-right"}
            />
          );
        })}
      </div>
    </>
  );

  const typeContent = (
    <>
      <span className="heading">Type</span>
      <div className="flex-row ai-c mb-8">
        {types.map((type) => {
          const value = type.toLocaleLowerCase() as NotificationType;
          return (
            <RadioButton
              key={value}
              label={type}
              name="type"
              value={value}
              onClick={handleType}
              defaultChecked={value === "success"}
            />
          );
        })}
      </div>
    </>
  );

  const optionsContent = (
    <>
      <span className="heading">Options</span>
      <div className="flex-row ai-c mb-8">
        <label>Delay</label>
        <input
          type="number"
          value={delay}
          onChange={({ target }) => setDelay(+target.value)}
        />
        <Radio
          id="disable-auto-close"
          label="Disable Auto Close"
          name="disableAutoClose"
          value={disableAutoClose}
          onClick={handleAutoClose}
          type="checkbox"
        />
      </div>
    </>
  );

  return (
    <div className="container">
      {positionContent}
      {typeContent}
      {optionsContent}
      <div className="flex-row jc-c">
        <button
          type="button"
          onClick={() =>
            addNotification({
              type,
              delay,
              position,
              title: "Hola!",
              content: "Wow, it's so easy",
              disableAutoClose: Boolean(disableAutoClose),
            })
          }
        >
          Show Notification
        </button>
      </div>
    </div>
  );
}

export default App;
