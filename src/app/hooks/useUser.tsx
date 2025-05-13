import { getUsers } from "@/services/user";
import {  useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};

export default useUser;
