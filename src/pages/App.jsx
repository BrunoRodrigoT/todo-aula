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

  React.useEffect(() => {
    function loadList() {
      const listStorage = localStorage.getItem("list");
      if (listStorage) {
        setList(JSON.parse(listStorage));
      }
    }
    loadList();
  }, []);

  React.useEffect(() => {
    function loadCount() {
      const countStorage = localStorage.getItem("count");
      if (countStorage) {
        setCount(JSON.parse(countStorage));
      }
    }
    loadCount();
  }, []);

  function handleRemove(i) {
    const newList = list.filter((_, index) => index !== i);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
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
                  localStorage.setItem("count", JSON.stringify(count + 1));
                }}
              />
            ))
          )}
        </CardList>
        <FinishedCard counter={count} />
        <NewTaskForm
          onSubmit={(dado) => {
            const updatedList = [...list, dado];
            setList(updatedList);
            localStorage.setItem("list", JSON.stringify(updatedList));
          }}
        />
      </div>
    </Container>
  );
}

export default App;
