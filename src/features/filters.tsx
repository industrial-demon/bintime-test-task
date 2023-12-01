import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import type { Category, Country } from "../root-store";

type SelectOptions<T> = {
  value: T;
  title: string;
};

const categoryOptions: SelectOptions<Category>[] = [
  { value: "business", title: "Business" },
  { value: "general", title: "General" },
  { value: "health", title: "Health" },
  { value: "technology", title: "Technology" },
  { value: "", title: "All" },
];

const countryOptions: SelectOptions<Country>[] = [
  { value: "us", title: "United States" },
  { value: "gb", title: "United Kingdom" },
  { value: "ua", title: "Ukraine" },
  { value: "de", title: "Germany" },
  { value: "pl", title: "Poland" },
];

export const FiltersFn = () => {
  const store = useStore();
  return (
    <div className="py-5">
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <FormHelperText>Category</FormHelperText>
          <Select
            size="small"
            value={store.category}
            onChange={(event) =>
              store.changeCategory(event.target.value as Category)
            }
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {categoryOptions.map((option, idx) => (
              <MenuItem key={`${option.value}-${idx}`} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <FormHelperText>Country</FormHelperText>
          <Select
            size="small"
            value={store.country}
            onChange={(event) =>
              store.changeCountry(event.target.value as Country)
            }
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {countryOptions.map((option, idx) => (
              <MenuItem key={`${option.value}-${idx}`} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export const Filters = observer(FiltersFn);
