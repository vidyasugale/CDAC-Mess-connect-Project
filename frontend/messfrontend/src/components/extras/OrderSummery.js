import "./OrderSummery.css";
import Button from "../header/Button";
import Navbar2 from "../header/Navbar2";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";

const OrderSummery = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [orderList, setOrderList] = useState([]);
  // const [orderName, setOrderName] = useSate("");
  // const [orserPrice, setOrderPrice] = useSate("");


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="mt-3 d-flex align-items-center flex-wrap">
        <div className=" col-lg-5 col-md-5 col-12">
          <img src="../assets/thali_splash.png" className="summery-Img" />
        </div>
        <div className="col-lg-7 col-md-6 col-12 justify-content-end">
          <div className="summery-container">
            <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
              <div className="mt-1" style={{ position: "relative" }}>
                <div className="largeFont zIndBack headingLarge">
                  Order Summery
                </div>
                <div className="smallFont zIndFront headingSmall">
                  Order Summery
                </div>
              </div>
            </div>
            <div>
              <Button
                classname="btn btn-md mt-2 customBtn text-light"
                btnText={currentDate.toLocaleString()}
                clickType="button"
              />
              <div>
                <table className="table mt-1 table-head">
                  <thead>
                    <tr>
                      <th>Menu</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList &&
                      orderList.map((data) => (
                        <tr >
                          <td>{data.name}</td>
                          <td>{data.price}</td>
                        </tr>
                      ))}
                  </tbody>
                  <tbody className="table-end">
                    <tr >
                      <td>Total Sum</td>
                      <td>.rs</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSummery;
