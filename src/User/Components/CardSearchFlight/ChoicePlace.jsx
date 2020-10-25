/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import {
  CardChoice,
  CardInner,
  LabelSearch,
  SearchContainer,
  InputContainer,
  IconButton,
  InputUser,
  ListPlace,
  RecentPlace,
  AllPlace,
  UnorderList,
  List,
  LabelInput,
  ButtonList,
} from "./styled";

import searchIcon from "../../Assets/search.svg";

import SearchActions from "../../Redux/actions/search";

const ChoicePlace = (props) => { 
  const [cityName, setCityName] = useState("");
  const allCity = useSelector((state) => state.getAllCity);
  const city = useSelector((state) => state.getCity);
  const dispatch = useDispatch();

  const setPlace = (cityId, cityName, countryName, countryCode) => {
    if(props.isOrigin){
      localStorage.setItem("originCityId", cityId);
      localStorage.setItem("originCityName", cityName);
      localStorage.setItem("originCountryName", countryName);
      localStorage.setItem("originCountryCode", countryCode);
    }else{
      localStorage.setItem("destinationCityId", cityId);
      localStorage.setItem("destinationCityName", cityName);
      localStorage.setItem("destinationCountryName", countryName);
      localStorage.setItem("destinationCountryCode", countryCode);
    }
    props.choice();
    console.log(props.isOrigin);
  };

  const searchCity = (e) => {
    setCityName(e.target.value);
    dispatch(SearchActions.getCity(cityName));
  };

  const getData = async () => {
    await dispatch(SearchActions.getAllCity());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <CardChoice choiceDisplay={props.choiceDisplay}>
      <CardInner fluid={true}>
        <LabelSearch>Search for your origin place</LabelSearch>
        <SearchContainer fluid={true}>
          <IconButton>
            <img src={searchIcon} alt="" />
          </IconButton>
          <InputContainer>
            <InputUser
              type="text"
              name="cityName"
              id="cityName"
              onChange={searchCity}
              value={cityName}
              placeholder="Search place..."
            />
          </InputContainer>
        </SearchContainer>
      </CardInner>
      <ListPlace fluid={true}>
        <RecentPlace fluid={true}>
          <LabelInput>Recent Place</LabelInput>
          <UnorderList>
            <ButtonList className="btn-block" onClick={props.choice}>
              <List className="w-100">
                {props.origin && (
                  <Row className="w-100">
                    <Col>{localStorage.getItem("originCityName")}</Col>
                    <Col>{localStorage.getItem("originCountryCode")}</Col>
                    <Col>{localStorage.getItem("originCountryName")}</Col>
                  </Row>
                )}
              </List>
            </ButtonList>
          </UnorderList>
        </RecentPlace>
        <AllPlace fluid={true}>
          <LabelInput>All Place</LabelInput>
          <UnorderList>
            {cityName !== "" &&
              !city.isLoading &&
              !city.isError &&
              city.data.map((item) => (
                <ButtonList
                  onClick={setPlace}
                  className="d-flex justify-content-between btn-block"
                >
                  <List className="w-100">
                    <Row className="w-100 justify-content-between">
                      <Col>{item.city_name}</Col>
                      <Col>{item.country_code}</Col>
                      <Col>{item.country_name}</Col>
                    </Row>
                  </List>
                </ButtonList>
              ))}
            {cityName === "" &&
              !city.isLoading &&
              !city.isError &&
              allCity.data.map((item) => (
                <ButtonList
                  onClick={() =>
                    setPlace(
                      item.id,
                      item.city_name,
                      item.country_code,
                      item.country_name
                    )
                  }
                  className="d-flex justify-content-between btn-block"
                >
                  <List className="w-100">
                    <input type="text" value={item.id} className="d-none" />
                    <Row className="w-100 justify-content-between">
                      <Col>{item.city_name}</Col>
                      <Col>{item.country_code}</Col>
                      <Col>{item.country_name}</Col>
                    </Row>
                  </List>
                </ButtonList>
              ))}
          </UnorderList>
        </AllPlace>
      </ListPlace>
    </CardChoice>
  );
};

export default ChoicePlace;
