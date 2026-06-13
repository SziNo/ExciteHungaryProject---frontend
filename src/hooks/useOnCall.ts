import { useQuery } from "@tanstack/react-query";
import { fetchOnCall } from "../api/onCallApi";

export const useOnCall = (from: string, to: string) => {
  return useQuery({
    queryKey: ["oncall", from, to],
    queryFn: () => fetchOnCall(from, to),
    enabled: !!from && !!to,
  });
};
