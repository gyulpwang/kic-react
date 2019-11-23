import React from 'react';

class ContactInfo extends React.Component{
  render(){
    // this.props.contactData의 구성.속성명
    // (this.props.onClick) -> handleClic(0~n)
    return(
        <div onClick={this.props.onClick}>
          {this.props.contact.name}
        </div>
    )
  }
}

export default ContactInfo;