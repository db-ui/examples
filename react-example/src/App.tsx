import { DBButton } from "@db-ui/react-components";

const App = () => {
  return (
    <main>
      <div
        data-tonality="functional"
        className="db-bg-informational container-with-padding"
      >
        <h1>db-ui-functional</h1>
        <p>Use this as default for enterprise apps</p>
        <DBButton icon="account">Test</DBButton>
      </div>
      <div
        data-tonality="regular"
        className="db-bg-successful container-with-padding"
      >
        <h1>db-ui-regular</h1>
        <p>Use this as default for consumer apps</p>
        <DBButton icon="account">Test</DBButton>
      </div>
      <div
        data-tonality="expressive"
        className="db-bg-successful-transparent-semi container-with-padding"
      >
        <h1>db-ui-expressive</h1>
        <p>Use this as default for marketing apps</p>
        <DBButton icon="account">Test</DBButton>
      </div>
    </main>
  );
};

export default App;
