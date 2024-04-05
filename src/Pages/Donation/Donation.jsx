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
            const donation = data.filter(item => getDonations.includes(item.id ));
            setDonations(donation);
        }

    },[data]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            { donations.map(item => <DonateItem key={item.id} item={item} />) }
            </div>
        </>
    );
};

export default Donation;