import type { LeaveRequest, LeaveStatus } from "../../types/LeaveRequest";
import { LeaveCard } from "./LeaveCard";

interface Props {
  leaves: LeaveRequest[];
  memberFilter: number | undefined;
  statusFilter: LeaveStatus | undefined;
}

export const LeaveList = ({ leaves, memberFilter, statusFilter }: Props) => {
  const filtered = leaves.filter((l) => {
    if (memberFilter && l.teamMemberId !== memberFilter) return false;
    if (statusFilter && l.status !== statusFilter) return false;
    return true;
  });

  if (filtered.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No leave requests found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filtered.map((leave) => (
        <LeaveCard key={leave.id} leave={leave} />
      ))}
    </div>
  );
};
