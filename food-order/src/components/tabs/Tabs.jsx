import { Tab } from "./Tab";
import styles from "./tabs.module.css";

export function Tabs({ items, activeId, onChange }) {
  if (!items.length) return null;
  return (
    <div className={styles.container}>
      {items.map((tab) => (
        <Tab
          key={tab.id}
          name={tab.name}
          isSelected={tab.id === activeId}
          onClick={() => onChange(tab.id)}
        />
      ))}
    </div>
  );
}
