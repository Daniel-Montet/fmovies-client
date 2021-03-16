import SignUp from "./SignUp";

export default function Login(props) {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                            Login
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="form-outline">
                                            <input type="text" id="form1" class="form-control" />
                                            <label class="form-label" for="form1">Email</label>
                                        </div><div class="form-outline">
                                            <input type="text" id="form1" class="form-control" />
                                            <label class="form-label" for="form1">Password</label>
                                        </div>
                                        <div class="form-helper">Forgot Password ?</div>
                                        <button type="button" className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">Join now!</button>
                                        <SignUp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
        </>
    )
}