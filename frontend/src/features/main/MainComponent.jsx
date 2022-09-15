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
import chili from '../../иконки/icons8-перец-чили-100-main.png';
import brokolli from '../../иконки/icons8-брокколи-100-main.png';

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
  const [visibleChiliVegan, setVisibleChiliVegan] = useState(false)

  const [classNameState, setClassNameState] = useState(false)


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
    setVisibleChiliVegan(false)
    setVisibleIngr(true)
    setIngr(event.target.value)
    setClassNameState(false)

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
    setVisibleChiliVegan(false)
    setVisibleType(true)
    setClassNameState(event.target.name)
  }

  const handleClickVeganChili = (event, type) => {
    setIngr('')
    setVisibleType(false)
    setVisibleIngr(false)
    setVisibleChiliVegan(true)
    setClassNameState(event.target.name)

    fetch(`/fil/filter_chili_vegan_food/${type}`, {method: 'GET'})
      .then((result) => result.json())
      .then((data) => {
        dispatch(filterFoodAC(data))
      })
  }

  return (
    <>
      <Carusel />

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
                setFood(null)
              }}>
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
      
      <div className='allcomp'>

        <div onClick={(event) => handleClickType(event, 1)} className={classNameState === 'rols' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={rolls} alt="" name='rols'/> <br />
          РОЛЛЫ
        </div>

        <div onClick={(event) => handleClickType(event, 2)} className={classNameState === 'sushi' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={sushi} name='sushi' alt="" /> <br />
          СУШИ
        </div>

        <div onClick={(event) => handleClickType(event, 3)} className={classNameState === 'sets' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={set} name='sets' alt="" /><br />
          СЕТЫ
        </div>

        <div onClick={(event) => handleClickType(event, 6)} className={classNameState === 'soups' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={soup} name='soups' alt="" /><br />
          CУПЫ
        </div>

        <div onClick={(event) => handleClickType(event, 4)} className={classNameState === 'woks' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={wok} name='woks' alt="" /><br />
          САЛАТЫ WOK
        </div>

        <div onClick={(event) => handleClickType(event, 5)} className={classNameState === 'snacks' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={zakus} name='snacks' alt="" /><br />
          ЗАКУСКИ
        </div>

        <div onClick={(event) => handleClickType(event, 7)} className={classNameState === 'souce' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={sous} name='souce' alt="" /><br />
          СОУСЫ
        </div>

        <div onClick={(event) => handleClickType(event, 8)} className={classNameState === 'desserts' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={sweet} name='desserts' alt="" /><br />
          ДЕСЕРТЫ
        </div>

        <div onClick={(event) => handleClickType(event, 9)} className={classNameState === 'potables' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={water} name='potables' alt="" /><br />
          НАПИТКИ
        </div>

        <div onClick={(event) => handleClickVeganChili(event, 'chili')} className={classNameState === 'chilies' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={chili} name='chilies'alt="" /><br />
          ОСТРОЕ
        </div>
        
        <div onClick={(event) => handleClickVeganChili(event, 'vegan')} className={classNameState === 'vega' ? `iconfood activeClassTakeIt` : `iconfood`}>
          <img src={brokolli} name='vega' alt="" /><br />
          VEGAN
        </div>
      </div>
                
      {visibleType ? (allFood && <CardList allFood={allFood} />) : (<></>)}

      {visibleIngr ? (filterFood && filterFood.length > 0 ? <CardList allFood={filterFood} /> : null) : (<></>)}

      {visibleChiliVegan ? (filterFood && filterFood.length > 0 ? <CardList allFood={filterFood} /> : null) : (<></>)}


      <Hits />

      <div className='upBtn'><a href='#'>Наверх</a></div>
    </>
  );
}

export default MainComponent;
