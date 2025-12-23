export const COLOR_PRESETS = [
  "#ffffff", // white
  "#f28b82", // red
  "#fbbc04", // orange
  "#fff475", // yellow
  "#ccff90", // green
  "#a7ffeb", // teal
  "#cbf0f8", // blue
  "#aecbfa", // dark blue
  "#d7aefb", // purple
  "#fdcfe8", // pink
  "#e6c9a8", // brown
  "#e8eaed", // gray
];


export default function ColorPicker({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {COLOR_PRESETS.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => onChange(color)}
          className={`w-7 h-7 rounded-full border transition
            ${
              value === color
                ? "ring-2 ring-indigo-500 scale-110"
                : "hover:scale-105"
            }
          `}
          style={{ backgroundColor: color }}
          aria-label="Select color"
        />
      ))}
    </div>
  );
}
