interface IProps {
  name?: string;
  age?: number;
  address?: string;
}

const Video13 = (props: IProps) => {
  //props là javascript object

  const { name, age, address } = props;

  return (
    <div>
      Example in video {age} {address} {""}
      {name}
    </div>
  );
};

export default Video13;
