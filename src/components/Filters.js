
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Filters = ({ filters, onFilterChange, uniqueValues }) => {

  return (
    <div className="my-4">

      <h1>Filters</h1>
      <Form>
        <Row className="align-items-end">
          {
            Object.keys(filters).map((key) => (
              <Col md={3} key={key}>
                <Form.Group className="mb-3" controlId={`form${key}`}>
                  <Form.Label>
                    {key.toUpperCase()}
                  </Form.Label>
                  <Form.Select name={key} value={filters[key]} onChange={onFilterChange} >
                    {uniqueValues[key] && uniqueValues[key].map((value, index) => (
                      <option key={index}>
                        {value}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            ))
          }

        </Row>
      </Form>


    </div>
  )
}

export default Filters;