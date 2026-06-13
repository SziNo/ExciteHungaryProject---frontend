import axios from "axios";
import type {
  LeaveRequest,
  CreateLeaveRequest,
  LeaveStatus,
} from "../types/LeaveRequest";

const base = import.meta.env.VITE_API_URL;

export const fetchLeaves = async (
  memberId?: number,
  status?: LeaveStatus,
): Promise<LeaveRequest[]> => {
  const { data } = await axios.get(`${base}/api/leaves`, {
    params: { memberId, status },
  });
  return data;
};

export const createLeave = async (
  dto: CreateLeaveRequest,
): Promise<LeaveRequest> => {
  const { data } = await axios.post(`${base}/api/leaves`, dto);
  return data;
};

export const updateLeaveStatus = async (
  id: number,
  status: LeaveStatus,
): Promise<LeaveRequest> => {
  const { data } = await axios.patch(`${base}/api/leaves/${id}/status`, null, {
    params: { status },
  });
  return data;
};
