import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.7:8080' }), 
  tagTypes : ['Courses'],
  endpoints: (builder) => ({

    getAll : builder.query({
      query: () =>({
       url: `/courses`,
       method:'GET',
      }),
      providesTags :['Courses']
   }),

   getById : builder.query({
    query: (id) =>({
     url: `/courses/${id}`,
     method:'GET',
    }),
    providesTags :['Courses']
 }),

    AddUser: builder.mutation({
      query: (formStateData) => ({
        url: '/courses', 
        method: 'POST',
        body: formStateData,
      }),
      invalidatesTags: ['Courses']
    }),
 
    deleteId: builder.mutation({
      query: (courseId) => ({
        url: `/courses/${courseId}`, 
        method: 'DELETE',
      }),
      invalidatesTags: ['Courses']
    }),

    EditUser: builder.mutation({
      query: ({courseId, formStateData}) => ({
        url: `/courses/${courseId}`, 
        method: 'PUT',
        body: {formStateData},
      }),
      invalidatesTags: ['Courses']
    }),

    
  }),
});

export const { useAddUserMutation,useGetByIdQuery,  useGetAllQuery ,useDeleteIdMutation  , useEditUserMutation} = authApi;
