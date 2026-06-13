import { useState } from "react";
import { useLeaves } from "../hooks/useLeaves";
import { useMembers } from "../hooks/useMembers";
import { LeaveForm } from "../components/leaves/LeaveForm";
import { LeaveList } from "../components/leaves/LeaveList";
import type { LeaveStatus } from "../types/LeaveRequest";

export const LeavesPage = () => {
  const [memberFilter, setMemberFilter] = useState<number | undefined>();
  const [statusFilter, setStatusFilter] = useState<LeaveStatus | undefined>();

  const { data: leaves, isLoading } = useLeaves();
  const { data: members } = useMembers();

  return (
    <div className="flex flex-col gap-6">
      <LeaveForm />

      <div className="flex gap-3 flex-wrap">
        <select
          value={memberFilter ?? ""}
          onChange={(e) =>
            setMemberFilter(e.target.value ? Number(e.target.value) : undefined)
          }
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All members</option>
          {members?.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <select
          value={statusFilter ?? ""}
          onChange={(e) =>
            setStatusFilter((e.target.value as LeaveStatus) || undefined)
          }
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All statuses</option>
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>

      {isLoading ? (
        <div className="text-center text-gray-400 py-12">Loading...</div>
      ) : (
        <LeaveList
          leaves={leaves ?? []}
          memberFilter={memberFilter}
          statusFilter={statusFilter}
        />
      )}
    </div>
  );
};
