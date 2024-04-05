import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SingleCard = ({catg }) => {
    const {id, img, title, category, category_bg, 
        card_bg, text_button_bg,
    } = catg;
  return (
    <>
      <Card style={{backgroundColor: card_bg }} className="overflow-hidden m-0 rounded-none" >
        <CardHeader color="blue-gray" className="shadow-none">
          <img
            src={img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
        <Link to={`/category/${id}`} > 
        <Button style={{backgroundColor: text_button_bg }} className="mb-2 shadow-none"> {category} </Button>
        </Link>
          <Typography variant="h5" color="blue-gray" className="mb-2" style={{color: category_bg}}>
            {title}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};


SingleCard.propTypes = {
    catg: PropTypes.object
}
export default SingleCard;
