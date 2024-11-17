"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

export function AddTransactionButton({
  userCanAddTransaction,
}: AddTransactionButtonProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransaction}
            >
              Adicionar Transação
              <ArrowDownUpIcon className="ml-2" />
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            {!userCanAddTransaction &&
              "Você atingiu o limite de transações para este mês.Atualize o seu plano para adicionar transações ilimitadas."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}
