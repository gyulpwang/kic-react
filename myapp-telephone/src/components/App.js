import React from 'react';
import Contact from './Contact'

class App extends React.Component{
  render(){
    return(
        <div>
          <h1>전화번호부</h1>
          {/* (1)
          <div>테스트 02-123-456</div>
          <div>스트테 02-234-567</div>
          <div>트테스 02-345-678</div>
          <div>스테트 02-456-901</div>
          <div>트스테 02-567-234</div>
          */}
          <Contact />
        </div>
    )
  }
}

export default App;