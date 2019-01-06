import React, { Component } from 'react'
import FormUserDetail from './FormUserDetail'
import FormPersonalDetail from './FormPersonalDetail'
import Confirm from './Confirm'

export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:'',
    }


    //proceed to next step

    nextStep = ()=>{
        const {step} = this.state;
        this.setState({
            step:step+1,
        })
    }

    //prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };

    //handel Field change

    handleChange = input => e =>{
        this.setState({[input]:e.target.value})
    }

  render() {

    const {step} = this.state;
    const {firstName,lastname,email,occupation,city,bio} = this.state;
    const values = {firstName,lastname,email,occupation,city,bio}

    switch(step){
        case 1:
        return(
            <FormUserDetail
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
            />
        )

        case 2: return (
            <FormPersonalDetail
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
            prevStep = {this.prevStep}
            />
        )
        case 3: return (
            <Confirm
            values = {values}
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            />
        )
        case 4: return <h1>Sucess Done</h1>
        default: return(<div/>)
    }
  }
}

export default UserForm
