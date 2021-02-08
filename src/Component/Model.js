import React, { Component } from 'react';

class Model extends Component {  
     
    render() {
        console.log(this.props)
        return (
            <div className='container mt-3'>
                <div className="modal d-block mt-5" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">User Detail</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                   this.props.modelclose()

                                }}></button>
                        </div>
                        <div className="modal-body">
                        Name:
                        <input className='form-control' placeholder="Name" />
                        </div>
                        <div className="modal-body">
                        Mobile Number:
                        <input className='form-control' minLength="10" placeholder="Mobile No" />
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"  onClick={() => {
                                   this.props.modelclose()

                                }} >Submit</button>
                            <button type="button" className="btn btn-danger"  onClick={() => {
                                   this.props.modelclose()

                                }} >get Instant Callback</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}
export default Model;