import toast from "react-hot-toast";

const getDonationFromLS = () => {
    const getDonation = localStorage.getItem('donation');
    if(getDonation) {
        return JSON.parse(getDonation);  
    } else {
        return [];
    }
}

const saveDonationToLS = id => {
    const getFromLS = getDonationFromLS();
    const isExist = getFromLS.find( item => item === id );
    if(isExist) {
        return toast.error('Already Exist!');
    } else {
        getFromLS.push(id);
        localStorage.setItem('donation', JSON.stringify(getFromLS));
        toast.success('Donation Added Successfully!');
    }
}

export { saveDonationToLS, getDonationFromLS }