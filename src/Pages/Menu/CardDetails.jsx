import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import BookParcel from "../Dashboard/Users/BookParcel/BookParcel";
import useAuth from "../../hooks/useAuth";


const CardDetails = () => {
  const allDetails = useLoaderData();
  const { id } = useParams();
 
   
 

  const card = allDetails.find((card) => card._id == id);

  const { _id, name, image_url, price, description } = card;

  const allComponent = {
 
    name,
    image_url,
    price,
    description,
  };

  const addToCart = () => {
    fetch("http://localhost:5000/itemsCart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allComponent),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log(result);
      });
  };

  return (
    <div className="h-screen md:h-[80vh]">
      <Helmet>
        <title>Fast Food || ItemsDetails</title>
      </Helmet>
      <div className=" p-20">
        <div className="card grid grid-cols-1 md:grid-cols-2 card-side  bg-base-100 shadow-xl mb-5">
          <div className="p-10 bg-slate-50 text-center">
            <h2 className=" font-bold mb-5 text-blue-900 text-3xl">{name}</h2>
            <p className="mb-5 text-blue-900">{description}</p>
            <p className="text-2xl">
              <span className="text-blue-900 font-bold">Price</span> : ${price}
            </p>

            {/* <p className='text-blue-900 font-bold pt-4'>Category : <span className='text-red-500'>{category}</span></p>
                  <p className='text-blue-900 font-bold '>Made By : <span className='text-red-500'>{made_by}</span>  </p>
                  <p className='text-blue-900 font-bold pb-4'>Food Origin : <span className='text-red-500'>{food_origin}</span>  </p> */}

            <button
              onClick={() => addToCart(allComponent)}
              className="btn btn-accent "
            >
              Add to Cart
            </button>
          </div>

          <img
            className="h-96 w-full rounded-r-lg"
            src={image_url}
            alt="Movie"
          />
        </div>
      </div>

      <BookParcel></BookParcel>
    </div>
  );
};

export default CardDetails;
