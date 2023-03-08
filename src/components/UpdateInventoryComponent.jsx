import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';

class UpdateInventoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cname: '',
            name:'',
            phno: '',
            location: '',
            qty:'',
            datein:''
        }
        // this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeCNameHandler = this.changeCNameHandler.bind(this);
        this.changePhNoHandler = this.changePhNoHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeQtyHandler = this.changeQtyHandler.bind(this);
        this.changeDateInHandler = this.changeDateInHandler.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
    }

    componentDidMount(){
        InventoryService.getInventoryById(this.state.id).then( (res) =>{
            let inventory = res.data;
            console.log(res.data);
            this.setState({
                // id: inventory.id,
                    cname: inventory.cname,
                    name: inventory.name,
                    phno : inventory.phno,
                    location : inventory.location,
                    qty : inventory.qty,
                    datein : inventory.datein 
            });
        });
    }

    updateInventory = (e) => {
        e.preventDefault();
        let inventory = {cname: this.state.cname,name:this.state.name, phno: this.state.phno, location: this.state.location, qty: this.state.qty,  datein: this.state.datein};
        console.log('inventory => ' + JSON.stringify(inventory));
        console.log('id => ' + JSON.stringify(this.state.id));
        InventoryService.updateInventory(inventory, this.state.id).then( res => {
            this.props.history.push('/inventory');
        });
    }
    
    // changeIdHandler= (event) => {
    //     this.setState({id: event.target.value});
    // }

    changeCNameHandler= (event) => {
        this.setState({cname: event.target.value});
    }

    changePhNoHandler= (event) => {
        this.setState({phno: event.target.value});
    }
    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }
    changeQtyHandler= (event) => {
        this.setState({qty: event.target.value});
    }
    changeDateInHandler= (event) => {
        this.setState({datein: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    cancel(){
        this.props.history.push('/inventory');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                <div className = "card-body">
                                    <form>
                                    {/* <div className = "form-group">
                                            <label> Id : </label>
                                            <input placeholder="Id" name="Id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler} />
                                        </div> */}
                                        <div className = "form-group">
                                            <label> CName : </label>
                                            <input placeholder="CName" name="cname" className="form-control" 
                                                value={this.state.cname} onChange={this.changeCNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Name : </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PhNo : </label>
                                            <input placeholder="PhNo." name="phno" className="form-control" 
                                                value={this.state.phno} onChange={this.changePhNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location : </label>
                                            <input placeholder="Location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity : </label>
                                            <input placeholder="Quantity" name="qty" className="form-control" 
                                                value={this.state.qty} onChange={this.changeQtyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DateIn : </label>
                                            <input placeholder="Date In" name="datein" className="form-control" 
                                                value={this.state.datein} onChange={this.changeDateInHandler}/>
                                        </div>
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.updateInventory}> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel</button>
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

export default UpdateInventoryComponent
