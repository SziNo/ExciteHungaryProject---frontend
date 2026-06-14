import { useState } from "react";
import { useMembers } from "../../hooks/useMembers";
import { useCreateLeave } from "../../hooks/useLeaves";

export const LeaveForm = () => {
  const { data: members } = useMembers();
  const { mutate: createLeave, isPending, isError, error } = useCreateLeave();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    teamMemberId: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.teamMemberId)
      newErrors.teamMemberId = "Please select a team member";
    if (!form.startDate) newErrors.startDate = "Start date is required";
    if (!form.endDate) newErrors.endDate = "End date is required";
    if (form.startDate && form.endDate && form.endDate < form.startDate) {
      newErrors.endDate = "End date cannot be before start date";
    }
    if (!form.reason.trim()) newErrors.reason = "Reason is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    createLeave(
      {
        teamMemberId: Number(form.teamMemberId),
        startDate: form.startDate,
        endDate: form.endDate,
        reason: form.reason,
      },
      {
        onSuccess: () =>
          setForm({ teamMemberId: "", startDate: "", endDate: "", reason: "" }),
      },
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        New Leave Request
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <select
            value={form.teamMemberId}
            onChange={(e) =>
              setForm((f) => ({ ...f, teamMemberId: e.target.value }))
            }
            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select team member</option>
            {members?.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
          {errors.teamMemberId && (
            <p className="text-xs text-red-500">{errors.teamMemberId}</p>
          )}
        </div>

        <div className="flex gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <input
              type="date"
              value={form.startDate}
              onChange={(e) =>
                setForm((f) => ({ ...f, startDate: e.target.value }))
              }
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.startDate && (
              <p className="text-xs text-red-500">{errors.startDate}</p>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <input
              type="date"
              value={form.endDate}
              onChange={(e) =>
                setForm((f) => ({ ...f, endDate: e.target.value }))
              }
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.endDate && (
              <p className="text-xs text-red-500">{errors.endDate}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Reason"
            value={form.reason}
            onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.reason && (
            <p className="text-xs text-red-500">{errors.reason}</p>
          )}
        </div>

        {isError && (
          <p className="text-sm text-red-600">
            {error?.response?.data?.message ??
              "Something went wrong. Possibly overlapping dates."}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={isPending}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition-colors disabled:opacity-50"
        >
          {isPending ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </div>
  );
};
