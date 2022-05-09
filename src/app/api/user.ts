import { queryClient } from "../lib/react-query";

import { axios } from "../lib/axios";
import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";

export function getUserById(id: string) {
  return axios.get(`user/${id}`).then((response) => response.data);
}

export function getUsers(urlPath : string) {
  return axios.get(urlPath).then((response) => response.data);
}

export function createUser(data: any) {
  return axios.post("user/", data);
}

export function updateUser({ id, data }: { id: string; data: any }) {
  return axios.put(`user/${id}`, data);
}

export function deleteUser(id: string) {
  return axios.delete(`user/${id}`);
}

export function useGetUserById(id: string) {
  return useQuery ({ 
    queryKey: "user",
    queryFn: () => getUserById(id),
    enabled: !!id,
  })
}

export function useGetUsers() {
  return useQuery ({ 
    queryKey: "user",
    queryFn: () => getUsers("user"),
  })
}

export function useUpdateUser() {
  return useMutation({
    mutationFn: updateUser,
    mutationKey: "user"
  });
}

export function useCreateUser() {
  return useMutation({
    mutationFn: createUser,
    mutationKey: "user",
    onSuccess() {
      queryClient.invalidateQueries;
      toast.success("L'utilisateur a bien été enrégistrer");
    }
  });
}
