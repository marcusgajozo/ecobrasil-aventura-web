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
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const ContentMap = styled.div`
  display: flex;
  gap: 50px;
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
`;

export const MapSaved = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const MapName = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const MapPath = styled.div`
  display: flex;
  gap: 10px;
`;

export const MapPathButton = styled.button``;
