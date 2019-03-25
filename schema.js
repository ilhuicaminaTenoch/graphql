const { makeExecutableSchema } = require('graphql-tools')

// creamos los esquemas
const typeDefs = `
    # Esto es un curso del sistema
    type Curso {
        id: ID!
        titulo: String!
        
        # Esta es la descripcion del curso
        descripcion: String!
        profesor: Profesor
        rating: Float @deprecated(reason: "No creemos mas en los puntajes")
        comentario: [Comentario]
    }
    
    type Profesor {
        id: ID!
        nombre: String!
        nacionalidad: String!
        genero: Genero
        cursos: [Curso]
    }
    
    enum Genero {
        MASCULINO
        FEMENINO
    }
    
    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }
    
    type Query {
        cursos: [Curso]
        profesores:[Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
    }
`

const resolvers = {
    Query: {
        cursos:() => {
            return[{
                id: 1,
                titulo:'Curso de graphQL',
                descripcion: 'Aprendiendo graphQL',


            },{
                id: 2,
                titulo:'Curso de PHP',
                descripcion: 'Aprendiendo PHP',


            }]
        }
    },
    Curso:{
        profesor:() => {
            return{
                nombre:'Manijas',
            }
        },
        comentario:() =>{
            return[{
                id: 1,
                nombre: 'Comentario 1',
                cuerpo: 'Comentario 2'
            },{
                id: 2,
                nombre: 'Comentario 3',
                cuerpo: 'Comentario 4'
            }]
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

module.exports = schema