import React from 'react'

const Course = ( {course} ) => {
    return (
    <div>
        <Header course = {course.name} />
        <Content parts = {course.parts} />
    </div>
   )
}

const Header = ( {course} ) => {
    return (
        <div>
            <h1>{course}</h1>
        </div>
    )
}

const Part = ( {name, exercises} ) => {
    return (
        <div>
            <p>{name} {exercises}</p>
        </div> 
    )  
}
  
const Content = ( {parts} ) => {
    return (
        <div>
            <ul>
                {parts.map(part => 
                    <li key={part.id}>
                        <Part name = {part.name} exercises = {part.exercises}/> 
                    </li> )}
            </ul>
        </div>
    )
}

export default Course