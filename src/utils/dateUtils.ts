import { format, startOfWeek, endOfWeek, addWeeks } from "date-fns";

export const formatDate = (dateStr: string): string => {
  return format(new Date(dateStr), "MMM d, yyyy");
};

export const getWeekRange = (weeksFromNow = 0) => {
  const base = addWeeks(new Date(), weeksFromNow);
  return {
    from: format(startOfWeek(base, { weekStartsOn: 1 }), "yyyy-MM-dd"),
    to: format(endOfWeek(base, { weekStartsOn: 1 }), "yyyy-MM-dd"),
  };
};

export const getDateRangeForMonths = (monthCount = 3) => {
  const from = format(new Date(), "yyyy-MM-dd");
  const to = format(addWeeks(new Date(), monthCount * 4), "yyyy-MM-dd");
  return { from, to };
};
