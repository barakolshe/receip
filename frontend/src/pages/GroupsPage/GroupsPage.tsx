import AppbarHeightContext from "@/providers/AppbarHeightContext";
import { Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import GroupsSelection from "./components/GroupsSelection/GroupsSelections";

interface GroupsPageProps {}

const GroupsPage: FunctionComponent<GroupsPageProps> = () => {
  const appbarHeight = React.useContext(AppbarHeightContext);

  return (
    <Grid container minHeight={`calc(100vh - ${appbarHeight}px)`}>
      <Grid item xs={4}>
        <GroupsSelection />
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
};

export default GroupsPage;
