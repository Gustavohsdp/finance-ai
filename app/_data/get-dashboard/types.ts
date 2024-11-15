import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
  [Key in TransactionType]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
