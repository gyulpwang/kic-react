import React from 'react';

class ContactInfo extends React.Component{
  render(){
    // this.props.contactData의 구성.속성명
    return(
        <div>
          {this.props.contact.name} {this.props.contact.phone}
        </div>
    )
  }
}

export default ContactInfo;