import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function CriarTarefa(props) {
  const info = {
    taskName: props.tarefa,
    taskDeleteKey: `complete@${props.tarefa}`,
  };

  let [marginTop, setMarginTop] = useState(props.marginTop);
  let [opacity, setOpacity] = useState(props.opacity);
  let [height, setHeight] = useState("");
  let [transform, setTransform] = useState("");
  let [marginBottom, setMarginBottom] = useState("0px");
  let [zIndex, setZIndex] = useState("1");
  let [width, setWidth] = useState("");

  const animationObject = {
    marginTop,
    opacity,
    height,
    width,
    transform,
    marginBottom,
    zIndex,
  };

  setTimeout(() => {
    setMarginTop("");
    setOpacity(1);
  }, 100);

  return (
    <>
      <div style={animationObject} className={styles.containerTarefa}>
        <div className={styles.tarefa}>
          <p>{info.taskName}</p>
        </div>

        <div className={styles.btnsTarefa} alt={info.taskDeleteKey}>
          <Image
            src="/confirm.svg"
            alt={info.taskDeleteKey}
            className={styles.actionBtn}
            style={animationObject}
            onClick={(e) => {
              setZIndex("0");
              setTransform("translateY(-35px)");
              setHeight("0px");
              setWidth("0vh");
              setMarginBottom("-20px");
            }}
          />
        </div>
      </div>
    </>
  );
}
