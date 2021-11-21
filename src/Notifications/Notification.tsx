import React, { useContext } from "react";
import { NotificationContext } from "./NotificationContainer";
import { useTransition, animated } from "react-spring";
import { Icon } from "../Icons";

export type NotificationType = "success" | "error" | "warning" | "info";

export type NotificationPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export const Notification: React.FC<{
  /** is used for deleting an event */
  id: number;

  /** title of notification */
  title: React.ReactNode;

  /** content of notification */
  content: React.ReactNode;

  /** type of notification */
  type: NotificationType;

  /** position where notification is gonna slide in */
  position: NotificationPosition;
}> = ({ id, type, title, content, position }) => {
  const { deleteNotification } = useContext(NotificationContext);

  const getXCordinate = () => {
    if (position.includes("right")) return 500;
    return -500;
  };

  const transition = useTransition(id, {
    from: { x: getXCordinate(), opacity: 0.1 },
    enter: { x: 10, opacity: 1 },
    leave: { x: getXCordinate(), opacity: 0.1 },
  });

  const toast = (
    <div style={containerStyle(type, position)}>
      <div className="flex-row ai-c">
        <Icon name={type} style={iconStyle(type)} />
        <div style={titleStyle()}>{title}</div>
        <Icon
          isButton
          name="cross"
          style={{ margin: 6 }}
          onClick={() => deleteNotification(id, position)}
        />
      </div>
      <div style={contentStyle()}>{content}</div>
    </div>
  );

  return transition(
    (style, item) => item && <animated.div style={style}>{toast}</animated.div>
  );
};

export type Props = React.ComponentPropsWithoutRef<typeof Notification>;

const getColor = (type: NotificationType) => {
  switch (type) {
    case "error":
      return "#fa3a3a";
    case "info":
      return "#86949e";
    case "success":
      return "#1ca757";
    case "warning":
      return "#ff8142";
    default:
      return "";
  }
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

const containerStyle = (
  type: NotificationType,
  position: NotificationPosition
) => {
  return {
    padding: 24,
    height: 50,
    minWidth: 400,
    marginBottom: 10,
    position: "relative" as const,
    backgroundColor: "#fff",
    border: "1px solid #ccd2d6",
    borderRadius: 2,
    borderLeft: `4px solid ${getColor(type)}`,
    filter: `drop-shadow(0px 3px 6px ${getColor(type)})`,
    ...getPositionStyle(position),
  };
};

const titleStyle = () => ({
  fontSize: 16,
  fontWeight: "bold" as const,
  flexGrow: 1,
});

const iconStyle = (type: NotificationType) => ({
  marginRight: 16,
  fill: getColor(type),
  color: "#fff",
});

const contentStyle = () => ({
  marginTop: 16,
  marginLeft: 36,
});
