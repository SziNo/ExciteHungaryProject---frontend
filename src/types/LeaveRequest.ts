export type LeaveStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface LeaveRequest {
  id: number;
  teamMemberId: number;
  teamMemberName: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: LeaveStatus;
}

export interface CreateLeaveRequest {
  teamMemberId: number;
  startDate: string;
  endDate: string;
  reason: string;
}
