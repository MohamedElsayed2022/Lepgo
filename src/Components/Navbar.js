import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import LEPGO from "../imgs/LEPGO.png";
import Chat from "../imgs/chat.png"
import User from "../imgs/674aaa8a5939fb3fb007e77121fb1581.png"
import Hreart from "../imgs/6f0a18fad030e38fc7194c6a4c334793.png"
import Marketing from "../imgs/bdcb0c3f6d67999723518ef3c2ad5494.png"
import Adding from "../imgs/add_to_photos.png";
import Notification from "../imgs/notification-new.png";
// import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect className="p-3 " expand="lg" style={{backgroundColor:"#FFFFFF" , width:"100%" , borderBottom: "3px solid rgb(112 112 112 / 7%)"}}>
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-between navv" >
            <Nav.Link
              eventKey={2}
              className="t d-flex"
              style={{  marginTop: "1.5px" ,borderRight: "3px solid rgb(112 112 112 / 7%)"  }}
              href="#memes"
            >
              <Image
                src={Marketing}
                style={{
                  width: "15px",
                  height: "15px",
                  marginTop: "5px",
                  fontSize:"10px",
                  marginRight:"10px"
                  
                }}
                rounded
              />
              <h6 style={{color:"#08324B" }}>عربة التسويق</h6>
            </Nav.Link>{" "}
            <Nav.Link
              style={{ borderRight: "3px solid rgb(112 112 112 / 7%)" }}
              href="#features"
              className="t d-flex"

            >
                 <Image
                src={Chat}
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight:"7px",
                  marginTop: "5px"
                
                }}
                rounded
              />
              <h6 style={{color:"#08324B"}}>الدردشة</h6>
            </Nav.Link>
            <Nav.Link
              style={{ borderRight: "3px solid rgb(112 112 112 / 7%)" }}
              href="#features"
              className="t d-flex"

            >
                 <Image
                src={Hreart}
                style={{
                  width: "15px",
                  height: "15px",
                  marginTop: "5px",
                  marginRight:"10px",
                 
                }}
                rounded
              />
              <h6 style={{color:"#08324B"}}>المفضلة</h6>
            </Nav.Link>
            <Nav.Link
              style={{ borderRight: "3px solid rgb(112 112 112 / 7%)" }}
              href="#features"
              className="t d-flex"

            >
                 <Image
                src={User}
                style={{
                  width: "15px",
                  height: "15px",
                  marginTop: "5px",
                  marginRight:"10px",
                }}
                rounded
              />
              <h6 style={{color:"#08324B"}}>حساب</h6>
            </Nav.Link>
            <Nav.Link
              style={{ borderRight: "3px solid rgb(112 112 112 / 7%)" }}
              href="#features"
              className="t d-flex"

            >
                 <Image
                src={Adding}
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight:"10px",
                  marginTop: "5px",
                }}
                rounded
              />
              <h6 style={{color:"#08324B"}} >اضافة منتج للحجز</h6>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FontAwesomeIcon icon="fa-light fa-user" />
            </Nav.Link>
          </Nav>
          <Nav.Link
            href="#features"
            // style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            EN
          </Nav.Link>
          <Form className="d-flex l" style={{ marginLeft: "15px" }}>
            <Form.Control
              type="search"
              placeholder="انت بتدور على اى"
              className="me-2 search"
              style={{ width: "300px" }}
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <NavDropdown
            title="تسليم الى المنصورة"
            id="collasible-nav-dropdown "
            style={{ marginLeft: "0px"  }}
          >
            <NavDropdown.Item href="#action/3.1">
              تسليم الى الاسماعيلية
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              تسليم الى بنها{" "}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              تسليم الى القاهرة
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            eventKey={2}
            className="t d-flex"
            style={{ marginTop: "6px" ,marginLeft:"25px" }}
            href="#memes"
          >
            <h5 style={{color:"#08324B"}}>اشعارات</h5>
            <Image
              src={Notification}
              style={{
                width: "15px",
                height: "15px",
                marginTop: "7px",
                marginRight :"10px",
                marginLeft:"12px",
                fontWeight:"bold"
                
              }}
              rounded
            />
          </Nav.Link>
          {/* <Navbar.Brand className="me-2 p" href="#Home">
            <Image src={LEPGO} rounded style={{marginLeft:"10px"}} />
          </Navbar.Brand>{" "} */}
        </Navbar.Collapse> 
         <Image src={LEPGO} rounded  />
         {/* style={{marginLeft:"10px"}} */}

      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
