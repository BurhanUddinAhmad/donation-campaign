import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonateItem = ({ item }) => {
  const {
    id,
    img,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg
  } = item;
  return (
    <>
      <Card
        style={{ backgroundColor: card_bg }}
        className="overflow-hidden m-0 rounded-none"
      >
        <CardHeader color="blue-gray" className="shadow-none">
          <img src={img} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Link to={`/category/${id}`}>
            <Button
              style={{ backgroundColor: text_button_bg }}
              className="mb-2 shadow-none"
            >
              {" "}
              {category}{" "}
            </Button>
          </Link>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2"
            style={{ color: category_bg }}
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};


DonateItem.propTypes = {
    item: PropTypes.object
}

export default DonateItem;
