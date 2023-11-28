import { Helmet } from "react-helmet-async";
import BookParcel from "../../Dashboard/Users/BookParcel/BookParcel";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import ToDeliveryMan from "../TopDeliveryMan/ToDeliveryMan";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Fast Food | Home</title>
      </Helmet>
            <Banner></Banner>
            <Features></Features>
            <ToDeliveryMan></ToDeliveryMan>
            <BookParcel></BookParcel>
        </div>
    );
};

export default Home;