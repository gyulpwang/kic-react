import React from 'react';

export default class ContactDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isEdit:false,   // 편집유무 체크
            name: '',
            phone: ''
        }

        this.handleToggle = this.handleToggle.bind(this)
        this.handleChange = this.handleChange.bind(this)    // 자식입장 -> 수정
        this.handleEdit = this.handleEdit.bind(this)
    }

    // 토글 기능
    handleToggle(){
        // 글 상세보기로 넘어온 name, phone
        if(!this.state.isEdit){
            this.setState({
                name:this.props.contact.name,
                phone:this.props.contact.phone
            })
        }else{    // 데이터 수정하고 나서 OK버튼을 누른 경우 -> Edit
            this.handleEdit()   // this.props.onedit(this.state.name~)
        }

        this.setState({
            isEdit: !this.state.isEdit
        })

        console.log(!this.state.isEdit)    // 현재 바뀐 값이 출력
                                           // Javascript의 alert처럼 console이 setState보다 우선순위가 높아서 부정한 값을 세팅해주는 것
    }

    // 수정되게 하기 위해서
    handleChange(e){
        let nextState = {}  // 빈 객체
        // 형식) 객체명.속성명 = 객체[속성명]
        nextState[e.target.name] = e.target.value   // ex) nextState[name] = '홍길동'

        this.setState(nextState)
    }

    // 부모함수를 호출
    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone)
    }

    render(){
        // 화면디자인에 따라서 영역을 구분할 수 있도록 변수 선언(selectedKey)
        // 클릭한 항목을 전달(this.props를 이용)
        const details = (<div>
                            <p>{this.props.contact.name}</p>
                            <p>{this.props.contact.phone}</p>
                        </div>) // 단순히 보여주는용
        const edit = (<div>
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
                            />
                        </p>
                      </div>)   // 수정하는용
        
        // 버튼만 토글 기능 부여
        const view = this.state.isEdit ? edit : details;    // 중요1

        const blank = (<div>Not Selected!</div>)

        return(
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}  {/* 중요2) details -> view */}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? 'OK' : 'Edit'} {/* 중요3 */}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        )
    }
}

// 처음에는 선택할 수가 없기에 초기값을 설정
ContactDetail.defaultProps = {
    contact: {
        name: '',
        phone: '' 
    }
}