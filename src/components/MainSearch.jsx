import { useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link } from "react-router-dom";
import { getJobsAction } from "../redux/actions";
import Job from "./Job";
import { getJobsSubmitAction } from "../redux/actions/index";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobsFromRedux = useSelector((state) => state.companies.jobs);
  const areJobsLoading = useSelector((state) => state.companies.isLoading);
  const areJobsError = useSelector((state) => state.companies.isError);
  const areJobsSubmit = useSelector((state) => state.companies.isSubmit);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
    dispatch(getJobsSubmitAction(true));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-between align-items-end">
          <h1 className="my-0">Remote Jobs Search</h1>
          <Link to="/favourites">
            <div>Favourite Companies</div>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        {areJobsSubmit && (
          <>
            {areJobsLoading ? (
              <Col xs={12} className="d-flex justify-content-center mt-3">
                <Spinner animation="grow" />
              </Col>
            ) : (
              <>
                {areJobsError ? (
                  <Col xs={12} className="d-flex justify-content-center mt-3">
                    <Alert variant="danger"> Whoopsie, something went wrong :( </Alert>
                  </Col>
                ) : (
                  <>
                    {" "}
                    {jobsFromRedux.length === 0 ? (
                      <Alert variant="primary">There is no job to show</Alert>
                    ) : (
                      <Col xs={10} className="mx-auto mb-5">
                        {jobsFromRedux.map((jobData) => (
                          <Job data={jobData} />
                        ))}
                      </Col>
                    )}{" "}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
