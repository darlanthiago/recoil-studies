import { useRecoilValue } from "recoil";
import FontSize from "./components/FontSize";
import Input from "./components/Input";
import TextCounter from "./components/TextCounter";
import TodoList from "./components/TodoList";
import User from "./components/User";
import UserView from "./components/UserView";
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

      <hr />

      <h1>ASYNC QUERIES</h1>

      <User />

      <UserView />


    </>

  );
}

export default Home;