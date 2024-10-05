// props를 전달 받고, 그 이후에 구조 분해 할당을 하는 방법.
const List = (props) => {
  const { tech, food, yaho } = props;
  return (
    <li>
      {tech}
    </li>
  )
}

export default List