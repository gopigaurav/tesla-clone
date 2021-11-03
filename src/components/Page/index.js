import React from "react";
import Header from "../Header/Header";
import { ModelsWrapper, ModelSection } from "../Model";
import DefaultOverlayContent from "../DefaultOverlayContent";
import UniqueOverlay from "../UniqueOverlay";
import { Container, Spacer } from "./styles";

const Page = () => {
  const ModelInfo = [
    {
      id: "0",
      modelName: "Model S",
      img: "models/models.jfif",
    },
    {
      id: "1",
      modelName: "Model 3",
      img: "model-3.jpg",
    },
    {
      id: "2",
      modelName: "Model X",
      img: "modelx/modelx1.jfif",
    },
    {
      id: "3",
      modelName: "Model Y",
      img: "1(4).jpg",
    },
    {
      id: "4",
      modelName: "Model 4",
      img: "1(5).jpg",
    },
    {
      id: "5",
      modelName: "Model 5",
      img: "1(6).jpg",
    },
  ];
  return (
    <>
      <Header/>
      <Container>
        <ModelsWrapper>
          <div>
            {ModelInfo.map((item) => (
              <ModelSection
                key={item.id}
                id={item.id}
                className="colored"
                modelName={item.modelName}
                modelImgs={item.img}
                overlayNode={
                  <DefaultOverlayContent
                    label={item.modelName}
                    description="Order Online for Delivery"
                  />
                }
              />
            ))}
          </div>
          <Spacer />
          <UniqueOverlay />
        </ModelsWrapper>
      </Container>
    </>
  );
};

export default Page;
