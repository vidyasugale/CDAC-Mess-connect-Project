

const Registerpg = () => {
    return (
        <>
            <div className="container mt-5 p-3 border registerdiv" style={{ width: "60%" }}>
                <div className="" style={{ position: "relative", height: "5rem" }}>
                    <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
                        Register
                    </div>
                    <div className="smallFont zIndFront registerHeadIn" style={{}}>
                        Register
                    </div>
                </div>

                <form>
                    <div class="mb-3">
                        <label for="firstname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstname" aria-describedby="" required="true"/>

                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastname" aria-describedby="" />

                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required="true"/>

                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <label for="password" class="col-form-label">Password</label>
                        </div>
                        <div class="col-auto">
                            <input type="password" id="password" class="form-control" aria-describedby="passwordHelpInline" required="true" />
                        </div>
                        <div class="col-auto">
                            <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Address</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="mobile" class="form-label">Mobile no</label>
                        <input type="number" class="form-control" id="mobile" aria-describedby="" required="true" />
                    </div>
                    <div class="">
                        <label for="role" class="form-label">Role</label>
                        <select class="form-select" id="role" required="true" >
                            <option selected disabled value="">-- Select role --</option>
                            <option>Admin</option>
                            <option>Customer</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
            </div>

        </>
    )
}

export default Registerpg;