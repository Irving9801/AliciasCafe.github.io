import React  from "react";
import { useDispatch } from "react-redux";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { register } from "../redux/action/userActions";

const SignUp = () => {
  const dispatch = useDispatch();
  // const history = unstable_HistoryRouter();
  const onFinish = (values) => {
    dispatch(register(values.FullName, values.username, values.password));
    // history.push('/home');
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formCenter">
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="formFields"
    >
      <Form.Item name="FullName" label="Note" className="formField" rules={[{ required: true }]}>
        <Input className="formFieldInput" />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        className="formFieldInput"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input className="formFieldInput"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        className="formFieldInput"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password className="formFieldInput"/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    // <div className="formCenter">
    //   <form onSubmit={handleSubmit} className="formFields">
    //     <div className="formField">
    //       <label className="formFieldLabel" htmlFor="name">
    //         Full Name
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         className="formFieldInput"
    //         placeholder="Enter your full name"
    //         name="name"
    //         // value={name}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="formField">
    //       <label className="formFieldLabel" htmlFor="password">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         className="formFieldInput"
    //         placeholder="Enter your password"
    //         name="password"
    //         // value={password}
    //         // onChange={handleChange}
    //       />
    //     </div>
    //     <div className="formField">
    //       <label className="formFieldLabel" htmlFor="email">
    //         E-Mail Address
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         className="formFieldInput"
    //         placeholder="Enter your email"
    //         name="email"
    //         // value={email}
    //         // onChange={handleChange}
    //       />
    //     </div>

    //     <div className="formField">
    //       <label className="formFieldCheckboxLabel">
    //         <input
    //           className="formFieldCheckbox"
    //           type="checkbox"
    //           name="hasAgreed"
    //           value={hasAgreed}
    //           onChange={handleChange}
    //         />{" "}
    //         I agree all statements in{" "}
    //         <a href="null" className="formFieldTermsLink">
    //           terms of service
    //         </a>
    //       </label>
    //     </div>

    //     <div className="formField">
    //       <button className="formFieldButton">Sign Up</button>{" "}
    //       <Link to="/sign-in" className="formFieldLink">
    //         I'm already member
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
};
export default SignUp;
