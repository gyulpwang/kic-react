
import React from 'react';//react.js(1)

class App extends React.Component{
  // 속성초기화
  constructor(props){
    super(props)
    this.state = {
      data:0  // this.setState(5)
    }
    this.setNewNumber = this.setNewNumber.bind(this)
    console.log('constructor 호출됨!')
  }

  // 증기
  setNewNumber(){
    if(this.state.data > 10){
      alert('더 이상 증가시킬 수 없음!')
      return;
    }else{
      this.setState({data: this.state.data + 1})
    }
  }

  // 증기
  setDownNumber(){
    if(this.state.data < -10){
      alert('더 이상 감소시킬 수 없음!')
      return;
    }else{
      this.setState({data: this.state.data - 1})
    }
  }

  render(){
    console.log('App의 render() 호출(화면 디자인 출력)')
    return(<div>
            <h1>{this.state.data}</h1>
            <button onClick={this.setNewNumber}>증가</button>
            <button onClick={this.setDownNumber.bind(this)}>감소</button>
            <Content myNumber={this.state.data} />
           </div>
          )
  }
}

// 중첩(LifeCycle)
class Content extends React.Component{
  // 1. 화면에 보여주는 부분
  componentWillMount(){ // 화면에 보여주기 직전에 호출되는 부분
    console.log('컴포넌트가 DOM과 연결되기 전에 호출(componentWillMount)')
  }

  componentDidMount(){ // 화면에 보여주기 직전에 호출되는 부분
    console.log('컴포넌트가 DOM과 연결된 후에 호출(componentDidMount)')
  }

  render(){
    console.log('Content 클래스의 화면에 보여주는 역할')
    return(
      <div>
        {this.props.myNumber < -10 ? <h3>더 이상 감소시킬 수 없음!</h3>
                                   : this.props.myNumber < 10 ? <h3>{this.props.myNumber}</h3>
                                                              : <h3>더 이상 증가시킬 수 없음!</h3>}
      </div>
    )
  }

  // 
  shouldComponentUpdate(newProps, newState){
    // 내부적으로 값이 변경 -> 화면에 반영 -> render() 호출(like 새로고침)
    console.log('return false이면 render() 호출 X')
    return false;  // default return값이 true
                   // return false로 지정하면 실제론 값이 변화되고 있으나 render를 호출하지 못해 출력이 안됨
                   // 새로고침의 키는 shouldComponentUpdate가 쥐고 있다고 보면 된다!
  }

  // 화면에 보여준 뒤에 수정 전
  componentWillUpdate(){
    console.log(`수정 전에(componentWillUpdate)`)
  }
  
  // 화면에 보여준 뒤에 수정 후
  componentDidUpdate(){
    console.log(`수정 후(componentDidUpdate)`)
  }

  // 새로운 props 값을 받았을 때 호출
  componentWillReceiveProps(newProps){
    console.log(`newProps 값을 받았을 때 호출 ${newProps}`)
  }
}

export default App;
