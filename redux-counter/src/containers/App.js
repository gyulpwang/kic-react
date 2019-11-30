
import React from 'react';//react.js(1)

//import Counter from '../components/Counter';
import CounterContainer from './CounterContainer';

// 최종적으로 스토어와 연결을 시켜주는 루트 컴포넌트
class App extends React.Component{
  
  render(){
    
    return(<div>
            <h1>Counter</h1>
            <CounterContainer />
           </div>
          )
  }
}

export default App;
