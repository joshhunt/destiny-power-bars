import classnames from "classnames";
import React, { useRef, useState } from "react";

import { PowerBarsCharacterData } from "../types";
import STYLES from "./CharacterDisplay.module.scss";
import { CharacterLinks } from "./characterDisplay/CharacterLinks";
import { PowerBars } from "./characterDisplay/PowerBars";
import { PowerDetails } from "./characterDisplay/PowerDetails";
import { PowerHints } from "./characterDisplay/PowerHints";

const titleCase = (text: string) =>
  text.substr(0, 1).toUpperCase() + text.substr(1);

const rgbString = ({
  red,
  green,
  blue
}: {
  red: number;
  green: number;
  blue: number;
}) => `rgb(${red},${green},${blue})`;

const useRenderElementImage = (className: string) => {
  const elementRef = useRef(null);
  const renderElementImage = async () => {
    if (elementRef.current) {
      try {
        const domToImage = (await import(
          /* webpackChunkName: "dom-to-image" */ "dom-to-image"
        )) as any;
        const { saveAs } = await import(
          /* webpackChunkName: "file-saver" */ "file-saver"
        );
        const blob = await domToImage.toBlob(elementRef.current);
        saveAs(blob, `destiny-power-bars-${className}.png`);
      } catch (e) {
        console.error("Error capturing image of character display", e);
      }
    }
  };
  return [elementRef, renderElementImage] as const;
};

export const CharacterDisplayBodyWrapper = (
  backgroundColor: string,
  children: JSX.Element,
  ref?: React.MutableRefObject<null>,
  onDragStart?: () => void,
  onDragEnd?: () => void,
  onDragDrop?: () => void
) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(0);

  return (
    <div
      className={classnames(STYLES.characterDisplayWrapper, {
        [STYLES.dragging]: isDragging,
        [STYLES.dragOver]: isDraggingOver > 0
      })}
      style={{ backgroundColor }}
      onDragStart={() => {
        setIsDragging(true);
        onDragStart?.();
      }}
      onDragEnd={() => {
        setIsDragging(false);
        onDragEnd?.();
      }}
      onDragEnter={() => setIsDraggingOver(isDraggingOver + 1)}
      onDragOver={e => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDragLeave={() => setIsDraggingOver(Math.max(isDraggingOver - 1, 0))}
      onDrop={() => {
        setIsDraggingOver(0);
        onDragDrop?.();
      }}
      draggable={true}
      ref={ref}
    >
      {children}
      <div className={STYLES.dragOverlay}>
        <span>Drag to reorder</span>
      </div>
    </div>
  );
};

interface CharacterDisplayProps {
  data: PowerBarsCharacterData;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onDragDrop?: () => void;
}

const CharacterDisplay = ({
  data,
  onDragStart,
  onDragEnd,
  onDragDrop
}: CharacterDisplayProps) => {
  const roundedPower = Math.floor(data.overallPower);

  const summableArtifactBonusPower = data.artifactData
    ? data.artifactData.bonusPower
    : 0;

  const [elementRef, renderImage] = useRenderElementImage(data.className);

  return CharacterDisplayBodyWrapper(
    rgbString(data.character.emblemColor),
    <div className={STYLES.characterDisplay}>
      <div className={STYLES.header}>
        <img
          className={STYLES.emblemBackground}
          src={`https://www.bungie.net${data.character.emblemBackgroundPath}`}
          alt=""
        />
        <div
          className={classnames(STYLES.name, {
            [STYLES.withTitle]: !!data.title
          })}
        >
          {titleCase(data.className)}
        </div>
        {data.emblemMetrics ? (
          <div className={STYLES.metrics}>
            <div className={STYLES.metricName}>{data.emblemMetrics.name}</div>
            <div className={STYLES.metricValue}>{data.emblemMetrics.value}</div>
            <img
              className={STYLES.metricIcon}
              src={`https://www.bungie.net${data.emblemMetrics.icon}`}
            />
          </div>
        ) : null}
        {data.title && <div className={STYLES.title}>{data.title}</div>}
        <div className={STYLES.power}>
          {roundedPower + summableArtifactBonusPower}
        </div>
        <div className={STYLES.headerOverlayBar} />
      </div>

      <div className={STYLES.content}>
        <PowerDetails {...data} />
        <PowerBars {...data} />
        <PowerHints {...data} />
      </div>

      <CharacterLinks
        membershipType={data.character.membershipType}
        membershipId={data.character.membershipId}
        characterId={data.character.characterId}
        onImageExportClick={renderImage}
      />
    </div>,
    elementRef,
    onDragStart,
    onDragEnd,
    onDragDrop
  );
};

export default CharacterDisplay;
