import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const supplyItems = [
  {
    id: 1,
    image: "https://picsum.photos/500/300?random=1",
    title: "Rice",
    category: "Food",
    quantity: "10 kg",
  },
  {
    id: 2,
    image: "https://picsum.photos/500/300?random=2",
    title: "Hand Sanitizer",
    category: "Hygiene Products",
    quantity: "500 ml",
  },
  {
    id: 3,
    image: "https://picsum.photos/500/300?random=3",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  {
    id: 4,
    image: "https://picsum.photos/500/300?random=4",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  {
    id: 5,
    image: "https://picsum.photos/500/300?random=5",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  {
    id: 6,
    image: "https://picsum.photos/500/300?random=6",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  {
    id: 1,
    image: "https://picsum.photos/500/300?random=1",
    title: "Rice",
    category: "Food",
    quantity: "10 kg",
  },
  {
    id: 2,
    image: "https://picsum.photos/500/300?random=2",
    title: "Hand Sanitizer",
    category: "Hygiene Products",
    quantity: "500 ml",
  },
  {
    id: 3,
    image: "https://picsum.photos/500/300?random=3",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  {
    id: 4,
    image: "https://picsum.photos/500/300?random=4",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  {
    id: 5,
    image: "https://picsum.photos/500/300?random=5",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  {
    id: 6,
    image: "https://picsum.photos/500/300?random=6",
    title: "Diapers",
    category: "Baby Essentials",
    quantity: "Pack of 50",
  },
  // Add more supply items as needed
];
const AllSupplies = () => {
  return (
    <div className="container my-5 all-supply">
      <Row gutter={[12, 12]}>
        {supplyItems.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt={item.title} src={item.image} />}>
              <Card.Meta
                title={item.title}
                description={`Category: ${item.category}`}
              />
              <p>Quantity: {item.quantity}</p>
              <Link to={`/supplies/${item.id}`}>View Detail</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllSupplies;
