import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import ContactCreate from './ContactCreate';
// 배열의 추가, 수정, 삭제 -> update 함수를 이용
import update from 'react-addons-update';

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {  // {}객체 []배열
            keyword: '',    // 검색어를 기억할 속성
            selectedKey: -1,    // 항목의 인덱스 번호 구분
            contactData:[
                {name: '김유리', phone: '02-123-456'}, 
                {name: '이수지', phone: '02-234-567'}, 
                {name: '박태정', phone: '02-345-678'}, 
                {name: '정슬기', phone: '02-567-234'},
                {name: '최규식', phone: '02-456-901'}
            ]
        }

        this.handleChange = this.handleChange.bind(this);   // 수동
        this.handleClick = this.handleClick.bind(this);
        this.handleCreate = this.handleCreate.bind(this);   // 추가
        this.handleRemove = this.handleRemove.bind(this);   // 삭제
        this.handleEdit = this.handleEdit.bind(this);       // 수정
    }

    // -------------------------------------------------------------------------------- //
    handleCreate(contact){  // 배열의 키명, 매개변수만 변경 가능
        this.setState({ // 1. 데이터 넣어줄 대상자, 2. $push를 이용([]로 묶어줌)
            contactData:update(this.state.contactData, {$push:[contact]})   // contactData 배열에 매개변수로 받은 contact 데이터를 넣어주겠다
        })
    }

    handleRemove(){                 
        // 선택하지 않았다면 삭제 X
        if(this.state.selectedKey < 0){
            return; // 탈출문 -> 문장을 안 쓰면 else로 묶어줘야 된다.
        }
        
        this.setState({ // 1. 데이터 삭제할 대상자, 2. $splice를 이용([]로 묶어줌)
                        // 문법) $spcie[1.삭제할 대상항목의 인덱스 번호, 2. 삭제할 갯수]
                        // ex) {$splice:[[0, 1]]}   // 배열의 0번째 삭제
                        // ex) {$splice:[[0, 2]]}   // 배열의 0, 1번째 삭제(2개)
            contactData:update(this.state.contactData, {$splice:[[this.state.selectedKey, 1]]}),
            selectedKey: -1  // 추가로 삭제한 후 다음 번 삭제할 때
        })
    }

    handleEdit(name, phone){
        this.setState({ // 1. 데이터 수정할 대상자, 2. $set을 이용([]로 묶어줌)
            contactData:update(this.state.contactData,
                {   // 1. 수정할 항목의 인덱스 번호
                    [this.state.selectedKey]:{
                        // 2. 배열의 키명:{$set:수정할 값}
                        name:{$set:name},
                        phone:{$set:phone}  // , addr:{$set:addr},,
                    }
                })
        })
    }
    // -------------------------------------------------------------------------------- //

    // 검색어 입력 -> keyword 저장
    handleChange(e){    // event 객체
        this.setState({ // jQuery의 $(this)와 같은 기능 = event.target(이벤트발생객체)
            keyword: e.target.value
        })
    }

    handleClick(key){
        this.setState({
            selectedKey: key
        })
        console.log(key, 'is selected!')
    }

// -------------------------------------------------------------------------------- //
    // 크롬 > Application > Local Storage(DB)를 만드는 과정
    // cf. Local Storage에 저장되는 데이터는 모두 문자열임.
    // DB에 저장된 데이터 가져와서 화면에 출력
    componentWillMount(){
        // const 변수명 = localStorage.불러올키명
        const contactData = localStorage.contactData
        if(contactData){
            this.setState({
                contactData: JSON.parse(contactData)    // 문자열 -> 배열 객체 변환
            })
        }

        console.log('componentWillMount() 호출됨!')
    }

    // 화면에 수정(추가, 수정, 삭제할 때) 호출
    componentDidUpdate(prevProps, prevState){
        // 여기선 저장 목적이기 때문에 prevState가 중요
        // DB상의 데이터와 화면상의 데이터가 다르면
        // JSON.stringify(객체) : 객체 -> 문자열로 변환
        // JSON.parse(문자열) : 문자열 -> 객체로 변환
        if(JSON.stringify(prevState.contactData) !== JSON.stringify(this.state.contactData)){
            // 형식) localStorage.동적키명 = 저장할 값(문자열로 변환)
            localStorage.contactData = JSON.stringify(this.state.contactData)
        }

        console.log('componentDidUpdate() 호출됨!')
    }
// -------------------------------------------------------------------------------- //

    render(){
        // 화살표함수를 이용해서 배열의 요소 분리 -> 인덱스별로 출력
        const mapToComponents = (data) => { // data(배열 전체)[{}]
            // ------------------------------------------------------------ //
            //data = data.sort()    // 데이터 정렬
            // 각 배열의 요소를 하나씩 읽어들여서 검색어와 비교
            data = data.filter((contact) => {
                // 못 찾으면 -1을 리턴
                return contact.name.indexOf(this.state.keyword) > -1
            })
            // ------------------------------------------------------------ //
           return(
               data.map((contact, i) => {   // (배열의 항목, 인덱스 번호)
                    // 같은 태그 구분 인덱스 번호(key) 내부적인 구분자
                    //console.log(contact, ' -> ', i)
                    return (<ContactInfo 
                                contact={contact}
                                key={i} 
                                onClick={()=>{this.handleClick(i)}} // ContactInfo.js에서는 key를 받아오기가 쉽지 않아 여기서 매개변수 없는 익명함수를 통해 i 값을 넘김으로써 처리한다.
                            />)
               })
           ) 
        }

        return(
            <div>
                <input name="keyword"
                       placeholder="search"
                       value={this.state.keyword}
                       onChange={this.handleChange}
                />
                <div>
                    {mapToComponents(this.state.contactData)}
                    <ContactDetail isSelected={this.state.selectedKey !== -1}
                                   contact={this.state.contactData[this.state.selectedKey]}
                                   onRemove={this.handleRemove}
                                   onEdit={this.handleEdit}
                    />
                    <ContactCreate onCreate={this.handleCreate} />
                    {/* (1) ContactInfo
                    <div>테스트 02-123-456</div>
                    <div>스트테 02-234-567</div>
                    <div>트테스 02-345-678</div>
                    <div>스테트 02-456-901</div>
                    <div>트스테 02-567-234</div> */}
                </div>
            </div>
        )
    }
}

export default Contact;