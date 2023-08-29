import React, { useState } from 'react'

const MenuCard = ({ menu, onSelect }) => {
    const [selectedMenuId, setSelectedMenuId] = useState(null);

    const handleMenuChange = (event) => {
      const selectedId = event.target.value;
      setSelectedMenuId(selectedId);
      onSelect(selectedId); // Pass the selected menuId to the parent component
    };

    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="../assets/thali.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{menu.name}</h5>
                            <p className="card-text">
                                Delight your taste buds with the rich and creamy {menu.mainCourse.name}, accompanied by soft and fluffy {menu.bread.name}.The thali also features the hearty and savory {menu.curry.name}, adding depth to your meal. The thali also includes fragrant {menu.rice.name} to perfectly complement the flavors. Top off your meal with the delectable sweetness of {menu.sweet.name}, making your dining experience truly memorable.
                                Price : Rs.{menu.price}
                            </p>

                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">

                        <label>
                            <input type="radio" name="option" value={menu.id} onChange={handleMenuChange} /> menu {menu.id}
                        </label>



                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuCard
