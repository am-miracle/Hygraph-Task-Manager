import { gql } from '@apollo/client';

export const Task = gql`
    query task($id: ID!) {
        tasks(where: {id: $id}) {
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
    mutation deleteTask($id: ID!) {
        deleteTask(where: {id: $id}) {
            id
            title
            description
            assignedTo
        }
    }
`

export const CREATE_TASK =  gql`
    mutation createTask($) {
        createTask(
            data: {assignedTo: $assignedTo1, description: $description1, title: $title1}
          ) {
            id
            title
            description
            assignedTo
        }
    }
`