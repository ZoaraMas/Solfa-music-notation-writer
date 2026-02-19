"use client";
import React from "react";

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
      maxLength={10}
      onChange={(e) => onChange(e.target.value)}
      className="slot-style"
    />
  );
}); 

Slot.displayName = "Slot";
export default Slot;

