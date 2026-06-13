import axios from "axios";
import type { TeamMember } from "../types/TeamMember";

const base = import.meta.env.VITE_API_URL;

export const fetchMembers = async (): Promise<TeamMember[]> => {
  const { data } = await axios.get(`${base}/api/members`);
  return data;
};
