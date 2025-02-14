import { DBButton } from "@db-ux/react-core-components";

const App = () => {
  return (
    <main>
      <div
        data-density="functional"
        className="db-color-informational container-with-padding"
      >
        <h1>db-ux-functional</h1>
        <p>Use this as default for enterprise apps</p>
        <DBButton icon="plus">Test</DBButton>
      </div>
      <div
        data-density="regular"
        className="db-color-successful container-with-padding"
      >
        <h1>db-ux-regular</h1>
        <p>Use this as default for consumer apps</p>
        <DBButton icon="plus">Test</DBButton>
      </div>
      <div
        data-density="expressive"
        className="db-color-successful db-bg-color-basic-level-2 container-with-padding"
      >
        <h1>db-ux-expressive</h1>
        <p>Use this as default for marketing apps</p>
        <DBButton icon="plus">Test</DBButton>
      </div>
    </main>
  );
};

export default App;
