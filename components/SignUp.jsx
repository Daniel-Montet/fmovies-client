export default function SignUp(props) {
    return (
        <>
                        {/* <!-- Modal --> */}
                        <div className="modal modal1 fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-mdb-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="form-outline">
                                            <input type="text" id="form1" class="form-control" />
                                            <label class="form-label" for="form1">Full name</label>
                                        </div><div class="form-outline">
                                            <input type="text" id="form1" class="form-control" />
                                            <label class="form-label" for="form1">Username</label>
                                        </div>
                                        <div class="form-outline">
                                            <input type="text" id="form1" class="form-control" />
                                            <label class="form-label" for="form1">Email address</label>
                                        </div><div class="form-outline">
                                            <input type="text" id="form1" class="form-control" />
                                            <label class="form-label" for="form1">Password</label>
                                        </div>
                                        <div class="form-outline">
                                            <input type="text" id="form1" class="form-control" />
                                            <label class="form-label" for="form1">Confirm password</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">Back to Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}