import { cn } from "~/lib/utils";
import { Button } from "~/components/button";

type Props = {
  numbers: number[];
  tables: boolean[];
  tableToggle: (i: number) => void;
  reverse?: boolean;
};

const TableButtons = ({ numbers, tables, tableToggle, reverse }: Props) => {
  return (
    <div
      className={cn(
        "flex justify-between min-w-4xl gap-4",
        reverse ? "flex-row-reverse" : "flex-row"
      )}
    >
      {numbers.map((v, i) => (
        <Button
          key={`table-${v}`}
          className={cn(
            "flex justify-center items-center cursor-pointer h-16 w-16 rounded-full text-white text-xl font-bold",
            tables[v - 1]
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          )}
          onClick={() => tableToggle(v)}
        >
          {v}
        </Button>
      ))}
    </div>
  );
};
export default TableButtons;
