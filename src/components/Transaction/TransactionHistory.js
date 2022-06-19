import s from './Transaction.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory(props) {
    const { items } = props;

    return <table className={s.TransactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>{items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>))}
 </tbody>
</table>
}
TransactionHistory.propTypes = {
    items: PropTypes.array,  
}