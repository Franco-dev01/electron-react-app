import { storage } from "../utils/storage";

export function Authenticate() {
  return storage.getToken();
}
