import React from 'react';
import { NotificationPosition } from './Notification';
import { NotificationOptions } from './NotificationContainer';

export interface StateInterface {
  topRight: NotificationOptions[];
  topLeft: NotificationOptions[];
  bottomRight: NotificationOptions[];
  bottomLeft: NotificationOptions[];
  notifications: NotificationOptions[];
}

export type Actions =
  | { type: 'ADD_NOTIFICATION'; payload: NotificationOptions }
  | {
    type: 'DELETE_NOTIFICATION';
    payload: Pick<NotificationOptions, 'id' | 'position'>;
  };

const addNotification = (
  state: NotificationOptions[],
  notification: NotificationOptions,
  position: NotificationPosition,
) => {
  if (position !== notification.position) return state;
  return [notification, ...state];
};

const deleteNotification = (
  state: NotificationOptions[],
  notification: Pick<NotificationOptions, 'id' | 'position'>,
  position: NotificationPosition,
) => {
  if (position !== notification.position) return state;
  return state.filter(n => {
    if (n.id !== notification.id) {
      return true;
    }
    if (n.timeoutId) clearTimeout(n.timeoutId);
    return false;
  });
};

export const reducer = (state: StateInterface, action: Actions) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION': {
      return {
        ...state,
        topRight: addNotification(state.topRight, action.payload, 'top-right'),
        topLeft: addNotification(state.topLeft, action.payload, 'top-left'),
        bottomLeft: addNotification(
          state.bottomLeft,
          action.payload,
          'bottom-left',
        ),
        bottomRight: addNotification(
          state.bottomRight,
          action.payload,
          'bottom-right',
        ),
      };
    }
    case 'DELETE_NOTIFICATION': {
      return {
        ...state,
        topRight: deleteNotification(
          state.topRight,
          action.payload,
          'top-right',
        ),
        topLeft: deleteNotification(state.topLeft, action.payload, 'top-left'),
        bottomRight: deleteNotification(
          state.bottomRight,
          action.payload,
          'bottom-right',
        ),
        bottomLeft: deleteNotification(
          state.bottomLeft,
          action.payload,
          'bottom-left',
        ),
      };
    }
    default:
      return state;
  }
};

const InitialState: StateInterface = {
  topRight: [] as NotificationOptions[],
  topLeft: [] as NotificationOptions[],
  bottomRight: [] as NotificationOptions[],
  bottomLeft: [] as NotificationOptions[],
  notifications: [] as NotificationOptions[],
};

export const useNotificationReducer = (
  initialState: StateInterface = InitialState,
) => React.useReducer(reducer, initialState);
