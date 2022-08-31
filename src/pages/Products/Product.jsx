import { Card, CardTitle, CardText } from "./ProductStyle";

const ProductCard = () => {
  return (
    <>
      <Card key={"1"} bgColor={"pink"}>
        <CardTitle>Titulo</CardTitle>
        <CardText>texto</CardText>
      </Card>
    </>
  );
};

export default ProductCard;
