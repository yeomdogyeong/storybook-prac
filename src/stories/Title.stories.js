import Title from "./Title";

export default {
  title: "Practice/Title", // 컴포넌트 이름으로, '/'를 넣어서 카테고리화 한다
  component: Title, //어떤 컴포넌트를 가져와서 스토리로 만들것이냐 => Title을 가져오겠다
  argTypes: {
    //컴포넌트에 필요한 전달인자의 종류와 타입을 정해줌
    title: { control: "text" }, //title이라는 전달인자에 text 타입 필요함을 명시
    textColor: { control: "text" },
  },
};

const Template = (args) => <Title {...args} />; //템플릿을 만들어줌. Title 컴포넌트가 args를 전달받아 props로 내려준다.

export const RedTitle = Template.bind({}); //storybook에서 확인하고 싶은 컴포넌트는 export const로 작성.
//위의 template 부분의 템플릿을 사용하여 storybook에 넣어줄 스토리를 하나 만들어줌
//Template.bin({})는 정해진 문법이라 그냥 외워라~

RedTitle.args = {
  //만들어진 RedTitle스토리의 전달인자를 작성
  title: "Red Title",
  textColor: "Red",
};

export const BlueTitle = Template.bind({});

BlueTitle.args = {
  title: "Blue Title",
  textColor: "Blue",
};

export const StoryBookTitle = (args) => {
  return <Title {...args} />;
};
