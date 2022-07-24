import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    return 'students';
                },
                transformResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue.data;
                }
            }),
            getStudentsById: build.query({
                query(id) {
                    return `students/${id}`;
                },
                transformResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue.data;
                },
                keepUnusedDataFor: 60
            }),
            deleteStudent: build.mutation({
                query(id) {
                    return {
                        url: `students/${id}`,
                        method: 'delete',
                    }
                }
            }),
            addStudent: build.mutation({
                query(obj) {
                    return {
                        url: 'students',
                        method: 'post',
                        body: { data: obj },
                    }
                }
            }),
            updateStudent: build.mutation({
                query(obj) {
                    return {
                        url: `students/${obj.id}`,
                        method: 'put',
                        body: { data: obj.data },
                    }
                }
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