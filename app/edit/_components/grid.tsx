"use client";
import { useState, useRef} from "react";
import Slot from "./slot";

const TOTAL_SLOTS = 48;
const SLOTS_PER_ROW = 12;

const Grid: React.FC = () => {
  const [notes, setNotes] = useState<string[]>(Array(TOTAL_SLOTS).fill(""));

  const handleSlotChange = (index: number, newValue: string) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newValue;
    setNotes(updatedNotes);
  }

  return (
    <div className="grid-container">
        {notes.map((note, i) => (
            <div key={i} className="slot-wrapper">
                <Slot
                    id={`slot-${i}`}
                    value={note}
                    onChange={(newNote) => handleSlotChange(i, newNote)}
                />
            </div>
        ))}

        <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(${SLOTS_PER_ROW}, minmax(0, 1fr));
          gap: 12px;
          padding: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .slot-wrapper {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Grid;

