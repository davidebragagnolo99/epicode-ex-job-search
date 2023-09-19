import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouriteCompanies = useSelector((state) => state.favouriteCompanies.content);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h2>FAVOURITE COMPANIES</h2>
        </Col>
        {favouriteCompanies.map((companyName) => (
          <>
            <Col xs={10} className="mx-auto mb-2 d-flex align-items-center justify-content-between">
              <Link to={`/${companyName}`}>
                <div>{companyName}</div>
              </Link>

              <RiDeleteBin5Line
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITES",
                    payload: companyName,
                  });
                }}
              />
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default Favourites;
