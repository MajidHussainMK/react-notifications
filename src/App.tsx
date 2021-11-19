import { useNotification } from "./Notifications/NotificationContainer";

function App() {
  const { addNotification } = useNotification();

  return (
    <div>
      <div className="flex-row ai-c">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label htmlFor="javascript">JavaScript</label>
      </div>
      <button
        type="button"
        onClick={() =>
          addNotification({
            title: "Success",
            position: "top-right",
            type: "success",
            content: "Wow, your doing greate",
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
            position: "top-left",
            type: "error",
            content: "Wow, your doing greate",
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
            position: "bottom-right",
            type: "warning",
            content: "Wow, your doing greate",
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
            position: "bottom-left",
            type: "info",
            content: "Wow, your doing greate",
          })
        }
      >
        Info BL
      </button>
    </div>
  );
}

export default App;
