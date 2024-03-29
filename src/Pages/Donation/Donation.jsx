import { useEffect, useState } from "react";
import { getDonationFromLS } from "../../utils/localstorage";
import { useLoaderData } from "react-router-dom";
import DonateItem from "../../Components/DonateItem";



const Donation = () => {
    const data = useLoaderData();
    const [donations, setDonations] = useState([]);
    console.log(donations)

    useEffect(() => {
        const getDonations = getDonationFromLS();
        if(data.length > 0 ) {
            const donation = data.filter(item => getDonations.inclueds(item.id ));
            setDonations(donation);
        }

    },[data]);

    return (
        <>
            { donations.map(item => <DonateItem key={item.id} item={item} />) }
        </>
    );
};

export default Donation;