import React, { Component } from 'react'
import InventoryService from '../services/InventoryService'
import { Link } from 'react-router-dom'
class ViewInventoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            inventory: {}
        }
    }

    componentDidMount(){
        // window.alert(this.state.id);
        InventoryService.getInventoryById(this.state.id).then( res => {
            this.setState({inventory: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 cardshadow3 mt-5">
                    <h3 className = "text-center mt-3 text-primary"> View  Details</h3>
                    <div className = "card-body">
                        <div className="row">
                                <div className="col-7">

                                        {/* <div className = "row">
                                            <label>Id : </label>
                                            <div className='ml-2'> { this.state.inventory.id }</div>
                                        </div> */}
                                        <div className = "row">
                                            <label>CName : </label>
                                            <div className='ml-2'> { this.state.inventory.cname }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Name : </label>
                                            <div className='ml-2'> { this.state.inventory.name }</div>
                                        </div>
                                        <div className = "row">
                                            <label>PhNo : </label>
                                            <div className='ml-2'> { this.state.inventory.phno }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Location : </label>
                                            <div className='ml-2'> { this.state.inventory.location }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Quantity : </label>
                                            <div className='ml-2'> { this.state.inventory.qty }</div>
                                        </div>
                                        <div className = "row">
                                            <label>DateIn : </label>
                                            <div className='ml-2'> { this.state.inventory.datein }</div>
                                        </div>
                                </div>
                        </div>
 
                    </div>
                    
                    <Link to='/' className='btn btn-primary mt-2 mb-4'>Back</Link>

                </div>
            </div>
        )
    }
}

export default ViewInventoryComponent
