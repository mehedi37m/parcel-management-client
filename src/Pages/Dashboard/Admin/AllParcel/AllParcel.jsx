import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllParcel = () => {
  const [allCarts, setAllCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/itemsCart")
      .then((res) => res.json())
      .then((data) => setAllCarts(data));
  }, []);

  const handleMakeManage = (user) => {
    const updatedUser = { ...user, status: "On The Way" };

    fetch(`http://localhost:5000/itemsCart/onTheWay/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // Assuming your response structure includes a "modifiedCount" property
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.error("Failed to update status.");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">
        {" "}
        Total : {allCarts.length}
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Users Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Booking Date</th>
                <th>Delivery Date</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allCarts.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user?.delivery_date}</td>
                  <td>{user?.delivery_date}</td>
                  <td>{user.price}</td>
                  <td>
                    {user.status !== "pending" ? (
                      "On The Way"
                    ) : (
                      <button
                        onClick={() => handleMakeManage(user)}
                        className="btn btn-lg bg-orange-600"
                      >
                        <span className="text-white text-xl">manage </span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllParcel;
