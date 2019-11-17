import React from 'react';
import ContactInfo from './ContactInfo';

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contactData:[{
                name: '테스트',
                phone: '02-123-456'
            }, {
                name: '테스트',
                phone: '02-234-567'
            }, {
                name: '트테스',
                phone: '02-345-678'
            }, {
                name: '스테트',
                phone: '02-456-901'
            }, {
                name: '트스테',
                phone: '02-567-234'
            }]
        }
    }

    render(){
        // 화살표함수를 이용해서 배열의 요소 분리 -> 인덱스별로 출력
        const mapToComponents = (data) => { // data(배열 전체)
           return(
               data.map((contact, i) => {   // (배열의 항목, 인덱스 번호)
                    console.log(contact, ' -> ', i)
                    return (<ContactInfo contact={contact} key={i} />)
               })
           ) 
        }

        return(
            <div>
                {mapToComponents(this.state.contactData)}
                {/* (1) ContactInfo
                <div>테스트 02-123-456</div>
                <div>스트테 02-234-567</div>
                <div>트테스 02-345-678</div>
                <div>스테트 02-456-901</div>
                <div>트스테 02-567-234</div>
                */}
            </div>
        )
    }
}

export default Contact;