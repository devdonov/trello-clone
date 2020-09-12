import * as React from "react";
import { CustomDragLayerContainer } from "../styles";
import { Column } from "./Column";
import { useDragLayer, XYCoord } from "react-dnd";
import { DRAG_TYPES } from "../types";
import { Card } from "./Card";

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getClientOffset()
  }));

  if (!isDragging) return null;

  switch (item.type) {
    case DRAG_TYPES.COLUMN: {
      return (
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
      )
    }
    case DRAG_TYPES.CARD: {
      return (
        <CustomDragLayerContainer>
          <div style={getItemStyle(currentOffset)}>
            {/* TODO: Prevent text selection */}
            <Card
              id={item.id}
              columnId={item.columnId}
              text={item.text}
              index={0}
            />
          </div>
        </CustomDragLayerContainer>
      )
    }
    default:
      return null;
  }
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