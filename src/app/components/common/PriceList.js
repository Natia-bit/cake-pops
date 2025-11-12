import styles from "./PriceList.module.css";

export default function PriceList({ data }) {
  return (
    <>
      <table className={styles.pricingTable}>
        <thead className={styles.head}>
          <tr>
            <th scope="col" rowSpan={2}>
              Batch
            </th>
            <th scope="col" rowSpan={2}>
              QT
            </th>
            <th scope="col" colSpan={2}>
              Price
            </th>
          </tr>

          <tr>
            <th scope="col">Standard </th>
            <th scope="col">
              Deluxe <span>*</span>
            </th>
          </tr>
        </thead>

        <tbody className={styles.body}>
          {data.map((item) => (
            <tr key={item.name}>
              <td className={styles.nameCell}>{item.name}</td>
              <td className={styles.qtCell}>{item.qt}</td>
              <td className={styles.standardCell}>R {item.standard}.00</td>
              <td className={styles.deluxeCell}>R {item.deluxe}.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
