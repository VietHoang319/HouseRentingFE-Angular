import {House} from "./house";
import {User} from "./user";

export interface Orderr {
  id: number,
  house: House,
  customer: User,
  startTime: string,
  endTime: string,
  total: number,
  status: number
}
