
import styled from 'styled-components';
import { menuItems } from '../utils/menuitems';
import { signout } from '../utils/icons';
import { useAuth0 } from '@auth0/auth0-react';
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    {signout}
      Log Out
 
    </StyledButton>
  );
};
const StyledButton = styled.button`
  background-color: #3b429f;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #aa7dce;
    transform: translateY(-3px);
  }
`;
const Navigation = ({active,setactive}) => {
  const { user} = useAuth0();
  return (
    <Navstyle>
      <div className="user-con">
        <img src={user?.picture} alt="user" />
        <div className="text">
          <h2>{user?.name}</h2>
          <p >{user?.email}</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((m) => {
          return (
            <li key={m.id} onClick={()=>setactive(m.id)} className={active === m.id ? 'active' : ''}>

              {m.icon}
              <span>{m.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <LogoutButton/>
      </div>
    </Navstyle>
  );
};

const Navstyle = styled.nav`
 padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(245, 245, 245, 0.9); /* Light background for elegance */
  border: 3px solid #e0e0e0; /* Soft border color */
  backdrop-filter: blur(5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #f0f0f0; /* Soft background */
      border: 2px solid #ffffff; /* Clean white border */
      padding: 0.2rem;
      box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.1); /* Softer shadow */
    }
    h2 {
      color: #2c3e50; /* Darker, elegant text color */
    }
    p {
      color: #7f8c8d; /* Muted text color for elegance */
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: #34495e; /* Muted dark color for items */
      padding-left: 1rem;
      position: relative;
      i {
        color: #34495e; /* Same muted color for icons */
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: #2980b9 !important; /* Elegant blue for active items */
    i {
      color: #2980b9 !important;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #2980b9; /* Elegant blue */
      border-radius: 0 10px 10px 0;
    }
  }

  .bottom-nav {
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      cursor: pointer;
      padding-left: 1rem;
      color: #34495e; /* Same muted color for bottom nav */
      font-weight: 500;
      i {
        font-size: 1.4rem;
        color: #34495e; /* Same muted color for icons */
      }
    }
  }

  /* Media Queries for responsive design */
  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 576px) {
    width: 200px;
    padding: 1rem;

    .user-con {
      img {
        width: 60px;
        height: 60px;
      }
      h2 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.8rem;
      }
    }

    .menu-items {
      li {
        font-size: 0.9rem;
        i {
          font-size: 1.2rem;
        }
      }
    }

    .bottom-nav li {
      font-size: 0.9rem;
      i {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Navigation;
