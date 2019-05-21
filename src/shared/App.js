import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About,Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render(){
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home}/>
                {/* exact의 경우 반드시 주어진 경로와 맞아야 설정한 컴포넌트를 보여준다.  */}
                <Switch>
                <Route path="/about/:name" component={About}/>
                <Route path="/about" component={About}/>
                {/* Switch 로 감싸서 컴포넌트 중복 출력을 방지할 수 있다. 위에서부터 차례대로 적용 */}
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        )
    }
}


export default App;