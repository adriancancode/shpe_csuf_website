"use client";

import styles from "../styles/page.module.css";
import "../styles/board.css";
import { shpe_board, shpetinas_board } from "./board";
import BoardCard from "../../components/boardCard";
import Select from "../../components/select";
import { useState } from "react";


export default function Board() {
  const [selectedBoard, setSelectedBoard] = useState("shpe");
  const boardData = selectedBoard === "shpe" ? shpe_board : shpetinas_board;
  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };



  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Board</h1>
        <div className="select-board">
          <Select/>
        </div>
        <div className="card-section">
          {shpe_board.map((member, id) => (
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