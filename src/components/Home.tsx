import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { json } from "stream/consumers";
import {
  useGetAllFlightsDataQuery,
  useGetSingleFlightDataQuery,
} from "../features/flightsApiSlice";

const Home: React.FC = () => {
  const {
    data: allFligtsData,
    isLoading,
    error,
  } = useGetAllFlightsDataQuery([]);

  const [flightData, setFlightData] = useState<string[]>([]);

  useEffect(() => {
    setFlightData(allFligtsData);
  }, [flightData]);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>There was a error.</h3>}
      {flightData && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {flightData.map((flight: any) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  margin: "10px auto",
                  boxShadow: "1px 1px 5px gray",
                }}
                key={flight.flight_number}
              >
                <Card.Img
                  variant="top"
                  src={flight.links.mission_patch_small}
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b>{flight.mission_name}</b>{" "}
                  </Card.Title>
                  <Card.Text>{flight.details}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Launch Year <b>{flight.launch_year}</b>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Launch Success{" "}
                    {JSON.stringify(flight.launch_success) == "false" ? (
                      <span style={{ color: "red" }}>
                        {JSON.stringify(flight.launch_success)}
                      </span>
                    ) : (
                      <span style={{ color: "green" }}>
                        {JSON.stringify(flight.launch_success)}
                      </span>
                    )}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">DETAILS</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
