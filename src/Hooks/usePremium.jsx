import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const usePremium = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isPremium, isPending: isPremiumLoading } = useQuery({
    queryKey: [user?.email, "isPremium"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/premium/${user.email}`);
    //   console.log(res.data);
      return res.data?.premium;
    },
  });
  return [isPremium, isPremiumLoading];
};

export default usePremium;
