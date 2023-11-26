import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Menu = () => {
    const {setLoading} = useAuth();

const [cards, setCards] = useState([])
console.log(cards)

useEffect(() =>{
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(data => setCards(data))
},[])




const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/items/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setLoading(true);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };


    return (
        <div >
            <SectionTitle heading={'All Menu List'} subHeading={'Fast Food'}></SectionTitle>
            {cards.length}

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    cards.map(card=><div key={card._id}>

<div className="card card-compact h-[450px] glass w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64 w-full' src={card.image_url} alt="Food" /></figure>
  <div className="card-body">
    <div data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <h2 className="card-title text-2xl font-bold">{card.name}</h2>
    <p className='text-xl font-bold text-blue-900 '>{}</p>
    <p className='text-xl font-bold text-blue-900 '>Stock : {}</p>
    <p className='text-2xl font-bold'> Price : ${card.price}</p>
    </div>
    <div className="card-actions justify-start">
     <Link to={`/details/${card._id}`}> <button className="btn btn-primary">Details</button></Link>
     <Link to={`/updateItems/${card._id}`}> <button className="btn btn-primary">update</button></Link>
     <button onClick={() => handleDelete(card._id)} className="btn btn-accent btn-xs" >
                    X
    </button>
    </div>
  </div>
</div>

                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Menu;