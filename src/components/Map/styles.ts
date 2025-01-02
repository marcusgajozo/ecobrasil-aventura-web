import styled from "styled-components";

export const Container = styled.div<{ openMap: boolean }>`
  display: ${({ openMap }) => (openMap ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 800px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  left: 50%;
  top: 50%;
  gap: 2.5rem;
  padding: 5rem;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const ListMap = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
`;

export const CurrentMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const MapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapSaved = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const Image = styled.img``;

export const MapName = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
`;

export const MapPath = styled.div`
  display: flex;
  gap: 2rem;
`;

export const MapPathButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
