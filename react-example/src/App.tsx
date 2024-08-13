import { DBButton } from "@db-ui/react-components";

const App = () => {
  return (
    <main>
      <div
        data-density="functional"
        className="db-informational-bg-basic-level-1 container-with-padding"
      >
        <h1>db-ui-functional</h1>
        <p>Use this as default for enterprise apps</p>
        <DBButton icon="user">Test</DBButton>
      </div>
      <div
        data-density="regular"
        className="db-successful-bg-basic-level-1 container-with-padding"
      >
        <h1>db-ui-regular</h1>
        <p>Use this as default for consumer apps</p>
        <DBButton icon="user">Test</DBButton>
      </div>
      <div
        data-density="expressive"
        className="db-successful-bg-basic-level-2 container-with-padding"
      >
        <h1>db-ui-expressive</h1>
        <p>Use this as default for marketing apps</p>
        <DBButton icon="user">Test</DBButton>
      </div>
    </main>
  );
};

export default App;
