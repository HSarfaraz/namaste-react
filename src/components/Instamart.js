import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2 rounded">
      <h3 className="font-bold text-3xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: true,
    showCareer: false,
    showDetails: false,
  });
  return (
    <div>
      <Section
        title={"About"}
        description={
          "This section is about instamart, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showDetails: false,
            showCareer: false,
          })
        }
      />

      <Section
        title={"Career"}
        description={
          "This section is Career instamart, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={sectionConfig.showCareer}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showDetails: false,
            showCareer: true,
          })
        }
      />

      <Section
        title={"Details"}
        description={
          "This section is Details instamart, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={sectionConfig.showDetails}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showCareer: false,
            showDetails: true,
          })
        }
      />
    </div>
  );
};

export default Instamart;
