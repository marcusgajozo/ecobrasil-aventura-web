import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  overflow-y: auto;
  padding: 1rem 0;
  border-radius: 40px;
  border: 2px solid #ffc107;
  width: 30%;
  height: 100%;
  position: relative;

  .badge-maps-visited {
    background-color: #ffc107;
    color: #12502c;
    border-radius: 40px;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 15px;
    margin-top: 10px;
  }
`;
