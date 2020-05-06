import React from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

const NewCharacter = () => {
  return (
    <div className="container">
      <h1>New Character</h1>
      <Form>
        <Row form>
          <Col md="6">
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your character name"
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label htmlFor="height">Height</Label>
              <Input
                type="text"
                name="height"
                id="height"
                placeholder="Enter your character's height"
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label htmlFor="mass">Mass</Label>
              <Input
                type="text"
                name="mass"
                id="mass"
                placeholder="Enter your character's mass"
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label htmlFor="eyeColor">Eye Color</Label>
              <Input
                type="text"
                name="eyeColor"
                id="eyeColor"
                placeholder="Enter your character's eye color"
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label htmlFor="birthYear">Birth Year</Label>
              <Input
                type="text"
                name="birthYear"
                id="birthYear"
                placeholder="Enter your character's year of birth"
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default NewCharacter;
