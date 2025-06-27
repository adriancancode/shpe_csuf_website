"use client";

import styles from "../styles/page.module.css";
import "../styles/board.css";
import { shpe_board, shpetinas_board } from "./board";
import BoardCard from "../components/boardCard";
import { useState } from "react";


export default function Board() {
  const [selectedBoard, setSelectedBoard] = useState("shpe");



  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Board</h1>
        <div className="select-board">
          <select className="board-select">
            <option value="shpe">SHPE</option>
            <option value="shpetinas">SHPETinas</option>
          </select>
        </div>
        <div className="card-section">
          {board.map((member, id) => (
            <BoardCard
              key={id}
              name={member.name}
              position={member.position}
              discord={member.discord}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </main>
    </div>
  );
}