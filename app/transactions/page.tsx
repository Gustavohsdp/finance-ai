import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionsColumns } from "./_columns";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany();

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button className="rounded-full">
          Add transactions
          <ArrowDownUpIcon className="ml-2" />
        </Button>
      </div>

      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
}
