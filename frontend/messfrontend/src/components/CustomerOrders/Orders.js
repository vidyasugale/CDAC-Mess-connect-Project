import {useEffect, useState} from "react"
import Footer from "../footer/Footer"
import Navbar2 from "../header/Navbar2"
import "../stylesheets/customerOrders.css"
import axiosConfig from "../../configs/axiosConfig"
import "../stylesheets/navbar.css"

const Orders = () => {
  const [data, setData] = useState([]);

  // const orderData = [
  //   {
  //     Order_id : 1,
  //     Thali : "Regular",
  //     Add_On : "Gulab Jamun",
  //     Amount : 90,
  //     Order_Date : "17/03/2023"
  //   },
  //   {
  //     Order_id : 2,
  //     Thali : "Egg Thali",
  //     Add_On : "Gajar Halwa",
  //     Amount : 110,
  //     Order_Date : "21/04/2023"
  //   },
  //   {
  //     Order_id : 3,
  //     Thali : "Special",
  //     Add_On : "Rice-Kheer",
  //     Amount : 120,
  //     Order_Date : "03/05/2023"
  //   },
  //   {
  //     Order_id : 4,
  //     Thali : "Regular",
  //     Add_On : "Gulab Jamun",
  //     Amount : 90,
  //     Order_Date : "10/05/2023"
  //   }
  // ]
  

  useEffect(() => {
    const getOrderSummery = async () => {
      const data = JSON.parse( sessionStorage.getItem("customerData"));
      const response = await axiosConfig.get(`/user/getuserorders/${data.id}`);
      console.log(response);
      const reverseData = response.data.reverse();
      setData(reverseData);
      
    }
    getOrderSummery();
  },[]);

    return(
        <>
        <Navbar2 homePath="/customer/home" />
        <div className="container orders mt-5 p-4 ps-5 pe-5 table-responsive">
        <table className="list table">
  <thead>
    <tr>
      <th className="ths" scope="col">Order No.</th>
      <th className="ths" scope="col">Thali</th>
      <th className="ths" scope="col">Add-Ons</th>
      <th className="ths" scope="col">Amount</th>
      <th className="ths" scope="col">Order Date</th>
      <th className="ths" scope="col">Order Time</th>
    </tr>
  </thead>
  <tbody>
    {data && data.map(data => {
      return(
        <>
            <tr>
      <th className="ths" scope="row">{data.orderId}</th>
      <td>{data.menuName}</td>

      <td>
      {
        (data.addonsNames.length > 0) ? data.addonsNames.map(addOn => <span>{addOn}, </span>) : <span>No AddOns</span>
      }
      </td>
      <td>{data.totalAmount}</td>
      <td>{data.orderDate}</td>
      <td>{(data.orderTime).slice(0,8)}</td>
    </tr>
        </>
      )
    })}
  </tbody>
</table>
        </div>
        <Footer />
        </>
    )
}

export default Orders;