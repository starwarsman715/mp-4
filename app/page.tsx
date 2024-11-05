"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const [city, setCity] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component is mounted on the client
  }, []);

  return (
    <StyledDiv>
      <h1>Find the Weather in any city!</h1>
      <p>Enter a city name below to get the current weather</p>
      <input
        type="text"
        value={city}
        placeholder="City name"
        onChange={(e) => setCity(e.target.value)}
      />
      {isClient && (
        <Link href={`/${encodeURIComponent(city)}`}>Get Weather</Link>
      )}
    </StyledDiv>
  );
}
