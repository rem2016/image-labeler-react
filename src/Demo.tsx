import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Annotator } from './Annotator';
import { message } from "antd";


const Component: React.FC = (props) => {
  const [defaultSceneType, setDefault] = useState(undefined);
  const [url, setUrl] = useState("https://i.postimg.cc/cJrdb8Sx/screenshot.png");

  return (
    <div>
      <div style={{
        height: 100,
        width: 100,
        backgroundColor: 'black',
      }} onClick={()=>{
        if (defaultSceneType === undefined){
          setTimeout(()=>{
            setUrl("");
            setDefault('3');
          }, 500);
        } else {
          setTimeout(()=>{
            setUrl("https://i.postimg.cc/cJrdb8Sx/screenshot.png");
            setDefault(undefined);
          }, 500);
        }
      }}/>
      <Annotator
        height={600}
        width={600}
        imageUrl={url}
        asyncUpload={async (labeledData) => {
          // upload labeled data
          console.log(labeledData);
        }}
        types={['A', 'B', 'Cylinder']}
        defaultType={"Cylinder"}
        sceneTypes={['1', '2', '3']}
        defaultSceneType={defaultSceneType}
        style={{
          width: 640,
          height: 680,
          margin: "20px auto",
          position: "relative",
          backgroundColor: "#368",
          borderRadius: 8,
          padding: 10
        }}
        defaultBoxes={[{
          x: 316,
          y: 305,
          w: 65,
          h: 61,
          annotation: 'A'
        }]}
        disableAnnotation={false}
        returnLabel={(label)=>{message.success(label.y)}}
        labelTypes={["A","B"]}
        priorNaturalX={21.333333333333}
        priorY={400}
      />
    </div>
  )
};

ReactDOM.render(
  <Component />,
  document.body
);
//@ts-ignore
module.hot.accept();