import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  const sign = props.transactions.amount > 0 ? "+" : "-";
  const transactionColor = props.transactions.amount > 0  ? "plus" : "minus";
  
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transactionColor}>
      {props.transactions.text}
      <span>
        {sign}${Math.abs(props.transactions.amount)}
      </span>
      <button className="delete-btn" onClick={()=>deleteTransaction(props.transactions.id)}>x</button>
    </li>
  );
};
export default Transaction;
