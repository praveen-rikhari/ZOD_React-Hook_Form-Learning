import fetchUsers from "./lib/fetchUsers";

function App() {
  return (
    <div>
      <button onClick={async () => await fetchUsers()}>Click</button>
    </div>
  );
}

export default App;
