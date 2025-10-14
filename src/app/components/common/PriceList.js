import styles from "./PriceList.module.css";

export default function PriceList({ title, data }) {
  return (
    <>
      <h2>{title}</h2>
      <table className={styles.pricingTable}>
        <thead>
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
            <th scope="col">Standard</th>
            <th scope="col">
              Deluxe <span>*</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.qt}</td>
              <td>R {item.standard}</td>
              <td>R {item.deluxe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
