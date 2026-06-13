import { useQuery } from "@tanstack/react-query";
import { fetchMembers } from "../api/membersApi";

export const useMembers = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: fetchMembers,
    staleTime: Infinity,
  });
};
