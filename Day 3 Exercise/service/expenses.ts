import ExpenseRepository from "../repository/expenses";

type inputExpense = {
    name: string;
    nominal: number;
    category: string;
}

type Expense = {
    id:number,
    createdAt: Date,
} & inputExpense;

const expenseRepository = new ExpenseRepository(`${__dirname}/../db.json`)

export function createExpensesData(data: inputExpense): Expense{
    const result = expenseRepository.add(data);
    return result;
    
}

export function getListExpenses(): Expense[]{
    const result = expenseRepository.getAll();
    return result;
}