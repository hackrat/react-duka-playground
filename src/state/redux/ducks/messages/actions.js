// Action Creators
import types from "./types";

const isValidMessageType = messageType => {
  const validMessageTypes = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ];

  return validMessageTypes.includes(messageType);
};

const addMessage = (messageText, messageType = "info") => {
  if (!isValidMessageType(messageType)) {
    throw new Error("Invalid message type: " + messageType);
  }

  return {
    type: types.ADD_MESSAGE,
    messageText: messageText,
    messageType: messageType
  };
};

const removeMessage = (messageText, messageType = "info") => {
  if (!isValidMessageType(messageType)) {
    throw new Error("Invalid message type: " + messageType);
  }

  return {
    type: types.REMOVE_MESSAGE,
    messageText: messageText,
    messageType: messageType
  };
};

const cleanMessages = () => {
  return {
    type: types.CLEAN_MESSAGES
  };
};

export default {
  addMessage,
  removeMessage,
  cleanMessages
};
