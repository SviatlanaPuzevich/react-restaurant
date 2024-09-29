import { Tab } from "./Tab";

export function Tabs({ items, activeId, onChange }) {
  return (
    <div className="tabs">
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
