import React, { useState, useEffect } from 'react';
import './MainComp.css';
import { useSelector, useDispatch } from 'react-redux';
import rolls from '../../иконки/icons8-суши-100.png';
import sushi from '../../иконки/icons8-суши-с-лососем-100.png'
import soup from '../../иконки/icons8-тарелка-супа-100.png';
import zakus from '../../иконки/icons8-куриные-наггетсы-100.png';
import set from '../../иконки/icons8-сеты-100 (1).png';
import wok from '../../иконки/icons8-wok-100.png';
import sous from '../../иконки/icons8-соусы-100.png';
import sweet from '../../иконки/icons8-десерт-100.png';
import water from '../../иконки/icons8-кофе-с-собой-100.png';

import Carusel from '../../features/carusel/Carusel';
import Hits from './Hits';
import CardList from '../Cards/CardList';
// import FilterFood from './FilterFood';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import filterFoodAC from '../../redux/actionCreators/filterAC';



function MainComponent() {

  const [allFood, setFood] = useState(null);
  const [id, setId] = useState(0)

  const { filterFood } = useSelector((state) => state.filterFood)

  const [ingr, setIngr] = useState('');
  const dispatch = useDispatch();

  const [visibleType, setVisibleType] = useState(false)
  const [visibleIngr, setVisibleIngr] = useState(false)
  

  useEffect(() => {
    if (id > 0) {
      fetch(`/api/load/${id}`, { method: 'GET' })
        .then((result) => result.json())
        .then((data) => {
          setFood(data);
        });
    }
  }, [id]);

  const handleChangeIngr = (event) => {
    setVisibleType(false)
    setVisibleIngr(true)
    setIngr(event.target.value)
  
    fetch(`/ingredients/filter_food/${event.target.value}`, { method: 'GET' })
      .then((result) => result.json())
      .then((data) => {
        dispatch(filterFoodAC(data))
      })
  };

  const handleClickType = (event, id) => {
    setId(id)
    setIngr('')
    setVisibleIngr(false)
    setVisibleType(true)
  }



  return (
    <>
      <Carusel />
      <div className="allcomp">
        <div onClick={(event) => handleClickType(event, 1)} className="iconfood ">
          <img src={rolls} alt="" /> <br />
          РОЛЛЫ
        </div>
        <div onClick={(event) => handleClickType(event, 2)} className="iconfood ">
          <img src={sushi} alt="" /> <br />
          СУШИ
        </div>
        <div onClick={(event) => handleClickType(event, 3)} className="iconfood ">
          <img src={set} alt="" /><br />
          СЕТЫ
        </div>
        <div onClick={(event) => handleClickType(event, 6)} className="iconfood ">
          <img src={soup} alt="" /><br />
          CУПЫ
        </div>
        <div onClick={(event) => handleClickType(event, 4)} className="iconfood ">
          <img src={wok} alt="" /><br />
          САЛАТЫ и WOK
        </div>
        <div onClick={(event) => handleClickType(event, 5)} className="iconfood ">
          <img src={zakus} alt="" /><br />
          ЗАКУСКИ
        </div>
        <div onClick={(event) => handleClickType(event, 7)} className="iconfood ">
          <img src={sous} alt="" /><br />
          СОУСЫ
        </div>
        <div onClick={(event) => handleClickType(event, 8)} className="iconfood ">
          <img src={sweet} alt="" /><br />
          ДЕСЕРТЫ
        </div>
        <div onClick={(event) => handleClickType(event, 9)} className="iconfood ">
          <img src={water} alt="" /><br />
          НАПИТКИ
        </div>
      </div>

      <div className='checkIng'>
        {/* <FilterFood setFood={setFood} /> */}
        <Box sx={{ minWidth: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Поиск по ингридиентам</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ingr}
            label="Поиск по ингридиентам"
            onChange={(event) => {
              handleChangeIngr(event)
              setFood(null)}}>
            <MenuItem value={'угорь'}>Угорь</MenuItem>
            <MenuItem value={'лосось'}>Лосось</MenuItem>
            <MenuItem value={'окунь'}>Окунь</MenuItem>
            <MenuItem value={'креветка'}>Креветка</MenuItem>
            <MenuItem value={'семга'}>Семга</MenuItem>
            <MenuItem value={'кальмар'}>Кальмар</MenuItem>
            <MenuItem value={'тунец'}>Тунец</MenuItem>
            <MenuItem value={'курица'}>Курица</MenuItem>
            <MenuItem value={'краб'}>Краб</MenuItem>
            <MenuItem value={'чука'}>Чука</MenuItem>
            <MenuItem value={'омлет'}>Омлет</MenuItem>
            <MenuItem value={'сыр'}>Сыр</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </div>

      {visibleType ? ( allFood && <CardList allFood={allFood} />) : (<></>)}
     
      
      {visibleIngr ? (filterFood && filterFood.length > 0 ? <CardList allFood={filterFood} /> : null) : (<></>)}


      <Hits />

      <div className='upBtn'><a href='#'>Наверх</a></div>
    </>
  );
}

export default MainComponent;
