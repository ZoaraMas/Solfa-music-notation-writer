"use client";
import { useState, useRef} from "react";
import Slot from "./slot";
import React from "react";

const TOTAL_SLOTS = 48;
const SLOTS_PER_ROW = 12;

const Grid: React.FC = () => {
  const [title, setTitle] = useState("1. ANDRIANANAHARY, MASINA INDRINDRA");
  const [author, setAuthor] = useState("R. Heber, 1783-1826");
  const [transcriber, setTranscriber] = useState("Nad. J. A. Houlder, 1844-1932");
  const [arranger, setArranger] = useState("A. Stone");
  const [expression, setExpression] = useState("Soft With Grace");
  const [key, setKey] = useState("C");
  const [timeSigTop, setTimeSigTop] = useState("2");
  const [timeSigBottom, setTimeSigBottom] = useState("4");
  const [notes, setNotes] = useState<string[]>(Array(TOTAL_SLOTS).fill(""));

  const handleSlotChange = (index: number, newValue: string) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newValue;
    setNotes(updatedNotes);
  }

  return (
    <div className="sheet-container">
      {/* --- HEADER SECTION --- */}
      <header className="sheet-header">
        <input 
          className="title-input" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        
        <div className="meta-row">
          <input className="meta-input left" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input className="meta-input right" value={transcriber} onChange={(e) => setTranscriber(e.target.value)} />
        </div>
        
        <div className="meta-row">
          <div className="left">Do dia <input className="inline-input" value={key} onChange={(e) => setKey(e.target.value)} /></div>
          <input className="meta-input right" value={arranger} onChange={(e) => setArranger(e.target.value)} />
        </div>
        
        <div className="meta-row">
          <div className="left">
            <input className="inline-input tiny" value={timeSigTop} onChange={(e) => setTimeSigTop(e.target.value)} /> / 
            <input className="inline-input tiny" value={timeSigBottom} onChange={(e) => setTimeSigBottom(e.target.value)} />
          </div>
          <input className="meta-input right italic" value={expression} onChange={(e) => setExpression(e.target.value)} />
        </div>
      </header>

    <div className="grid-container">
        {notes.map((note, i) => (
          <React.Fragment key={i}>
            {i !== 0 && (
              <div className="column-separator">:</div>
            )}
            <div className="slot-wrapper">
                <Slot
                    id={`slot-${i}`}
                    value={note}
                    onChange={(newNote) => handleSlotChange(i, newNote)}
                    />
            </div>
          </React.Fragment>
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
          `}</style>
    </div>
    </div>
  );
};

export default Grid;

