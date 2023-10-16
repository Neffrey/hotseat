"use client";

import { useState } from "react";

import TableButtons from "~/components/table-buttons";
import { Button } from "~/components/button";

const NumberOfTables = 12;
const SpotsPerTable = 6;

type HotSeatType = {
  table: number;
  spot: number;
};

const Page = () => {
  const [tables, setTables] = useState(
    Array.from({ length: NumberOfTables }, (_, i) => true)
  );
  const [hotSeat, setHotSeat] = useState<HotSeatType | null>(null);

  const handleGetHotSeat = () => {
    const openTables = [] as { table: number }[];
    tables.forEach((element, index) => {
      if (element) {
        openTables.push({ table: index + 1 });
      }
    });

    // Calculate the hot seat
    setHotSeat({
      table: openTables[Math.floor(Math.random() * openTables.length)].table,
      spot: Math.floor(Math.random() * SpotsPerTable) + 1,
    });
  };

  const handleTableToggle = (table: number) => {
    setTables(
      tables.map((value, index) => {
        return index === table - 1 ? !value : value;
      })
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-background justify-between p-24 uppercase">
      <h1 className="text-5xl font-bold text-white">Hot Seat Drawings</h1>
      <div className="flex items-center gap-6">
        {/* <Button
          size="lg"
          className="uppercase text-xl py-7"
          onClick={() => console.log("display page")}
        >
          Open Display Page
        </Button> */}
        <Button
          size="lg"
          className="uppercase text-xl py-7"
          onClick={handleGetHotSeat}
        >
          Get Hot Seat
        </Button>
        <div className="p-6" />
        <div className="flex flex-col justify-center gap-2">
          {hotSeat ? (
            <>
              <h2 className="text-2xl font-bold text-white text-center tracking-widest">
                Table {hotSeat.table}
              </h2>
              <h2 className="text-2xl font-bold text-white text-center tracking-widest">
                Spot {hotSeat.spot}
              </h2>
            </>
          ) : (
            <h2 className="text-2xl font-bold text-white text-center tracking-widest">
              No hot seat yet
            </h2>
          )}
        </div>
      </div>
      <TableButtons
        numbers={[1, 2, 3, 4, 5, 6]}
        tables={tables}
        tableToggle={handleTableToggle}
      />
      <TableButtons
        numbers={[7, 8, 9, 10, 11, 12]}
        tables={tables}
        tableToggle={handleTableToggle}
        reverse
      />
    </main>
  );
};
export default Page;
