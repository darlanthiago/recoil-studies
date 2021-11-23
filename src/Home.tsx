import { useRecoilValue } from "recoil";
import FontSize from "./components/FontSize";
import Input from "./components/Input";
import TextCounter from "./components/TextCounter";
import TodoList from "./components/TodoList";
import { fontSizeState } from "./store/atoms/fontSize";

import { textState } from './store/atoms/text';

const Home = () => {

  const value = useRecoilValue(textState);
  const fontSize = useRecoilValue(fontSizeState);

  return (

    <>
      <h1>BASIC CONCEPTS</h1>

      <h1 style={{ color: '#00f', fontSize }}>{value}</h1>

      <Input />

      <TextCounter />

      <FontSize />

      <hr />

      <h1>Todos</h1>

      <TodoList />

    </>

  );
}

export default Home;