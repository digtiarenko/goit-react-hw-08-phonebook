import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    const result = await axios({ url: baseUrl + url, method, data, params });
    return { data: result.data };
    // Add error handling
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: 'contacts', method: 'GET' }),

      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: 'contacts',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// !!!

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://62b59b2d42c6473c4b362ae4.mockapi.io',
//   }),
//   tagTypes: ['Contacts'],

//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contacts'],
//     }),

//     addContact: builder.mutation({
//       query: value => ({
//         url: '/contacts',
//         method: 'POST',
//         body: value,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });
