import React from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { SignIn } from './SignIn';
import { auth } from './firebaseConstants';


function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {user ? <div>Welcome!</div> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
