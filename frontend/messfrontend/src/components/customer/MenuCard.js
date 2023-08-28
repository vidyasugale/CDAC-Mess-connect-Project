import React from 'react'

const MenuCard = () => {
    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="../assets/thali.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">

                        <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
                        <label class="btn" style={{color:"#e26d00"}} for="danger-outlined">select</label>


                    </div>
                </div>
            </div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="../assets/thali.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">

                        <input type="radio" class="btn-check" name="options-outlined" id="selectMenu2" autocomplete="off" />
                        <label class="btn" style={{color:"#e26d00"}} for="selectMenu2">select</label>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuCard
