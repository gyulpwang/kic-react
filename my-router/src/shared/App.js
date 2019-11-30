// 모든 요청경로의 루트 컴포넌트 역할 -> 하위 컴포넌트로 이동
import React,{Component} from 'react';

// {클래스의 별칭명} from '특정폴더명'
import {Route, Switch} from 'react-router-dom'; // 라우팅하기 위해 필요
import {Home, About, Posts} from 'pages';
import Menu2 from 'components/Menu2';

class App extends Component{
  render(){
    return(<div>
            <Menu2 />
            {/* Hello React-Router
            path="요청경로" component={화면에 출력할 컴포넌트}
            
            exact : 정확히 그 path만 찾는다
            => exact 안 붙여주면 /about 할때 /을 거쳐서 가기 때문에
            home과 about 모두 출력됨

            ex. exact /about      -> About
                      /about/test -> Test(정해진 경로를 추가한 경우)
            */}
            <Route exact path="/" component={Home} />
            {/* 뒤에 매개변수가 동적일 경우 Switch문으로 묶은 후,
            매개변수가 없는 항목을 뒤로 보내는 순으로 배치한다.*/}
            <Switch>
              <Route path="/about/:name" component={About} />
              <Route exact path="/about" component={About} />
            </Switch>
            <Route path="/posts" component={Posts} />
           </div>
          )
  }
}
export default App;