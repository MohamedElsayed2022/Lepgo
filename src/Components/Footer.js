import React from "react";
import Watsapp from "../imgs/Watsapp.png";
import Twiter from "../imgs/twiter.png";
import Instgram from "../imgs/instgram.png";
import Fesbook from "../imgs/fesbook.png";
import Cach from "../imgs/Cach.png";
import card from "../imgs/Card.png";
import visa from "../imgs/Visa.png";
import pay from "../imgs/pay.png";
import vodfone from "../imgs/Vodfone.png";
import fawry from "../imgs/Fawry.png";
import apple from "../imgs/Apple.png";
import GooglePlay from "../imgs/GooglePlay.png";
import "../footer.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "#08324B" }}>
      <div className="container">
        <div className="footer-contnet">
          <div
            className="left-two-parts"
            // style={{ borderRight: "1px solid gray", width: "50%" }}
          >
            <div className="left-part1">
              <h4
                className="text-center text-light lead"
                style={{
                  font: "normal normal 300 20px/22px Almarai ",
                  lineHeight: "1.8px",
                  fontSize: "25px",
                  letterSpacing: "0px",
                  font: "normal normal bold 16px/25px Almarai",
                }}
              >
                تواصل معنا
              </h4>
              <div className="links text-center mt-5 mb-5">
                <a href="#" style={{ marginRight: "15px" }}>
                  <img src={Watsapp} alt="" />
                </a>
                <a href="home.html" style={{ marginRight: "15px" }}>
                  <img src={Twiter} alt="" />
                </a>
                <a href="#" style={{ marginRight: "15px" }}>
                  <img src={Fesbook} alt="" />
                </a>
                <a href="#" style={{ marginRight: "15px" }}>
                  <img src={Instgram} alt="" />
                </a>
              </div>
              <div className="email text-center">
                <h4 className="text-light">أو من خلال البريد الاليكتروني</h4>
                <a
                  href="#"
                  alt=""
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "25px",
                    letterSpacing: "1.8px",
                  }}
                  className="text-light"
                >
                  info@lepgo.com
                </a>
              </div>
              <div className="phone text-center mt-5 ">
                <h4 className="text-light">أو عبر الهاتف</h4>
                <a
                  href="#"
                  alt=""
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "25px",
                    letterSpacing: "1.5px",
                  }}
                  className="text-light"
                >
                  +20123456789
                </a>
              </div>
            </div>
            <div className="left-part2">
              <h4
                className="m text-center text-light lead"
                style={{
                  font: "normal normal 300 20px/22px Almarai ",
                  lineHeight: "1.8px",
                  fontSize: "25px",
                  letterSpacing: "0px",
                  font: "normal normal bold 16px/25px Almarai",
                }}
              >
                طرق الدفع
              </h4>
              <div className="payment-methods mt-5 p-2">
                <div className="text-center">
                  <a href="" alt="" className="mr-3 text-center">
                    <img
                      src={card}
                      className="mr-3"
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                  </a>
                  <a href="" alt="">
                    <img
                      src={Cach}
                      className="mr-3"
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                  </a>
                  <a href="" alt="">
                    <img
                      src={visa}
                      className="mr-3"
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                  </a>
                  <a href="" alt="">
                    <img
                      src={pay}
                      className="mr-3"
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                  </a>
                </div>

                <div className="mt-3 text-center">
                  <a href="" alt="">
                    <img
                      src={vodfone}
                      className="mr-3"
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                  </a>
                  <a href="" alt="">
                    <img
                      src={fawry}
                      className="mr-5 ml-3"
                      style={{ marginRight: "5px" }}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="Download-1 text-center">
                <h4 className="text-light text-center mt-3">
                  حمل تطبيقك من خلال
                </h4>
                <div>
                  <button
                    className="mt-4"
                    style={{
                      outline: "none",
                      border: "1px solid #FFFFFF",
                      backgroundColor: "#08324B",
                      padding: "10px",
                      color: "#ffff",
                      borderRadius: "7px",
                    }}
                  >
                    {" "}
                    <img src={apple} className="me-2" alt="" /> من خلال متجر أبل{" "}
                  </button>
                </div>
              </div>
              <div className="Download-2 text-center">
                <div>
                  <button
                    className="mt-4"
                    style={{
                      outline: "none",
                      border: "1px solid #FFFFFF",
                      backgroundColor: "#08324B",
                      padding: "10px",
                      color: "#ffff",
                      width: "171px",
                      borderRadius: "7px",
                    }}
                  >
                    {" "}
                    <img
                      src={GooglePlay}
                      className="me-2"
                      style={{ backgroundColor: "#08324B" }}
                      alt=""
                    />{" "}
                    من خلال متجر جوجل{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-two-parts">
            <div className="right-part1">
              <h4 className="text-center" style={{ color: "#FFFFFF" }}>
                الخصوصية
              </h4>

              <ul className="text-center">
                <li>
                  <a href="" alt="">
                    سياسة الضمان
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الاسترجاع
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الاستخدام
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الايجار
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الخصوصية
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-part2">
              <h4 className="text-center" style={{ color: "#FFFFFF" }}>
                الخصوصية
              </h4>

              <ul className="text-center">
                <li>
                  <a href="" alt="">
                    سياسة الضمان
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الاسترجاع
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الاستخدام
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الايجار
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    شروط الخصوصية
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-part3">
              <h4 className="text-center" style={{ color: "#FFFFFF" }}>
                عقارات
              </h4>

              <ul className="text-center">
                <li>
                  <a href="" alt="">
                    اساس منزلى
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    محلات تجارية
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    مساحات عمل
                  </a>
                </li>
                <li>
                  <a href="" alt="">
                    مخازن
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
