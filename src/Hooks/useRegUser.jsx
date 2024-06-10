import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRegUser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: regUser = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["regUser"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

  return [regUser, loading, refetch];
};

export default useRegUser;
