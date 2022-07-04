import propTypes from 'prop-types';
import styles from './styles.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
    <thead className={styles.headList}>
      <tr className={styles.headBox}>
        <th className={styles.headItem}>Type</th>
        <th className={styles.headItem}>Amount</th>
        <th className={styles.headItem}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.bodyList}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.bodyBox}>
          <td className={styles.bodyItem}>{type}</td>
          <td className={styles.bodyItem}>{amount}</td>
          <td className={styles.bodyItem}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      type: propTypes.string,
      amount: propTypes.string,
      currency: propTypes.string,
    })
  ),
};

export { TransactionHistory };
