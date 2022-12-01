import React from "react";
import {
  useGetAllFlightsDataQuery,
  useGetSingleFlightDataQuery,
} from "../features/flightsApiSlice";
const Home: React.FC = () => {
  const { data } = useGetSingleFlightDataQuery(70);
  console.log(data);
  return <div>Home</div>;
};

export default Home;
