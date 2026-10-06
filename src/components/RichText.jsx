// Renders a string with **bold** segments as <strong>.
export const RichText = ({ text }) =>
  text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
