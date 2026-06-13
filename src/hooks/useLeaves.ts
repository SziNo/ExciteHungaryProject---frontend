import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLeaves, createLeave, updateLeaveStatus } from "../api/leavesApi";
import type {
  CreateLeaveRequest,
  LeaveStatus,
  LeaveRequest,
} from "../types/LeaveRequest";
import { AxiosError } from "axios";

export const useLeaves = (memberId?: number, status?: LeaveStatus) => {
  return useQuery({
    queryKey: ["leaves", memberId, status],
    queryFn: () => fetchLeaves(memberId, status),
  });
};

export const useCreateLeave = () => {
  const queryClient = useQueryClient();
  return useMutation<
    LeaveRequest,
    AxiosError<{ message: string }>,
    CreateLeaveRequest
  >({
    mutationFn: (dto: CreateLeaveRequest) => createLeave(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaves"] });
    },
  });
};

export const useUpdateLeaveStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: LeaveStatus }) =>
      updateLeaveStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaves"] });
      queryClient.invalidateQueries({ queryKey: ["oncall"] });
    },
  });
};
