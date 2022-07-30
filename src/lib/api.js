import { gql } from '@apollo/client';

export const Task = gql`
    query task {
        task(where: {id: $id}) {
            id
            title
            description
            assignedTo
        }
    }
`

export const ALL_TASK = gql`
    query allTask {
        tasks {
            id
            title
            description
            assignedTo
        }
    }
`

export const DELETE_TASK = gql`
    mutation deleteTask {
        deleteTask(where: {id: $id}) {
            id
            title
            description
            assignedTo
        }
    }
`