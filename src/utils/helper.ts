import { NotificationPosition } from "../Notifications/Notification";

export function* getId() {
  let id = 1;

  while (true) {
    yield id;
    id += 1;
  }
}

export const positions: Record<string, NotificationPosition> = {
  topRight: "top-right",
  topLeft: "top-left",
  bottomRight: "bottom-right",
  bottomLeft: "bottom-left",
};