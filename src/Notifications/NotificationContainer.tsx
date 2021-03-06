import React, { createContext, useContext } from "react";
import { Notification, Props, NotificationPosition } from "./Notification";
import { useNotificationReducer, StateInterface } from "./reducer";
import { getId, positions } from "../utils/helper";

interface INotificationContext {
  deleteNotification: (id: number, position: NotificationPosition) => void;
  addNotification: (
    notification: Omit<NotificationOptions, "id" | "timeoutId">
  ) => void;
}

export interface NotificationOptions extends Props {
  /** time in millisecond after which Notification disappears. Default to 4000 */
  delay?: number;

  /** if true notification won't disappear on its own */
  disableAutoClose?: boolean;

  timeoutId?: ReturnType<typeof setTimeout>;
}

export const NotificationContext = createContext<INotificationContext>(
  {} as INotificationContext
);

const idGenerator = getId();

export const NotificationContainer: React.FC = ({ children }) => {
  const [state, dispatch] = useNotificationReducer();

  const getTimeoutId = (
    delay: number,
    disableAutoClose: boolean,
    deleteNotificationCallback: () => void
  ): ReturnType<typeof setTimeout> | undefined => {
    if (disableAutoClose) return undefined;
    return setTimeout(deleteNotificationCallback, delay);
  };

  const deleteNotification = (id: number, position: NotificationPosition) => {
    dispatch({
      type: "DELETE_NOTIFICATION",
      payload: { id, position },
    });
  };

  const addNotification = ({
    delay = 4000,
    position,
    disableAutoClose = false,
    ...rest
  }: Omit<NotificationOptions, "id" | "timeoutId">) => {
    const id = idGenerator.next().value;
    const callback = () => deleteNotification(id, position);

    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        ...rest,
        id,
        delay,
        position,
        disableAutoClose,
        timeoutId: getTimeoutId(delay, disableAutoClose, callback),
      },
    });
  };

  const getRelevantState = (key: keyof StateInterface) => {
    return state[key];
  };

  return (
    <NotificationContext.Provider
      value={{
        addNotification,
        deleteNotification,
      }}
    >
      {children}
      {Object.entries(positions).map(([stateKey, position]) => {
        const state = getRelevantState(stateKey as keyof StateInterface);
        return (
          <div style={containerStyle(position)} key={position}>
            {state.map((notification) => (
              <Notification {...notification} key={notification.id} />
            ))}
          </div>
        );
      })}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const { addNotification } = useContext(NotificationContext);

  return { addNotification };
};

const containerStyle = (position: NotificationPosition) => {
  return {
    zIndex: 9999,
    position: "fixed" as const,
    ...getPositionStyle(position),
  };
};

const getPositionStyle = (position: NotificationPosition) => {
  switch (position) {
    case "top-right":
      return { top: 10, right: 10 };
    case "top-left":
      return { top: 10, left: 10 };
    case "bottom-right":
      return { bottom: 10, right: 10 };
    case "bottom-left":
      return { bottom: 10, left: 10 };
    default:
      return {};
  }
};
