import type { OnCallWeek } from "../../types/OnCallWeek";
import { formatDate } from "../../utils/dateUtils";

export const OnCallTable = ({ weeks }: { weeks: OnCallWeek[] }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left px-4 py-3 text-gray-500 font-medium">
              Week
            </th>
            <th className="text-left px-4 py-3 text-gray-500 font-medium">
              Period
            </th>
            <th className="text-left px-4 py-3 text-gray-500 font-medium">
              On-Call
            </th>
            <th className="text-left px-4 py-3 text-gray-500 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {weeks.map((week, idx) => (
            <tr
              key={`${week.weekNumber}-${week.weekStart}`}
              className={idx % 2 === 0 ? "bg-gray-300" : ""}
            >
              <td className="px-4 py-3 text-gray-600">
                Week {week.weekNumber}
              </td>
              <td className="px-4 py-3 text-gray-600">
                {formatDate(week.weekStart)} – {formatDate(week.weekEnd)}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {week.teamMemberName}
              </td>
              <td className="px-4 py-3">
                {week.hasConflict ? (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-100 text-red-700">
                    ⚠ On Leave
                  </span>
                ) : (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">
                    Available
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
