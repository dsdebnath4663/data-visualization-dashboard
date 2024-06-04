
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Filters = ({ filters, onFilterChange, uniqueValues }) => {

  return (
    <div className="my-4">

      <h1>Filters</h1>
      {/* <div>
         <label>End Year:</label>
         <input type="text" name="end_year" value={filters.end_year} onChange={onFilterChange} />
       </div>
       <div>
         <label>Topic :</label>
         <input type="text" name="topic" value={filters.topic} onChange={onFilterChange} />
       </div> */}


      <Form>
        <Row className="align-items-end">
          {
            Object.keys(filters).map((key) => (
              <Col md={3} key={key}>
                <Form.Group className="mb-3" controlId={`form${key}`}>
                  <Form.Label>{key.toUpperCase()}</Form.Label>
                  <Form.Select name={key} value={filters[key]} onChange={onFilterChange} >
                    {uniqueValues[key] && uniqueValues[key].map((value, index) => (
                      <option key={index}>  {value}</option>
                    ))}

                  </Form.Select>
                </Form.Group>
              </Col>
            ))
          }



          <Col md={3}>
            <Button variant="primary" type="submit" className="mt-3">
              Apply Filters
            </Button>
          </Col>
        </Row>
      </Form>

    </div>
  )
}

export default Filters;