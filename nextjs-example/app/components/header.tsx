import {
  DBBrand,
  DBButton,
  DBHeader,
  DBLink,
  DBMainNavigation,
  DBNavigationItem,
} from "@db-ui/react-components";

export const Header = () => {
  return (
    <DBHeader
      brand={
        <DBBrand
          title="DBHeader"
          imgSrc="https://db-ui.github.io/images/db_logo.svg"
        >
          DBHeader
        </DBBrand>
      }
      metaNavigation={
        <>
          <DBLink href="#">Imprint</DBLink>
          <DBLink href="#">Help</DBLink>
        </>
      }
      callToAction={
        <DBButton icon="search" variant="text" noText>
          Search
        </DBButton>
      }
      actionBar={
        <>
          <DBButton icon="account" variant="text" noText>
            Profile
          </DBButton>
          <DBButton icon="alert" variant="text" noText>
            Notification
          </DBButton>
          <DBButton icon="help" variant="text" noText>
            Help
          </DBButton>
        </>
      }
    >
      <DBMainNavigation>
        <DBNavigationItem icon="account">
          <a href="#">Desktop (full width)</a>
        </DBNavigationItem>
        <DBNavigationItem disabled>
          <a href="#">Desktop (full width) disabled</a>
        </DBNavigationItem>
      </DBMainNavigation>
    </DBHeader>
  );
};
