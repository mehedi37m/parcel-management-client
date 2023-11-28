import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBook, FaUsers } from "react-icons/fa";


const Features = () => {

const [cards, setCards] = useState([]);

useEffect(() => {
    
},[])




    return (
        <div>
            <SectionTitle heading={'Our Features'} subHeading={'New Produce'}></SectionTitle>

            <div className="grid grid-cols-3 justify-items-center">
            <div className=" bg-slate-500 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    
                    <div className="flex justify-center text-8xl">
                    <CiDeliveryTruck></CiDeliveryTruck>
                    </div>
                    <h1 className=" text-4xl">10</h1>
                    <h1>Number of Parcel Booked</h1>
                </div>
                <div className=" bg-slate-500 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    
                    <div className="flex justify-center text-8xl">
                    <FaBook></FaBook>
                    </div>
                    <h1 className=" text-4xl">10</h1>
                    <h1>Number of Parcel Delivered</h1>
                </div>
                
                <div className=" bg-slate-500 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    <div className="flex justify-center text-8xl">
                    <FaUsers></FaUsers>
                    </div>
                    <h1 className=" text-4xl">10</h1>
                    <h1>Number of People Using Your App</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Features;