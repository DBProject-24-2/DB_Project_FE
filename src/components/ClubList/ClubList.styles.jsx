// ClubList.styles.js

import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

export const Sidebar = styled.div`
  width: 180px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-right: 30px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    position: static;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 10px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  font-size: 14px;
  font-weight: ${(props) => (props.isSelected ? "700" : "400")};
  color: ${(props) => (props.isSelected ? "#007aff" : "#333")};
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isSelected ? "#e6f7ff" : "transparent"};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Title1 = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: left;
  margin-bottom: 10px;
`;

export const TitleBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-bottom: 15px;
  border-radius: 2px;
`;

// Container: 화면 크기에 따라 카드 개수가 자동 조정되도록 함
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

// EventBox: 모바일에서도 데스크탑과 동일한 카드 형태를 유지
export const EventBox = styled.div`
  background-color: #ffffff;
  border: 0.2px solid rgb(213, 213, 213);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    /* 모바일에서도 카드형식을 유지하며, 필요 시 카드 크기를 조정 */
    width: 100%;
    padding: 10px;
  }
`;

// ImageWrapper: 모바일에서도 이미지를 숨기지 않고 보여줌
export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgb(255, 82, 85);
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 8px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    text-align: left;
    margin: 10px 0 0 0;
    color: #000;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6e6e73;
  text-align: center;
  margin: 0 10px 10px 10px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
