const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Curso = require('./Curso')

const rootQuery = `
    type Query {
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
    }
    
    type Mutation {
        profesorAdd(profesor: NuevoProfesor): Profesor,
        profesorEdit(profesorId: Int!, profesor:ProfesorEditable): Profesor,
        profesorDelete(profesorId: Int!): Profesor,
        cursoAdd(curso: NuevoCurso):Curso,
        cursoEdit(cursoId: Int!, curso:CursoEditable): Curso
    }
  
`



const index = makeExecutableSchema({
    typeDefs: [rootQuery, Profesor, Curso],
    resolvers
})

module.exports = index