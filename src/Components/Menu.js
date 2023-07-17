import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Navbar bg="" data-bs-theme="dark" className="shadow p-3 mb-5 bg-white rounded">
        <Container>
          {/* <Navbar.Brand href="#home"style={{color: "rgb(8, 50, 75)"}}>Navbar</Navbar.Brand> */}
          <Nav className="me-auto p-2">
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              متعلقات الصناعة
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              ادوات الصيد
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              اغراض مناسبات
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              ادوات بناء
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              اراض زراعية
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              مخازن
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              نقل جوى
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              نقل برى
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              اثاث منزلى
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              ملابس
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              عقارات
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              اجهزة الكترونية
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ color: "rgb(8, 50, 75)"}}
            >
              العروض المتاحة
            </Nav.Link>
            <Form.Select aria-label="Default select example" className="position-relative" style={{width:"110px" , height:"40px" , backgroundColor:"#ffff" , marginLeft:"15px" ,border:"none"}}>
              <option style={{width:"100px"}}>جميع الفئات </option>
              <option value="1" style={{width:"100px"}}>عرض ثانى</option>
              <option value="2" style={{width:"100px"}}>عرض ثالث</option>
              <option value="3" style={{width:"100px"}}>عرض رابع</option>
            </Form.Select>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
