import type { LeaveStatus } from "../../types/LeaveRequest";

const styles: Record<LeaveStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  APPROVED: "bg-green-100 text-green-800",
  REJECTED: "bg-red-100 text-red-800",
};

export const StatusBadge = ({ status }: { status: LeaveStatus }) => {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${styles[status]}`}
    >
      {status}
    </span>
  );
};
