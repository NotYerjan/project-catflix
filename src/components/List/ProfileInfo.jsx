import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function ProfileInfo({ Icon, text }) {
  return (
    <ListItem sx={{ px: 0 }}>
      <ListItemIcon>
        <Icon size={24} />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
