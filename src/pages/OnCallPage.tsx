import { useOnCall } from "../hooks/useOnCall";
import { getDateRangeForMonths } from "../utils/dateUtils";
import { OnCallTable } from "../components/oncall/OnCallTable";

export const OnCallPage = () => {
  const { from, to } = getDateRangeForMonths(3);
  const { data: weeks, isLoading } = useOnCall(from, to);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          On-Call Schedule
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Weekly rotation - red rows indicate the on-call person has approved
          leave.
        </p>
      </div>

      {isLoading ? (
        <div className="text-center text-gray-400 py-12">Loading...</div>
      ) : (
        <OnCallTable weeks={weeks ?? []} />
      )}
    </div>
  );
};
