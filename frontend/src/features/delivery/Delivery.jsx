import React, {useEffect} from "react";
import './Delivery.css';
import init from "../../redux/apimap";

function Delivery() {

  useEffect(() => {
    window.ymaps.ready(init);
  }, []);

  return (
    <>
      <div className="delivery">
        <h3>Условия доставки</h3>
        <div className="container">
          <div>
            <p>
              <strong>Прием заказов по Энгельсу</strong> осуществляется ежедневно <strong>с 11-00  до 04-00 утра</strong>
            </p>
            <p>
              Минимальная стоимость заказа составляет <strong>700 рублей</strong>
            </p>
            <p>
              При оформлении заказа стоимостью свыше 2500 рублей взымается <strong>предоплата в размере 50% от стоимости заказа.</strong>
            </p>
            <p>
              Время доставки <strong>составляет от 45 минут. </strong>
            </p>
            <p>
              Доставка в с.Шумейка, район Ассамблеи и других турбаз <strong>составляет от 90 минут.</strong>.
            </p>
            <p>
              При заказе от 1000 рублей комплект соевого соуса, имбирь и васаби - <strong>бесплатно</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="apimap">
        <h5>Зоны доставки</h5>
        {/* <div id="map" className="map"></div> */}
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae40869580c261bd0df5191ffd05cc4398a5b5b4ef8a3091f07fc7cbf53be02d&amp;source=constructor" width="1280" height="642" frameBorder="0"></iframe>
      </div>
    </>
  );
}

export default Delivery;

