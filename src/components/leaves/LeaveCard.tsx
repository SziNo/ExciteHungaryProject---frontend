import type { LeaveRequest } from "../../types/LeaveRequest";
import { StatusBadge } from "./StatusBadge";
import { useUpdateLeaveStatus } from "../../hooks/useLeaves";
import { formatDate } from "../../utils/dateUtils";

export const LeaveCard = ({ leave }: { leave: LeaveRequest }) => {
  const { mutate: updateStatus, isPending } = useUpdateLeaveStatus();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-800">
          {leave.teamMemberName}
        </span>
        <StatusBadge status={leave.status} />
      </div>

      <div className="text-sm text-gray-500">
        {formatDate(leave.startDate)} → {formatDate(leave.endDate)}
      </div>

      <div className="text-sm text-gray-700 italic">"{leave.reason}"</div>

      {leave.status === "PENDING" && (
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => updateStatus({ id: leave.id, status: "APPROVED" })}
            disabled={isPending}
            className="flex-1 text-sm bg-green-50 hover:bg-green-100 text-green-700 font-medium py-1.5 rounded-md transition-colors disabled:opacity-50"
          >
            Approve
          </button>
          <button
            onClick={() => updateStatus({ id: leave.id, status: "REJECTED" })}
            disabled={isPending}
            className="flex-1 text-sm bg-red-50 hover:bg-red-100 text-red-700 font-medium py-1.5 rounded-md transition-colors disabled:opacity-50"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};
