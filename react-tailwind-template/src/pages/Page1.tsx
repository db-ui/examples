import { DBButton, DBCard, DBLink } from "@db-ux/react-core-components";

const Page1 = () => {
  return (
    <div
      className="p-fix-xl" // TODO: Change my padding; https://db-ux-design-system.github.io/core-web/review/main/foundations/variables/examples
      data-container-color="neutral" // TODO: Change my color; https://db-ux-design-system.github.io/core-web/review/main/foundations/colors/color-classes
      data-bg-color="basic-level-2" // TODO: Change my color; https://db-ux-design-system.github.io/core-web/review/main/foundations/colors/color-classes
      data-density="functional" // TODO: Change my density; https://db-ux-design-system.github.io/core-web/review/main/foundations/densities/examples
    >
      <DBCard className="gap-fix-md">
        <h1>Example</h1>
        <p>Default font-size</p>
        <p data-font-size="sm">Smaller font-size</p>
        <div className="flex gap-fix-md flex-wrap">
          {/* TODO: Change my icon; https://db-ux-design-system.github.io/core-web/review/main/foundations/icons/overview */}
          <DBButton icon="person">Button 1</DBButton>
          <DBButton>Button 2</DBButton>
          <DBButton>Button 3</DBButton>
        </div>
        <div className="flex gap-fix-md flex-wrap">
          <DBLink
            href="https://db-ux-design-system.github.io/core-web/review/main/foundations/colors/color-classes"
            content="external"
            target="_blank"
          >
            Colors
          </DBLink>
          <DBLink
            href="https://db-ux-design-system.github.io/core-web/review/main/foundations/font-sizes/overview"
            content="external"
            target="_blank"
          >
            Font-Sizes
          </DBLink>
          <DBLink
            href="https://db-ux-design-system.github.io/core-web/review/main/foundations/icons/overview"
            content="external"
            target="_blank"
          >
            Icons
          </DBLink>
          <DBLink
            href="https://db-ux-design-system.github.io/core-web/review/main/foundations/densities/examples"
            content="external"
            target="_blank"
          >
            Densities
          </DBLink>
          <DBLink
            href="https://db-ux-design-system.github.io/core-web/review/main/foundations/variables/examples"
            content="external"
            target="_blank"
          >
            Variables
          </DBLink>
        </div>
      </DBCard>
    </div>
  );
};

export default Page1;
