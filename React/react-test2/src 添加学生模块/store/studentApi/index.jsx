import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    tagTypes: ['students'],
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    return 'students';
                },
                transformResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue.data;
                },
                providesTags: [{
                    type: 'students',
                    id: 'List'
                }]
            }),
            getStudentsById: build.query({
                query(id) {
                    return `students/${id}`;
                },
                transformResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue.data;
                },
                providesTags: (result, error, id) => [{
                    type: 'students',
                    id
                }]
            }),
            deleteStudent: build.mutation({
                query(id) {
                    return {
                        url: `students/${id}`,
                        method: 'delete',
                    }
                },
                invalidatesTags: [{
                    type: 'students',
                    id: 'List'
                }]
            }),
            addStudent: build.mutation({
                query(obj) {
                    return {
                        url: 'students',
                        method: 'post',
                        body: { data: obj },
                    }
                },
                invalidatesTags: [{
                    type: 'students',
                    id: 'List'
                }]
            }),
            updateStudent: build.mutation({
                query(obj) {
                    return {
                        url: `students/${obj.id}`,
                        method: 'put',
                        body: { data: obj.data },
                    }
                },
                invalidatesTags: ((result, error, obj) => [
                    { type: 'students', id: obj.id },
                    { type: 'students', id: 'List' }
                ])
            })
        }
    }
})
export const {
    useGetStudentsQuery,
    useGetStudentsByIdQuery,
    useDeleteStudentMutation,
    useAddStudentMutation,
    useUpdateStudentMutation
} = studentApi
export default studentApi;