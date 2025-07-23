"use client";

import { shpe_board, shpetinas_board } from "./board";
import BoardCard from "../../components/boardCard";

export default function Board() {
  return (
    <main className='flex flex-col items-center justify-center mt-8 mb-8 pl-16 pr-8'>
      <div className='flex flex-col gap-10 h-1/5 mt-11 bg-[url(../../../public/images/shpe-board.jpeg)]'>
        <div className="flex flex-col items-start">
          <h1 className="text-5xl font-bold">Board</h1>
          <p>Meet our board members!</p>
        </div>
        
        
        <h2 className="text-4xl font-bold">SHPE General Board</h2>
        <article className="m-5 grid grid-cols-3 gap-3 p-2 rounded-2xl">
          {shpe_board.map((member, id) => (
            <BoardCard
              key={id}
              name={member.name}
              position={member.position}
              discord={member.discord}
              linkedin={member.linkedin}
              headshot={member.headshot}
              boardType={member.boardType}
            />
          ))}
        </article>
        <h2 className="text-4xl font-bold">SHPEtinas Board</h2>
        <article className="m-5 grid grid-cols-3 gap-3 p-2 rounded-2xl">
          {shpetinas_board.map((member, id) => (
            <BoardCard
              key={id}
              name={member.name}
              position={member.position}
              discord={member.discord}
              linkedin={member.linkedin}
              boardType={member.boardType}
            />
          ))}
        </article>
      </div>
    </main>
  );
}