import { Diversity3 as Diversity3Icon } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FunctionComponent } from "react";

interface GroupsSelectionProps {}

const GroupsSelection: FunctionComponent<GroupsSelectionProps> = () => {
  return (
    <List
      sx={{
        padding: "0",
        bgcolor: "background.paper",
      }}
    >
      <ListItemButton
        sx={{
          height: "60px",
        }}
      >
        <ListItemIcon>
          <Diversity3Icon />
        </ListItemIcon>
        <ListItemText primary="Group name" />
      </ListItemButton>
      <Divider />
    </List>
  );
};

export default GroupsSelection;
