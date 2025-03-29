import React from "react";
import { Container, Title, Card, CardList, NewTaskForm } from "../components";

function App() {
  const [list, setList] = React.useState([]);
  const [count, setCount] = React.useState(0);

  function handleRemove(i) {
    setList(list.filter((_, index) => index !== i));
  }

  return (
    <Container>
      <Title>ToDo List</Title>
      <NewTaskForm
        onSubmit={(dado) => {
          setList([...list, dado]);
        }}
      />
      <CardList>
        <p>Tasks finalizadas: {count}</p>
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
    </Container>
  );
}

export default App;
