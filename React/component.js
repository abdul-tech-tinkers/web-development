//import { Header2, header2 } from "./header";
function Header(props) {
  console.log(props); // property to components
  return (
    <header>
      <h3>{props.name}</h3>
    </header>
  );
}

function Main() {
  return (
    <section>
      <img
        height={200}
        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600"
      ></img>
      <ul>
        {dishes.map((dish) => {
          return <li>{dish}</li>;
        })}
      </ul>
    </section>
  );
}

function Footer(props) {
  return <footer>&copy; Copyright Bengaluru Duroos {props.year}</footer>;
}

const dishes = ["Black Bean soup", "Macroni and Cheese", "Salmon and Potatos"];

function App() {
  let localYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <Header name="Hello from Header passed to the component" />
      <Main />
      <Footer year={localYear} />
    </React.Fragment>
  );
}

let root = document.getElementById("root");
ReactDOM.render(<App />, root);
