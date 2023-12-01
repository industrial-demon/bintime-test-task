import {
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { SearchBar } from "./search-bar";
import FilterIcon from "../assets/filter.svg?react";
import { useStore } from "../hooks/useStore";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: () => ({
          backgroundColor: "#ecf0f6ff",
          border: "none",
          color: "inherit",
          textTransform: "none",
          fontSize: "13px",
          lineHeight: "18px",
          borderRadius: "7px",
          padding: "8px 18px",
          ":hover": {
            backgroundColor: "#ecf0f6ff",
            border: "none",
          },
        }),
      },
    },
  },
});

export function EnhancedToolbar() {
  const store = useStore();
  
  return (
    <ThemeProvider theme={theme}>
      <Toolbar
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          display: "flex",
          alignItems: "center",
          paddingTop: "16px",
          paddingBottom: "20px",
        }}
      >
        <Typography
          sx={{
            flex: "1 1 100%",
            fontSize: "25px",
            fontWight: "500",
            lineHeight: "30px",
          }}
          id="tableTitle"
          component="div"
        >
          Formula Top Headlines
        </Typography>

        <div className="flex gap-5"><SearchBar />

        <Button
          variant="outlined"
          onClick={store.toggleFilters}
          startIcon={<FilterIcon />}
        >
          <span>Filters</span>
        </Button></div>
        
      </Toolbar>
    </ThemeProvider>
  );
}
