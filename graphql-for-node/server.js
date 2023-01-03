const path= require('path')
const express=require('express');
const {buildSchema} =require('graphql')
const {graphqlHTTP} = require('express-graphql')
const {makeExecutableSchema} =require('@graphql-tools/schema')
 const  {loadFilesSync} =require('@graphql-tools/load-files')


 const typeArray=loadFilesSync(path.join(__dirname, '/**/*.graphql'))
 const resolversArray=loadFilesSync(path.join(__dirname, '/**/*.resolvers.js'))

const schema=makeExecutableSchema({
    typeDefs: typeArray,
    resolvers:resolversArray
})

const app=express()

app.use(graphqlHTTP({
    schema: schema,
    graphiql: true,

}))


app.listen(3001,()=>{
    console.log('listening on..')
})


