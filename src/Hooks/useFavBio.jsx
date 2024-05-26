import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const useFavBio = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { refetch, data: favBio = [] } = useQuery({
    queryKey: ["favBio", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/favoriteBiodatas?email=${user.email}`
      );
      return res.data;
    },
  });
  return [favBio, refetch];
};

export default useFavBio;
