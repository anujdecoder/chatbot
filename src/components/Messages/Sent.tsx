import React from 'react';
import { SentContainer } from './styles';
import { alpha, Menu, MenuItem, MenuProps, styled, Typography } from '@mui/material';
import { Message } from '../../types/messages';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    minWidth: theme.spacing(20),
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: theme.spacing(1, 0),
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

interface Props {
  message: Message;
  onEdit: (m: Message) => void;
  onDelete: (m: Message) => void;
  index: number;
}

// eslint-disable-next-line complexity
const Sent: React.FC<Props> = ({ message, onDelete, onEdit, index }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null),
    open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (message.deleted) {
        return;
      }
      setAnchorEl(event.currentTarget.getElementsByClassName('message').item(0)! as any);
    },
    handleClose = () => {
      setAnchorEl(null);
    };

  const handleDelete = () => {
      setAnchorEl(null);
      onDelete(message);
    },
    handleEdit = () => {
      setAnchorEl(null);
      onEdit(message);
    };
  const divProps = message.deleted ? {} : { tabIndex: index };
  return (
    <SentContainer onClick={handleClick} onKeyDown={handleClick as any}>
      <div {...divProps}>
        <Typography variant="body2" paragraph className="message">
          {message.body}
        </Typography>
      </div>
      {open && (
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleEdit}>
            <EditOutlined />
            Edit
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <DeleteOutline />
            Delete
          </MenuItem>
        </StyledMenu>
      )}
    </SentContainer>
  );
};

export default Sent;
