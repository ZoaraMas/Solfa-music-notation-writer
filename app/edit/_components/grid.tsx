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
          grid-template-columns: repeat(${SLOTS_PER_ROW}, max-content);
          gap: 15px;
          padding: 40px;
          justify-content: center;
          margin: 0 auto;
        }
        .slot-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Grid;

