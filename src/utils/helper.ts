import { NotificationPosition } from "../Notifications/Notification";

export function* getId(): Generator<number> {
  let id = 1;

  while (true) {
    yield id;
    id += 1;
  }
}

export const positions: Record<string, NotificationPosition> = {
  topLeft: "top-left",
  topRight: "top-right",
  bottomRight: "bottom-right",
  bottomLeft: "bottom-left",
};