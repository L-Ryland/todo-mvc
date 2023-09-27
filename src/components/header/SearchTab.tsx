import { searchTabItem } from "./header.module.css";

interface SearchTabProps {
  title: string;
  description: string;
  input?: boolean;
  width?: number;
}
const SearchTab: React.FC<SearchTabProps> = ({
  title,
  description,
  input,
  width,
}) => {
  return (
    <div className={searchTabItem} style={{ width }}>
      <div className="text-xs">{title}</div>
      {input ? (
        <input
          placeholder={description}
          className="placeholder:text-sm placeholder:text-text-gray"
        />
      ) : (
        <div className="text-sm text-text-gray">{description}</div>
      )}
    </div>
  );
};

export default SearchTab;
