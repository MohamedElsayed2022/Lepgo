import React from "react";
import image from "../imgs/Group 598.png";
import Location from "../imgs/location_pin.png";
import tag from "../imgs/tag.png";
import truck from "../imgs/truck.png";
import star from "../imgs/star.png";
import Favorite from "../imgs/6f0a18fad030e38fc7194c6a4c334793.png";

function Rent_Card() {
  return (
    <div className=" mb-3"
        style={{display:"grid" , gridTemplateColumns:"repeat(auto-fill , minmax(260px , 1fr)) " ,gap:"30PX" }}>
      <div className="">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classNam="a">
        <div
          className="card"
          style={{
            width: "100%",
            marginBottom:"0px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <img src={Favorite} alt="" className="fav" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                textAlign: "end",
                color: "#08324B",
                font: "normal normal bold 21px/33px Almarai",
              }}
            >
              ام دبليو
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "end", color: "#424750" }}
            >
              أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
            </p>
          </div>
          <div className="Card-content">
            <p>الدقهلية/المنصورة اجا</p>
            <img src={Location} alt="" />
          </div>
          <div className="price">
            <p>لمدة يوم</p>
            <h4>
              {" "}
              <span>500</span> جنيه{" "}
            </h4>
            <img src={tag} alt="" />
          </div>
          <div className="Shipping">
            <p>
              (459) 4.5 <img src={star} alt="" />{" "}
            </p>
            <button>
              غير قابل للشحن <img src={truck} className="m-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* إضافة بطاقات إضافية هنا */}
      {/* يمكنك تكرار الشيفرة المذكورة أعلاه لإنشاء المزيد من البطاقات */}
    </div>
  );

















  // return (
  //   <div className="row g-3 mb-3">
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div classNam="a">
  //       <div
  //         className="card"
  //         style={{
  //           width: "20rem",
  //           marginBottom: "20px",
  //           marginRight: "5px",
  //           borderRadius: "15px",
  //           position: "relative",
  //         }}
  //       >
  //         <img
  //           src={image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ borderRadius: "10px 10px 0 0" }}
  //         />
  //         <img src={Favorite} alt="" className="fav" />
  //         <div className="card-body">
  //           <h5
  //             className="card-title"
  //             style={{
  //               textAlign: "end",
  //               color: "#08324B",
  //               font: "normal normal bold 21px/33px Almarai",
  //             }}
  //           >
  //             ام دبليو
  //           </h5>
  //           <p
  //             className="card-text"
  //             style={{ textAlign: "end", color: "#424750" }}
  //           >
  //             أكثر السيارات رفاهية وفخامة وجودة ...حيث أنها تمتلك وجه أماميه
  //           </p>
  //         </div>
  //         <div className="Card-content">
  //           <p>الدقهلية/المنصورة اجا</p>
  //           <img src={Location} alt="" />
  //         </div>
  //         <div className="price">
  //           <p>لمدة يوم</p>
  //           <h4>
  //             {" "}
  //             <span>500</span> جنيه{" "}
  //           </h4>
  //           <img src={tag} alt="" />
  //         </div>
  //         <div className="Shipping">
  //           <p>
  //             (459) 4.5 <img src={star} alt="" />{" "}
  //           </p>
  //           <button>
  //             غير قابل للشحن <img src={truck} className="m-2" alt="" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     {/* إضافة بطاقات إضافية هنا */}
  //     {/* يمكنك تكرار الشيفرة المذكورة أعلاه لإنشاء المزيد من البطاقات */}
  //   </div>
  // );
}

export default Rent_Card;
