import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';
import { BsFillTrashFill,BsPencilFill,BsFillEyeFill,BsFillPlusCircleFill } from "react-icons/bs";

class ListInventoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                inventories: []
        }
        this.addInventory = this.addInventory.bind(this);
        this.editInventory = this.editInventory.bind(this);
        this.deleteInventory = this.deleteInventory.bind(this);
    }

    deleteInventory(id){
        InventoryService.deleteInventory(id).then( res => {
            this.setState({inventories: this.state.inventories.filter(inventory => inventory.id !== id)});
        });
    }
    viewInventory(id){
        this.props.history.push(`/view/${id}`);
    }
    editInventory(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
        InventoryService.getInventory().then((res) => {
            this.setState({ inventories: res.data});
        });
    }

    addInventory(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div id="all">
                 
                 <br></br>
                 <div className = "card p-5 row cardshadow3">
                        <table className = "table table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th className='text-center'> CName</th>
                                    <th className='text-center'> Name</th>
                                    <th className='text-center'> PhNo</th>
                                    <th className='text-center'> Location</th>
                                    <th className='text-center'> Quantity</th>
                                    <th className='text-center'> DateIn</th>
                                    <th className='text-center'> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.inventories.map(
                                        (inventory) => 
                                        <tr key = {inventory.id}>
                                        
                                             {/* <td> {inventory.id} </td>    */}
                                             <td> {inventory.cname} </td>
                                             <td> {inventory.name} </td>
                                             <td> {inventory.phno} </td>
                                             <td> {inventory.location} </td> 
                                             <td> {inventory.qty} </td> 
                                             <td> {inventory.datein} </td>    
                                             <td className='text-center'>
                                                 <button onClick={ () => this.viewInventory(inventory.id)} className="btn-hover btn-hover-x color-1"><BsFillEyeFill/></button>
                                                 <button onClick={ () => this.editInventory(inventory.id)} className="ml-2 btn-hover btn-hover-x color-7"><BsPencilFill/></button>
                                                 <button onClick={ () => this.deleteInventory(inventory.id)} className="ml-2 btn-hover btn-hover-x color-11"><BsFillTrashFill/> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className = "row mt-4">
                    <button className="btn btn-primary pt-2 pb-2 float-right" onClick={this.addInventory}><BsFillPlusCircleFill/>  Add </button>
                 </div> 

                 </div>

            </div>
        )
    }
}

export default ListInventoryComponent
