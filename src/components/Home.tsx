import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Input } from "antd";
import ListGroup from "react-bootstrap/ListGroup";
import { useGetAllFlightsDataQuery } from "../features/flightsApiSlice";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const {
    data: allFligtsData,
    isLoading,
    error,
  } = useGetAllFlightsDataQuery([]);

  const [flightData, setFlightData] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFlightData(allFligtsData);
  }, [flightData]);

  const filteredFlight =
    flightData &&
    flightData.filter((flight: any) =>
      flight.mission_name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>There was a error.</h3>}
      <Input
        placeholder="Search Flight..."
        style={{
          width: "300px",
          margin: "20px",
          boxShadow: "1px 1px 5px gray",
        }}
        onChange={handleSearch}
      />
      {filteredFlight && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {filteredFlight.map((flight: any) => {
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
                  style={{ padding: "10px" }}
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
                    Rocket - <b>{flight.rocket.rocket_name}</b>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Launch Year <b>{flight.launch_year}</b>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Launch Success{" "}
                    {JSON.stringify(flight.launch_success) == "false" ? (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        {JSON.stringify(flight.launch_success)}
                      </span>
                    ) : (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        {JSON.stringify(flight.launch_success)}
                      </span>
                    )}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link to={`/launches/${flight.flight_number}`}>DETAILS</Link>
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
