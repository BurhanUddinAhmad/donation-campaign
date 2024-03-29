import { useLoaderData, useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { saveDonationToLS } from "../utils/localstorage";


const CategoryById = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id )
    const showById = data.find(item => item.id === idInt );

    const handleAddToLS = () => {
      saveDonationToLS(idInt);
    }


    return (
        <>
           <div className="max-w-6xl mx-auto">
           <Card  className="overflow-hidden m-0 rounded-none" >
        <CardHeader color="blue-gray" className="shadow-none">
          <img 
          className="w-full h-96"
            src={showById.img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2" style={{color: showById.category_bg}}>
            {showById.title}
          </Typography>
          <Typography>
          {showById.description }
        </Typography>
        <button 
        onClick={handleAddToLS}
        className="btn bg-blue-500 hover:bg-blue-400 duration-300 text-white">Donate ${showById.price }</button>
        </CardBody>
      </Card> 

           </div>
        </>
    );
};

export default CategoryById;