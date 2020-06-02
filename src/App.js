import React from 'react'
import { db, auth } from './services/firebase'

class App extends React.Component {
  state = { 
    user: null
  }
  componentDidMount(){
    console.log('mounted')
    db.collection('user')
      .get()
      .then( snapshot => {
        const user = []
        snapshot.forEach( doc =>{
          const data = doc.data()
          user.push(data)
        })
        this.setState({user: user})
       // console.log(snapshot)
      })
      .catch( error => console.log(error))
  }
  render(){
    return(
      <div className="App">
        <h1> Order System</h1>
        {
          this.state.user &&
          this.state.user.map(user => {
            return(
              <div>
                <p>{user.name} - {user.surName}</p>
                <p>phoneNo {user.phoneNo}</p>
                </div>
            )
          })
        }
      </div>
    )
  }
}

export default App