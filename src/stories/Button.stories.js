import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,

  argTypes: {
    color: { control: "color" }, //여기서 내가 coor이라고 써서 storybook localhost에 coor라고 나와버림 ㅎㅎ;
    size: { control: { type: "radio", options: ["big", "small", "medium"] } }, //options가 여러개면 []로 묶는듯하다
    text: { control: "text" }, //control 대신 mango라고바꿔봤는데 안됨. control도 작동조건중에 하나임
  },
};

export const StorybookButton = (args) => <Button {...args}></Button>;
