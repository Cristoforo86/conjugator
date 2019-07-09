import React, { Component, Fragment } from 'react';
import { 
ButtonDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem } from 'reactstrap';
import axios from 'axios';

export default class Dropdowns extends Component {

    constructor(props) {
        super(props);
    
        
        this.state = {
          dropdownOpen1: false,
        //   dropdownOpen2: false,
          dropdownOpen3: false,
        tempus: "present",
        verbs: []

        };
      }
      toggle1 = () => {
        this.setState({
          dropdownOpen1: !this.state.dropdownOpen1
        });
      }

    //   toggle2 = () => {
    //       this.setState({
    //           dropdownOpen2: !this.state.dropdownOpen2
    //       })
    //   }
      toggle3 = () => {
        this.setState({
            dropdownOpen3: !this.state.dropdownOpen3
        })
    }  

    getVerbs = async () => {
        const res = await axios.get(
            `http://localhost:5000/tempus/${this.state.tempus}`
        );
        console.log(res.data)
        this.setState({ verbs: res.data }, function(){
            console.log(this.state.verbs)
        });
      }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            tempus: e.target.value
        }, function (){
            this.getVerbs();
        })
        
    }


    render() {
        return (
<Fragment>
    <ButtonDropdown 
    className="buttonDropdown" isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
        <DropdownToggle caret color="primary">
        Tempus
        </DropdownToggle>
        <DropdownMenu onClick={this.onSubmit}> 
            <DropdownItem value="present"
           
            >present</DropdownItem>
            <DropdownItem value="past">past</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>

    {/* <ButtonDropdown className="buttonDropdown" 
        isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
        <DropdownToggle caret color="primary">
        Numerus
        </DropdownToggle>
        <DropdownMenu onClick={this.onSubmit}>
            <DropdownItem value="singular">singular</DropdownItem>
            <DropdownItem value="plural">plural</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown> */}

    <ButtonDropdown className="buttonDropdown"
        isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
        <DropdownToggle caret color="primary">
        Modus
        </DropdownToggle>
        <DropdownMenu onClick={this.onSubmit}>
            <DropdownItem value="indicative">indicative</DropdownItem>
            <DropdownItem value="subjunctive">subjunctive</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>



</Fragment>
        )
    }
}
