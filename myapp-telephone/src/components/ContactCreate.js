import React from 'react';

export default class ContactCreate extends React.Component{

    // 생성자
    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        let nextState = {}  // 빈 객체
        // 형식) 객체명.속성명 = 객체[속성명]
        nextState[e.target.name] = e.target.value   // ex) nextState[name] = '홍길동'
        nextState[e.target.phone] = e.target.value

        this.setState(nextState)
    }

    handleClick(){
        // 부모 함수 호출하면서 임시로 저장한 state 값을 매개변수로 전달
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        }
        
        this.props.onCreate(contact)    // 추가(handleCreate(contact))
        
        // 입력하고 나서 초기화
        this.setState({
            name: '',
            phone: ''
        })
    }

    handleKeyPress(e){  // e.charCode함수를 이용(13 : enter)
        if(e.charCode === 13){   // enter
            this.handleClick()  // 입력버튼
        }
    }

    render(){
        return(
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="이름입력"
                           value={this.state.name}
                           onChange={this.handleChange}
                    />
                    <input type="text"
                           name="phone"
                           placeholder="전번입력"
                           value={this.state.phone}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress.bind(this)}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}