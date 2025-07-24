import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BBMApis = createApi({
    reducerPath: "BBMApis",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/wallet`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    // tagTypes: ["bankDetails", "userProfile"],
    endpoints: (builder) => ({
        burnToken: builder.mutation({
            query: (data) => ({
                url: "/burn-token",
                method: "POST",
                body: data
            }),
            // invalidatesTags: ["userProfile"]
        }),
        sellToken: builder.mutation({
            query: (data) => ({
                url: "/sell-token",
                method: "POST",
                body: data
            }),
            // invalidatesTags: ["userProfile"]
        }),
        // getTransactionData: builder.query({
        //     query: ({ page = 1, sizePerPage = 10, status = "", transactionType = "" }) => {
        //         const params = new URLSearchParams();
        //         params.append("page", page);
        //         params.append("sizePerPage", sizePerPage);
        //         if (status) params.append("status", status);
        //         if (transactionType) params.append("transactionType", transactionType);

        //         return `transaction/list?${params.toString()}`;
        //     }
        // }),
        // getUserProfile: builder.query({
        //     query: () => `/profile`,
        //     providesTags: ["userProfile"]
        // }),
        // getReferralList: builder.query({
        //     query: () => `/profile/referral/list`
        // }),
    })
})

export const {
    useBurnTokenMutation,
    useSellTokenMutation
} = BBMApis;