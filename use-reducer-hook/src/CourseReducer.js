import React from 'react'

const CourseReducer = (state, action) => {
    switch (action) {
        case "react":
            return { REACT: true }
        case "nodeJS":
            return { NODEJS: true }
        case "mongoDB":
            return { MONGODB: true }
        default:
            return new Error('Invalid Action');
    }
}

export default CourseReducer