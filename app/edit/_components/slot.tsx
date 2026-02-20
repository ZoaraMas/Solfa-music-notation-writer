"use client";
import React from "react";
import { SLOT_CONFIG } from "@/constants/config";

interface SlotProps {
  id: string;
  value: string;
  onChange: (val: string) => void
}

const Slot: React.FC<SlotProps> = React.memo(({id, value, onChange}) => {
  return (
    <input
      id={id}
      type="text"
      maxLength={SLOT_CONFIG.MAX_LENGTH}
      onChange={(e) => onChange(e.target.value)}
      className="slot-style"
      style={{
        width: SLOT_CONFIG.WIDTH,
        height: SLOT_CONFIG.HEIGHT,
      }}
    />
  );
}); 

Slot.displayName = "Slot";
export default Slot;

