import { DBCard, DBLink } from "@db-ui/react-components";

const WelcomeCard = () => {
  return (
    <DBCard>
      <div className="flex flex-col p-fix-lg gap-fix-md">
        <h3>Willkommen bei Next DB</h3>
        <div>
          <p>
            Die Webseite<strong> next.bahn.de </strong>
            und<strong> </strong>die App
            <strong> Next DB Navigator</strong> sind{" "}
            <strong>
              ab sofort parallel zu bahn.de und dem DB Navigator verfügbar
            </strong>
            .&nbsp;In den kommenden Monaten bauen wir die Funktionen, Angebote
            und Service-Inhalte stetig für Sie aus.&nbsp;
          </p>

          <p>
            Erleben Sie modernes Design sowie eine optimierte Benutzerführung
            und entdecken Sie Highlights und neue Funktionen.
          </p>

          <p>Viel Spaß beim Testen! Wir freuen uns auf Ihr Feedback.</p>
        </div>

        <DBLink href="#" content="internal">
          Mehr erfahren
        </DBLink>
      </div>
    </DBCard>
  );
};

export default WelcomeCard;
