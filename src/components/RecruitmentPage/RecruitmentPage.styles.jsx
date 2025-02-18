import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0056b3;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem; /* 일정한 간격 유지 */
  align-items: center;
`;

export const NavItem = styled.div`
  color: #000; /* 검은색으로 변경 */
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem; /* 클릭 영역 확대 및 일정한 크기 */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3; /* 마우스 오버 시 색상 변경 */
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 2rem;
`;

export const Sidebar = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 1px solid #ddd;
  padding-right: 1rem;
`;

export const SidebarItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  color: #333;

  &:hover {
    color: #0056b3;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding-left: 2rem;
`;

export const Title = styled.h2`
  color: #0056b3;
  margin-bottom: 2rem;
`;

export const Highlight = styled.span`
  color: #ff3366;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  resize: none;
  height: 150px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #003f7f;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

// 모집 내용의 줄바꿈(엔터) 적용을 위한 스타일 컴포넌트
export const RecruitmentDescription = styled.div`
  white-space: pre-line;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: #fff;
`;
