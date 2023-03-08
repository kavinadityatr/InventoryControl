import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

class CreateInventoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,

            cname: '',
            name:'',
            phno: '',
            location: '',
            qty:'',
            datein:''
        }
        
        this.changecnameHandler = this.changecnameHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changephnoHandler = this.changephnoHandler.bind(this);
        this.changelocationHandler = this.changelocationHandler.bind(this);
        this.changeqtyHandler = this.changeqtyHandler.bind(this);
        this.changedateinHandler = this.changedateinHandler.bind(this);
        this.saveOrUpdateinventory = this.saveOrUpdateinventory.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            InventoryService.getInventoryById(this.state.id).then( (res) =>{
                let inventory = res.data;
                this.setState({
                    // id: inventory.id,
                    cname: inventory.cname,
                    Name: inventory.name,
                    phno : inventory.phno,
                    location : inventory.location,
                    qty : inventory.qty,
                    datein : inventory.datein 
                });
            });
        }        
    }
    saveOrUpdateinventory = (e) => {
        e.preventDefault();
        let inventory = {cname: this.state.cname, name: this.state.name, phno: this.state.phno, location: this.state.location, qty: this.state.qty,  datein: this.state.datein };
        console.log('inventory => ' + JSON.stringify(inventory));

        // step 5
        if(this.state.id === '_add'){
            InventoryService.createInventory(inventory).then(res =>{
                this.props.history.push('/inventory');
            });
        }else{
            InventoryService.updateinventory(inventory, this.state.id).then( res => {
                this.props.history.push('/inventory');
            });
        }
    }
    
    // changeIdHandler= (event) => {
    //     this.setState({id: event.target.value});
    // }

    changecnameHandler= (event) => {
        this.setState({cname: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changephnoHandler= (event) => {
        this.setState({phno: event.target.value});
    }
    changelocationHandler= (event) => {
        this.setState({location: event.target.value});
    }
    changeqtyHandler= (event) => {
        this.setState({qty: event.target.value});
    }
    changedateinHandler= (event) => {
        this.setState({datein: event.target.value});
    }

    cancel(){
        this.props.history.push('/inventory');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center p-4 m-2 text-info">Add</h3>
        }else{
            return <h3 className="text-center p-4 m-2 text-info">Update</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        {/* <div className = "form-group">
                                            <label> Id : </label>
                                            <input placeholder="Id" name="Id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                        </div> */}
                                        <div className = "form-group">
                                            <label> CName : </label>
                                            <input placeholder="cname" name="cname" className="form-control" 
                                                value={this.state.cname} onChange={this.changecnameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Name : </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PhNo : </label>
                                            <input placeholder="phno." name="phno" className="form-control" 
                                                value={this.state.phno} onChange={this.changephnoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location : </label>
                                            <input placeholder="location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changelocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity : </label>
                                            <input placeholder="Quantity" name="qty" className="form-control" 
                                                value={this.state.qty} onChange={this.changeqtyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DateIn : </label>
                                            <input placeholder="Date In" name="datein" className="form-control" 
                                                value={this.state.datein} onChange={this.changedateinHandler}/>
                                        </div>
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.saveOrUpdateinventory}><BsCheckCircleFill/> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><BsFillXCircleFill/> Cancel</button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateInventoryComponent
