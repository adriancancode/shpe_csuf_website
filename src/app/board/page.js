"use client";

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
  const boardOptions = [
    { value: "shpe", label: "SHPE Board" },
    { value: "shpetinas", label: "SHPETinas Board" }
  ];



  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <header className="">
        <h1 className="text-5xl font-bold">Board</h1>
      </header>
      <main className='flex flex-col gap-10 mt-11'>
        <div className="flex items-center">
          <Select
            options={boardOptions}
            value={selectedBoard}
            onChange={handleBoardChange}
            label="Select Board"
          />
        </div>
        
       
        <div className="m-5 grid grid-cols-3 gap-3 p-2 rounded-2xl">
          {boardData.map((member, id) => (
            <BoardCard
              key={id}
              name={member.name}
              position={member.position}
              discord={member.discord}
              linkedin={member.linkedin}
              boardType={selectedBoard}
            />
          ))}
        </div>
      </main>
    </div>
  );
}