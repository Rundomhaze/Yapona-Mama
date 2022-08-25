import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '2px solid currentColor',
  padding: '16px 32px 24px 32px',
});

export default function ModalUnstyledDemo({ open, setOpen, roll, vegan, spicy }) {

  const handleClose = () => setOpen(false);
  const { foods, details } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddClick = async (event, roll) => {
    dispatch({ 
      type: 'ADD_FOOD', 
      payload: { 
        roll, 
        order_id: details.id
      } 
    });
    dispatch({ type: 'COUNT_TOTAL' });

    if ('id' in user) {
      fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({
          order_id: details.id,
          food_id: roll.id,
          total_price: details.total_price
        }) 
      }).then((data) => data);
    }

    setOpen(false);
  };

  return (
    <div>
      <Modal

        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        components={{ Backdrop }}
      >
        <Box sx={style} className="modalcard">
          <div className="flexDiv">

            <div className="close"><a onClick={() => setOpen(false)}>❌</a></div>

            <div className="flex">
              <img src={roll.photo} alt="" className="materialboxed" />
            </div>
            <div className="modalbtn">
              <div>
                {roll.is_vegan && <img src={vegan} alt="" className="iconspiveg" />}
                {roll.is_spicy && <img src={spicy} alt="" className="iconspiveg" />}
              </div>
              <a className="btn-floating btn-large waves-effect waves-light orange "><i onClick={(event) => handleAddClick(event, roll)} className="material-icons">add</i></a>
            </div>
            <div className="divBox">
              <div className="card-content_modal">
                <div className="card-content_subtitle modalinfo">
                  <span className="titlecardmodal " style={{ color: 'green' }}>{roll.title}</span>
                  <span className="titlecardmodal " style={{ color: 'green' }}>{roll.old_price && <s style={{ color: 'red' }}>{roll.old_price} ₽</s>} {roll.new_price} ₽</span>
                </div>
                {roll.description && <p className="desccard infofood">Состав: {roll.description}</p>}
                {roll['Subtype.title'] && <span className="typeroll infofood"> <span> Вид : {roll['Subtype.title']}</span> </span>}
                <br />
                {roll.weight && <span className="typeroll infofood">Вес: {roll.weight} грамм</span>}
              </div>
            </div>
          </div>
          {/* <h2 id="unstyled-modal-title">сюда картинку</h2>
          <p id="unstyled-modal-description">А сюда описание</p> */}
        </Box>
      </Modal>
    </div>
  );
}
