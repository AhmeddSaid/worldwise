import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  function getCityFlag(flag) {
    // convert emoji code to characters => 🇵🇹 to pt
    let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />;
  }

  return (
    <li className={styles.countryItem}>
      <span>{getCityFlag(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
