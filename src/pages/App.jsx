import React from "react";
import {
  Container,
  Title,
  Card,
  CardList,
  NewTaskForm,
  FinishedCard,
} from "../components";
import styles from "./styles.module.css";

function App() {
  const [list, setList] = React.useState([]);
  const [count, setCount] = React.useState(0);

  function handleRemove(i) {
    setList(list.filter((_, index) => index !== i));
  }

  return (
    <Container>
      <Title>ToDo List</Title>
      <div className={styles.grid}>
        <CardList>
          {!list.length ? (
            <p>Nenhum item na lista</p>
          ) : (
            list.map((item, index) => (
              <Card
                key={index}
                data={item}
                onClickToRemove={() => {
                  handleRemove(index);
                  setCount(count + 1);
                }}
              />
            ))
          )}
        </CardList>
        <FinishedCard counter={count} />
        <NewTaskForm
          onSubmit={(dado) => {
            setList([...list, dado]);
          }}
        />
      </div>
    </Container>
  );
}

export default App;
