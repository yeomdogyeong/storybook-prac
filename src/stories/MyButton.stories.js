import MyButton from "./MyButton";

export default {
  title: "Practice/myButton", //myButton카테고리화
  component: MyButton, //myButton 불러오겠다!

  argTypes: {
    color: { control: "color" },
    size: { control: { type: "radio", options: ["big", "small"] } },
    text: { control: "text" },
  },
};

export const mangoButton = (args) => <MyButton {...args}></MyButton>;
