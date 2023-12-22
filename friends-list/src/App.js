import React from '.cache/default-development/person-list/friends-list/node_modules/@types/react'
import '.cache/default-development/person-list/friends-list/src/App.css'

const person = () => {
  return <div>i'm aperson component</div>
}
const PersonList = () => {
  return <person></person>
}
const App = () => <PersonList />
export default App
