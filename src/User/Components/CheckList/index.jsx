import React, { useState, useEffect } from "react";
import "./styled/style.css";
import { Collapse, Button, Label, Input, Row } from "reactstrap";
import {useDispatch, useSelector} from "react-redux";

import upIcon from "../../Assets/up.svg";
import filterAction from "../../Redux/actions/search";

const CheckList = () => {
  const [transit, setTransit] = useState(false);
  const toggleTransit = () => setTransit(!transit);
  const [facilities, setFacilities] = useState(false);
  const toggleFacilities = () => setFacilities(!facilities);
  const [depart, setDepart] = useState(false);
  const toggleDepart = () => setDepart(!depart);
  const [arrived, setArrived] = useState(false);
  const toggleArrived = () => setArrived(!arrived);
  const [airlines, setAirlines] = useState(false);
  const toggleAirlines = () => setAirlines(!airlines);
  const [ticketPrice, setTicketPrice] = useState(false);
  const toggleTicketPrice = () => setTicketPrice(!ticketPrice);
  const dispatch = useDispatch();
  const filterSearch = useSelector(state => state.findTicket.filterData);

  const [transitVal, setTransitVal] = useState([0,0,0]);
  const [facilityVal, setFacilityVal] = useState([null,null,null]);
  const [departTime, setDepartTime] = useState([0,0,0,0]);
  const [arrivedTime, setArrivedTime] = useState([0,0,0,0]);
  const [airlinesName, setAirlinesName] = useState([null, null, null]);
  const [price, setPrice] = useState([0, 1000]);

  const transitChange = (i,e) => {
    console.log(e.target.value);
    if (!e.target.checked) {
      setTransitVal(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? 0 : item;
          return item;
        });
      });
    } else {
      setTransitVal(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? 1 : item;
          return item;
        });
      });
    }
  };

  const facilityChange = (i,e) => {
    let val = e.target.value ? e.target.value : null;
    if (!e.target.checked) {
      setFacilityVal(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? null : item;
          return item;
        });
      });
    } else {
      setFacilityVal(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? val : item;
          return item;
        });
      });
    }
  };

  const departChange = (i,e) => {
    if (!e.target.checked) {
      setDepartTime(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? 0 : item;
          return item;
        });
      });
    } else {
      setDepartTime(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? 1 : item;
          return item;
        });
      });
    }
  };

  const arrivedChange = (i,e) => {
    if (!e.target.checked) {
      setArrivedTime(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? 0 : item;
          return item;
        });
      });
    } else {
      setArrivedTime(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? 1 : item;
          return item;
        });
      });
    }
  };

  const airlinesNameChange = (i,e) => {
    let val = e.target.value ? e.target.value : null;
    if (!e.target.checked) {
      setAirlinesName(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? null : item;
          return item;
        });
      });
    } else {
      setAirlinesName(prevQty => {
        return prevQty.map((item, index) => {
          item = (index === i) ? val : item;
          return item;
        });
      });
    }
  };

  const priceChange = (e) => {
    let val = e.target.value ? e.target.value : null;
    setPrice(prevQty => {
      return prevQty.map((item, index) => {
        item = (index === 1) ? val : item;
        return item;
      });
    });
  };

  useEffect(()=>{
    console.log(transitVal);
    console.log(facilityVal);
    console.log(departTime);
    console.log(arrivedTime);
    console.log(airlinesName);
    console.log(price);

    let data = {
      transit: transitVal,
      facility: facilityVal,
      arrived_time: arrivedTime,
      departure_time: departTime,
      price: price,
      airlines_name: airlinesName
    };
    console.log(data);

    dispatch(filterAction.filterTicket(data));

    console.log(filterSearch);
    
  },[transitVal, facilityVal, departTime, arrivedTime, airlinesName, price]);

  return (
    <div className="mt-3 bg-white rounded-lg">
      <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleTransit}>
        <div>
          <span>Transit</span>
        </div>
        <img className="arrow" src={upIcon} alt="arrow"/>
      </Button>
      <Collapse isOpen={transit} className="bg-white p-3">
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="direct">Direct</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="direct" value={1} onChange={(e) => transitChange(0,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="transit">Transit</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="transit" value={1} onChange={(e) => transitChange(1,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center">
          <div className="pl-3">
            <Label for="transit2+">Transit 2+</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="transit2+" value={1} onChange={(e) => transitChange(2,e)}></Input>
          </div>
        </Row>
      </Collapse>

      <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleFacilities}>
        <div>
          <span>
              Facilities
          </span>
        </div>
        <img className="arrow" src={upIcon} alt="arrow"/>
      </Button>
      <Collapse isOpen={facilities} className="bg-white p-3">
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="luggage">Luggage</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="luggage" value={"luggage"} onChange={(e) => facilityChange(0,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="inFlightMeal">In-Flight Meal</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="inFlightMeal" value={"in_flight_meal"} onChange={(e) => facilityChange(1,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center">
          <div className="pl-3">
            <Label for="wifi">Wi-fi</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="wifi" value={"wifi"} onChange={(e) => facilityChange(2,e)}></Input>
          </div>
        </Row>
      </Collapse>

      <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleDepart}>
        <div>
          <span>
              Departure Time
          </span>
        </div>
        <img className="arrow" src={upIcon} alt="arrow"/>
      </Button>
      <Collapse isOpen={depart} className="bg-white p-3">
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="0-6">00:00 - 00:06</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="0-6" value={1} onChange={(e) => departChange(0,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="6-12">06:00 - 12:00</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="6-12" value={1} onChange={(e) => departChange(1,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="12-18">12:00 - 18:00</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="12-18" value={1} onChange={(e) => departChange(2,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center">
          <div className="pl-3">
            <Label for="18-24">18:00 - 24:00</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="18-24" value={1} onChange={(e) => departChange(3,e)}></Input>
          </div>
        </Row>
      </Collapse>

      <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleArrived}>
        <div>
          <span>
              Time Arrived
          </span>
        </div>
        <img className="arrow" src={upIcon} alt="arrow"/></Button>
      <Collapse isOpen={arrived} className="bg-white p-3">
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="0-6">00:00 - 00:06</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="0-6" value={1} onChange={(e) => arrivedChange(0,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="6-12">06:00 - 12:00</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="6-12" value={1} onChange={(e) => arrivedChange(1,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="12-18">12:00 - 18:00</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="12-18" value={1} onChange={(e) => arrivedChange(2,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center">
          <div className="pl-3">
            <Label for="18-24">18:00 - 24:00</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="18-24" value={1} onChange={(e) => arrivedChange(3,e)}></Input>
          </div>
        </Row>
      </Collapse>

      <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleAirlines}>
        <div>
          <span>
              Airlines
          </span>
        </div>
        <img className="arrow" src={upIcon} alt="arrow"/></Button>
      <Collapse isOpen={airlines} className="bg-white p-3">
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="garuda">Garuda Indonesia</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="garuda" value={"Garuda Indonesia"} onChange={(e) => airlinesNameChange(0,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <div className="pl-3">
            <Label for="airAsia">Air Asia</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="airAsia" value={"Airasia"} onChange={(e) => airlinesNameChange(1,e)}></Input>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center">
          <div className="pl-3">
            <Label for="lionAir">Lion Air</Label>
          </div>
          <div className="pr-3">
            <Input className="position-relative" type="checkbox" id="lionAir" value={"Lionair"} onChange={(e) => airlinesNameChange(2,e)}></Input>
          </div>
        </Row>
      </Collapse>

      <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleTicketPrice}>
        <div>
          <span>
              Ticket Price
          </span>
        </div>
        <img className="arrow" src={upIcon} alt="arrow"/></Button>
      <Collapse isOpen={ticketPrice} className="bg-white p-3">
        <Row className="justify-content-between align-items-center mb-3">
          <div className="text-muted pl-3">
            <span>Lowest</span>
          </div>
          <div className="text-muted pr-3">
            <span>Highest</span>
          </div>
        </Row>
        <Row className="justify-content-between align-items-center mb-3">
          <Input className="mx-3" type="range" name="range" id="exampleRange" min={0} max={1000} value={price[1]} onChange={(e) => priceChange(e)} />
        </Row>
        <Row className="justify-content-between align-items-center">
          <div className="price-color pl-3 font-weight-bold">
            <span>$ {price[0]},00</span>
          </div>
          <div className="price-color pr-3 font-weight-bold">
            <span>$ {price[1]},00</span>
          </div>
        </Row>
      </Collapse>
    </div>
  );
};

export default CheckList;
