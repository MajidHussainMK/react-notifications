import { useState } from "react";
import { NotificationPosition } from "./Notifications/Notification";
import { useNotification } from "./Notifications/NotificationContainer";
import { Radio as RadioButton } from "./Radio";

function App() {
  const { addNotification } = useNotification();
  const [position, setPosition] = useState<NotificationPosition>("bottom-left");

  const handlePosition = (value: string) => {
    setPosition(value as NotificationPosition);
  };

  return (
    <div className="container">
      <div className="flex-row ai-c mb-8">
        <RadioButton
          label="Top Right"
          name="position"
          value="top-right"
          onClick={handlePosition}
        />
        <RadioButton
          label="Top Left"
          name="position"
          value="top-left"
          onClick={handlePosition}
        />
        <RadioButton
          label="Bottom Right"
          name="position"
          value="bottom-right"
          onClick={handlePosition}
        />
        <RadioButton
          label="Bottom Left"
          name="position"
          value="bottom-left"
          onClick={handlePosition}
          defaultChecked
        />
      </div>
      <div className="flex-row ai-c jc-c">
        <button
          type="button"
          onClick={() =>
            addNotification({
              title: "Success",
              type: "success",
              content: "Wow, your doing great",
              position,
            })
          }
        >
          Success TR
        </button>
        <button
          type="button"
          onClick={() =>
            addNotification({
              title: "Success",
              type: "error",
              content: "Wow, your doing great",
              position,
            })
          }
        >
          Error TL
        </button>
        <button
          type="button"
          onClick={() =>
            addNotification({
              title: "Success",
              type: "warning",
              content: "Wow, your doing great",
              position,
            })
          }
        >
          Warning BR
        </button>
        <button
          type="button"
          onClick={() =>
            addNotification({
              title: "Success",
              type: "info",
              content: "Wow, your doing great",
              position,
            })
          }
        >
          Info BL
        </button>
      </div>
    </div>
  );
}

export default App;
