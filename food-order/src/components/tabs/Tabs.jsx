import { Tab } from "./Tab";
import styles from "./tabs.module.css";

export function Tabs({ items, activeId, onChange }) {
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
