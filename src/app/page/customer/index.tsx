import { useGetUsers } from "../../../app/api/user"
import React from "react"

export default function Customer() {
  const { data, isLoading } = useGetUsers();
  console.log("data", data);
  return (
    <div>Customer</div>
  )
}
