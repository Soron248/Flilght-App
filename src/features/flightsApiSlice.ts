import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flightsApi = createApi({
  reducerPath: "flightsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3",
  }),
  endpoints: (builder) => ({
    getAllFlightsData: builder.query({
      query: () => "/launches",
    }),
    getSingleFlightData: builder.query({
      query: (flight_number) => `/launches/${flight_number}`,
    }),
  }),
});

export const { useGetAllFlightsDataQuery, useGetSingleFlightDataQuery } =
  flightsApi;
