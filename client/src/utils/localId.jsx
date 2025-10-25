import { v4 as uuidv4 } from "uuid";

export const getLocalId = () => {
  let id = localStorage.getItem("localId");
  if (!id) {
    id = uuidv4();
    localStorage.setItem("localId", id);
  }
  return id;
};
