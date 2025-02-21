import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import Sorting from "../Sorting/Sorting";
import DestinationList from "../DestinationList/DestinationList";
import "./Body.css";

const Body = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [seasonFilter, setSeasonFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("/destinations.json")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
        setFilteredDestinations(data);
      });
  }, []);

  useEffect(() => {
    let filtered = destinations.filter(
      (destination) =>
        destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (budgetFilter) {
      filtered = filtered.filter((destination) => destination.budget === budgetFilter);
    }

    if (seasonFilter) {
      filtered = filtered.filter((destination) => destination.bestSeason === seasonFilter);
    }

    if (sortOption) {
      filtered.sort((a, b) => (a[sortOption] > b[sortOption] ? 1 : -1));
    }

    setFilteredDestinations(filtered);
  }, [searchQuery, budgetFilter, seasonFilter, sortOption, destinations]);

  return (
    <div className="body">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters setBudgetFilter={setBudgetFilter} setSeasonFilter={setSeasonFilter} />
      <Sorting setSortOption={setSortOption} />
      <DestinationList destinations={filteredDestinations} />
    </div>
  );
};

export default Body;
