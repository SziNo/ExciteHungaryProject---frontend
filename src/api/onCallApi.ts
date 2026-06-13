import axios from "axios";
import type { OnCallWeek } from "../types/OnCallWeek";

const base = import.meta.env.VITE_API_URL;

export const fetchOnCall = async (
  from: string,
  to: string,
): Promise<OnCallWeek[]> => {
  const { data } = await axios.get(`${base}/api/oncall`, {
    params: { from, to },
  });
  return data;
};
