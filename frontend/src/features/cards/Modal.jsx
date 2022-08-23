import React from 'react';
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
            <div className='close'><a onClick={() => setOpen(false)}>❌</a></div>
            <div className="flex">
              <img src={roll.photo} alt="" className="materialboxed" />
            </div>
            <div className="modalbtn">
              <div>
                {roll.is_vegan && <img src={vegan} alt="" />}
                {roll.is_spicy && <img src={spicy} alt="" />}
              </div>
              <a className="btn-floating btn-small waves-effect waves-light blue "><i className="material-icons">add</i></a>
            </div>
            <div className="divBox">
              <div className="card-content_modal">
                <div className="card-content_subtitle">
                  <span className="titlecard" style={{ color: 'red' }}>{roll.title}</span>
                  <span className="titlecard" style={{ color: 'green' }}>{roll.new_price}</span>
                </div>
                <br />
                <p className="desccard"><i>Ингредиенты: {roll.description}</i></p>
                <span className="typeroll"> Вид : {roll['Subtype.title']} </span>
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

// import React from 'react';

// function Modal({ roll, vegan, spicy, setOpen ,open}) {
//   return (
//     <div className={`allplacemodal${open ? 'open' : 'close'}`}>
//       <div className="card modalcard">
//         <div className="">
//           <img src={roll.photo} alt="" className="imagemodal" alt="" />
//           {roll.is_vegan && <img src={vegan} alt="" />}
//           {roll.is_spicy && <img src={spicy} alt="" />}
//           <div className="modalbtn">
//             <a className="btn-floating btn-small waves-effect waves-light blue "><i className="material-icons">add</i></a>
//           </div>
//           <div className="card-content_modal">
//             <div className="card-content_subtitle">
//               <span className="titlecard" style={{ color: 'red' }}>{roll.title}</span>
//               <span className="titlecard" style={{ color: 'green' }}>{roll.new_price}</span>
//             </div>
//             <br />
//             <p className="desccard"><i>Ингредиенты: {roll.description}</i></p>
//             <span className="typeroll"> Вид : {roll['Subtype.title']} </span>
//           </div>
//           <button onClick={() => setOpen(false)}>X </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Modal;
