import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleFlightDataQuery } from "../features/flightsApiSlice";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const SingleFlightView: React.FC = () => {
  const { id } = useParams();
  const { data: getSingleData } = useGetSingleFlightDataQuery(id);
  return (
    <div>
      {getSingleData && (
        <div>
          <Card
            style={{
              width: "18rem",
              margin: "10px auto",
              boxShadow: "1px 1px 5px gray",
            }}
          >
            <Card.Img
              variant="top"
              src={getSingleData.links.mission_patch_small}
              style={{ padding: "10px" }}
            />
            <Card.Body>
              <Card.Title>
                {" "}
                <b>{getSingleData.mission_name}</b>{" "}
              </Card.Title>
              <Card.Text>{getSingleData.details}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Rocket - <b>{getSingleData.rocket.rocket_name}</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Launch Year <b>{getSingleData.launch_year}</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Launch Success{" "}
                {JSON.stringify(getSingleData.launch_success) == "false" ? (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {JSON.stringify(getSingleData.launch_success)}
                  </span>
                ) : (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {JSON.stringify(getSingleData.launch_success)}
                  </span>
                )}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Link to="/">BACK</Link>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SingleFlightView;
