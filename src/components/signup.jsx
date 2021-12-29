export const Signup = () => {
    return (
        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control mb-3" id="recipient-name" placeholder="Full Name" />
                                <input type="text" className="form-control mb-3" id="recipient-name" placeholder="Email" />
                                <input type="text" className="form-control mb-3" id="recipient-name" placeholder="Password" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};