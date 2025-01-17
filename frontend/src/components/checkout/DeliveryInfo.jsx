import { Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const onFinish = (values) => {
  console.log(values);
};

const DeliveryInfo = ({
  customerName,
  email,
  phoneNumber,
  deliveryAddress,
  handleInput,
}) => {
  return (
    <section>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Full Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="customerName"
            value={customerName}
            onChange={handleInput}
          />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input name="email" value={email} onChange={handleInput} />
        </Form.Item>
        <Form.Item name={["user", "phoneNumber"]} label="Phone Number">
          <Input
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInput}
          />
        </Form.Item>
        <Form.Item name={["user", "address"]} label="Address">
          <Input
            name="deliveryAddress"
            value={deliveryAddress}
            onChange={handleInput}
          />
        </Form.Item>
        {/* <Form.Item label={null}>
          <Button color="default" variant="solid" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}
      </Form>
    </section>
  );
};

export default DeliveryInfo;
