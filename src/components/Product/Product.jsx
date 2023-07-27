import {
  EditTwoTone,
  DeleteTwoTone,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Card, Checkbox, Popconfirm, Typography, message } from "antd";
import "./Product.scss";

import { useNavigate } from "react-router-dom";
import { useActions } from "../../Store/useActions";
const { Meta } = Card;
const Product = ({ title, description, price, category, id, thumbnail }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/product/edit/${id}`);
  };
  const { removeProducts, selectProduct } = useActions();
  const handleDelete = () => {
    removeProducts(id);
    message.success("Product deleted successfully");
  };

  const handleSelect = (e) => {
    selectProduct({ checked: e.target.checked, id });
  };
  return (
    <Card
      className="Product"
      cover={<img alt={title} src={thumbnail} />}
      actions={[
        <Checkbox size="large" onChange={handleSelect}>
          Select
        </Checkbox>,
        <EditTwoTone key="edit" onClick={handleEdit} />,
        <Popconfirm
          title="Delete the Product"
          description="Are you sure to delete this Product?"
          onConfirm={handleDelete}
          icon={
            <QuestionCircleOutlined
              style={{
                color: "red",
              }}
            />
          }
          okText="Yes"
          cancelText="No"
        >
          <DeleteTwoTone twoToneColor="red" key="ellipsis" />
        </Popconfirm>,
      ]}
    >
      <Meta title={title} description={`${description.slice(0, 60)}...`} />
      <div className="otherInformation">
        <Typography.Text>{category}</Typography.Text>

        <Typography.Title level={5}>{`$${price}`}</Typography.Title>
      </div>
    </Card>
  );
};
export default Product;
