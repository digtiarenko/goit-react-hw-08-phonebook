import { ListItem, Typography, Divider } from '@mui/material/';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';

const ContactItem = ({ id, phone, name, email }) => {
  // const dispatch = useDispatch();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ListItem
        sx={{ '&:hover': { backgroundColor: 'lightgray' } }}
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            disabled={isLoading}
            onClick={() => deleteContact(id)}
            type="button"
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography variant="caption" display="block">
                {phone}
              </Typography>
              <Typography variant="caption">{email}</Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactItem;
