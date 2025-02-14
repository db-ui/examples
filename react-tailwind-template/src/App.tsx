import { useState } from "react";
import {
  DBBrand,
  DBHeader,
  DBNavigation,
  DBNavigationItem,
  DBPage,
} from "@db-ux/react-core-components";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <DBPage
      variant="fixed"
      documentOverflow="auto"
      fadeIn
      header={
        <DBHeader
          drawerOpen={drawerOpen}
          onToggle={setDrawerOpen}
          brand={<DBBrand>Showcase</DBBrand>}
        >
          <DBNavigation>
            <DBNavigationItem active={useLocation().pathname === "/"}>
              <Link to="/">Page 1</Link>
            </DBNavigationItem>
            <DBNavigationItem active={useLocation().pathname === "/page2"}>
              <Link to="/page2">Page 2</Link>
            </DBNavigationItem>
            <DBNavigationItem active={useLocation().pathname === "/page3"}>
              <Link to="/page3">Page 3</Link>
            </DBNavigationItem>
          </DBNavigation>
        </DBHeader>
      }
    >
      <Outlet />
    </DBPage>
  );
}

export default App;
