import * as React from "react";
import { CustomDragLayerContainer } from "../styles";
import { Column } from "./Column";
import { useDragLayer, XYCoord } from "react-dnd";

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getClientOffset()
  }))
  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyle(currentOffset)}>
        <Column
          id={item.id}
          text={item.text}
          index={item.index}
          isPreview
        />
      </div>
    </CustomDragLayerContainer>
  ) : null
}

function getItemStyle(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) return { display: "none" }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`

  return {
    transform,
    WebkitTransform: transform
  }
}