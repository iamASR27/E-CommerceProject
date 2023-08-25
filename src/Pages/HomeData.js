import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./HomeData.css";

const Data = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const HomeData = () => {
  const data = Data.map((data) => (
    <tr key={data.date} className="border-bottom">
      <td className="date-cell">
        <h2>{data.date}</h2>
      </td>
      <td>{data.city}</td>
      <td>{data.venue}</td>
      <td>
        <Button variant="primary">Buy Tickets</Button>
      </td>
    </tr>
  ));
  return (
    <div className="tour">
      <h3>Tours</h3>
      <Table responsive borderless className="tour-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </Table>
    </div>
  );
};

export default HomeData;
