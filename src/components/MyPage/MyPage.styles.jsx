import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
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
  gap: 1rem;
`;

export const NavItem = styled.div`
  color: #ff6600;
  cursor: pointer;
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
  margin-bottom: 1rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  margin: 0;
  color: #0056b3;
`;

export const Detail = styled.p`
  margin: 0.2rem 0;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  color: #0056b3;
`;

export const SectionItem = styled.div`
  background-color: #f0f8ff;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  border: 1px dotted #ccc;
`;