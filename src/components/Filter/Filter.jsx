import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/Filter/filterSlice';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={onChangeFilter}
        id="standard-helperText"
        helperText="Find contact by name"
        variant="standard"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </Box>

    // <div className={styles.form}>
    //   <label className={styles.label}>
    //     <span>Find contacts by name</span>
    //     <input
    //       className={styles.input}
    //       onChange={onChangeFilter}
    //       type="text"
    //       name="name"
    //       value={filterValue}
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //     />
    //   </label>
    // </div>
  );
}
