// import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import filterFoodAC from '../../redux/actionCreators/filterAC';


// export default function FilterFood({setFood}) {
//   const [ingr, setIngr] = React.useState('');
//   const dispatch = useDispatch();


//   const handleChange = (event) => {
//     setIngr(event.target.value)
//     fetch(`/ingredients/filter_food/${event.target.value}`, { method: 'GET' })
//       .then((result) => result.json())
//       .then((data) => {
//         dispatch(filterFoodAC(data))
//       })
//   };

//   return (
//     <>
//       <Box sx={{ minWidth: 240 }}>
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Поиск по ингридиентам</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={ingr}
//             label="Поиск по ингридиентам"
//             onChange={(event) => {
//               handleChange(event)
//               setFood(null)}}>
//             <MenuItem value={'угорь'}>Угорь</MenuItem>
//             <MenuItem value={'лосось'}>Лосось</MenuItem>
//             <MenuItem value={'окунь'}>Окунь</MenuItem>
//             <MenuItem value={'креветка'}>Креветка</MenuItem>
//             <MenuItem value={'семга'}>Семга</MenuItem>
//             <MenuItem value={'кальмар'}>Кальмар</MenuItem>
//             <MenuItem value={'тунец'}>Тунец</MenuItem>
//             <MenuItem value={'курица'}>Курица</MenuItem>
//             <MenuItem value={'краб'}>Краб</MenuItem>
//             <MenuItem value={'чука'}>Чука</MenuItem>
//             <MenuItem value={'омлет'}>Омлет</MenuItem>
//             <MenuItem value={'сыр'}>Сыр</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//     </>
//   );
// }

