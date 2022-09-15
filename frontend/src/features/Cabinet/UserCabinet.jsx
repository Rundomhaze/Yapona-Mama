import React, { useEffect, useState } from 'react';
import './UserCabinet.css';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import updateDataAC from '../../redux/actionCreators/updateDataAC';

function UserCabinet() {
  const { user } = useSelector((state) => state.user);
  const [number, setNumber] = useState(null);
  const [editInfoMessage, setEditInfoMessage] = useState(null);
  const [editPassMessage, setEditPassMessage] = useState(null);
  const [orders, setOrders] = useState(null);
  const dispatch = useDispatch();

  async function handleSubmitInfo(e) {
    e.preventDefault();
    const userInfo = {
      id: user.id,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.tel.value,
      orderStreet: e.target.orderStreet.value,
      orderHouse: e.target.orderHouse.value,
      orderEntrance: e.target.orderEntrance.value,
      orderFloor: e.target.orderFloor.value,
      orderFlat: e.target.orderFlat.value
    };
    const result = await fetch('/api/edit_user_info', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: { 'Content-Type': 'application/json' },
    });
    const message = await result.json();
    dispatch(updateDataAC(userInfo));
    setEditInfoMessage(message);
  }

  async function handleSubmitPassword(e) {
    e.preventDefault();
    const newPassword = {
      id: user.id,
      password: e.target.password.value,
      passwordConfirm: e.target.passwordRepeat.value,
    };
    const result = await fetch('/api/edit_user_pass', {
      method: 'POST',
      body: JSON.stringify(newPassword),
      headers: { 'Content-Type': 'application/json' },
    });
    const message = await result.json();
    setEditPassMessage(message);
  }

  const userPhone = user && user.phone;

  useEffect(() => {
    fetch('/api/orderlist')
      .then((result) => result.json())
      .then((orderlist) => {
        const { newOrders } = orderlist;
        setOrders(newOrders);
      });
  }, []);

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <h3>Личный кабинет</h3>
      <div className="userCab">
        <form onSubmit={handleSubmitInfo}>
          <h5 className="title">Ваши данные</h5><br />

          <label>Имя</label>
          <input
            name="name"
            type="text"
            className="modal_input"
            defaultValue={user.name}
          />

          <label>Почта</label>
          <input
            name="email"
            type="email"
            className="modal_input"
            defaultValue={user.email}
          />

          <label>Телефон</label>

          <InputMask
            mask="8-(999)-999-99-99"
            name="tel"
            type="tel"
            className="modal_input"
            onChange={(e) => setNumber(e.target.value)}
            value={number || user.phone}
          />

          <label>Улица</label>
          <input
            name="orderStreet"
            type="text"
            className="modal_input"
            defaultValue={user.orderStreet}
          />

          <label>Дом</label>
          <input
            name="orderHouse"
            type="text"
            className="modal_input"
            defaultValue={user.orderHouse}
          />

          <label>Парадная</label>
          <input
            name="orderEntrance"
            type="text"
            className="modal_input"
            defaultValue={user.orderEntrance}
          />

          <label>Этаж</label>
          <input
            name="orderFloor"
            type="text"
            className="modal_input"
            defaultValue={user.orderFloor}
          />

          <label>Квартира</label>
          <input
            name="orderFlat"
            type="text"
            className="modal_input"
            defaultValue={user.orderFlat}
          />

          {editInfoMessage && (<p>{editInfoMessage.message}</p>)}

          <button type="submit" className="btn modal_button">сохранить</button>
        </form>

        <form className="formPass" onSubmit={handleSubmitPassword}>
          <h5 className="title">Изменить пароль</h5><br />
          <label>Пароль</label>
          <input
            name="password"
            type="password"
            className="modal_input"
            placeholder="новый пароль"
          />

          <label>Повторите пароль</label>
          <input
            name="passwordRepeat"
            type="password"
            className="modal_input"
            placeholder="Повторите пароль"
          />

          {editPassMessage && (<p>{editPassMessage.message}</p>)}

          <button type="submit" className="btn modal_button">сохранить</button>

          <div className="ordersList">
            <h5 className="title ordersListTitle">Ваши заказы</h5>
            {orders && orders.map((order, i) => (
              <Accordion key={`acc-${i}`} expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>{`Заказ № ${order.id} от ${order.createdAt}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <caption>{`Итого: ${order.total_price} ₽`}</caption>
                      <TableBody>
                        {order.foods.map((food, j) => (
                          <TableRow
                            key={`p-${i}${j}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {food['Food.title']}
                            </TableCell>
                            <TableCell align="right">{`${food.price} ₽`}</TableCell>
                            <TableCell align="right">{`${food.quantity} шт.`}</TableCell>
                            <TableCell align="right">{`${food.price * food.quantity} ₽`}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </form>

      </div>
    </>
  );
}

export default UserCabinet;
