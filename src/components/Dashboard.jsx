// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { signOut, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import Profile from "./Profile";
// import Swal from "sweetalert2";

// /* ================= THEME ================= */
// const colors = {
//   primary: "#0A3CFF",
//   secondary: "#D4AF37",
//   bg: "#F9FAFC",
//   sidebar: "#a0acc9",
//   card: "#FFFFFF",
//   border: "#E6E8F0",
//   textDark: "#1E1E2F",
// };

// /* ================= LAYOUT ================= */

// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   background: ${colors.bg};

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const TopBar = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background: ${colors.primary};
//     color: white;
//     padding: 1rem;
//     font-weight: 600;
//   }
// `;

// const Hamburger = styled.div`
//   font-size: 24px;
//   cursor: pointer;
// `;

// /* ================= SIDEBAR ================= */

// const Sidebar = styled.div`
//   width: 260px;
//   background: ${colors.sidebar};
//   color: white;
//   padding: 2rem 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   transition: transform 0.3s ease-in-out;

//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100%;
//     transform: ${({ open }) =>
//       open ? "translateX(0)" : "translateX(-100%)"};
//     z-index: 1000;
//   }
// `;

// const SidebarTitle = styled.h3`
//   margin-bottom: 1rem;
//   color: ${colors.secondary};
// `;

// const Overlay = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: ${({ open }) => (open ? "block" : "none")};
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.4);
//     z-index: 999;
//   }
// `;

// const SidebarButton = styled.button`
//   background: transparent;
//   color: #e5e7eb;
//   border: 1px solid transparent;
//   padding: 12px;
//   border-radius: 10px;
//   cursor: pointer;
//   text-align: left;
//   font-weight: 500;
//   transition: all 0.2s ease;

//   &:hover {
//     background: ${colors.secondary};
//     color: black;
//     transform: translateX(5px);
//   }
// `;

// const LogoutButton = styled.button`
//   margin-top: auto;
//   background: ${colors.secondary};
//   color: black;
//   border: none;
//   padding: 12px;
//   border-radius: 10px;
//   cursor: pointer;
//   font-weight: 600;

//   &:hover {
//     background: white;
//   }
// `;

// /* ================= CONTENT ================= */

// const ContentArea = styled.div`
//   flex: 1;
//   padding: 1.5rem;
//   overflow-y: auto;
// `;

// const Header = styled.h2`
//   color: ${colors.textDark};
//   margin-bottom: 1rem;
// `;

// /* ================= COMPONENT ================= */

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const [activePage, setActivePage] = useState("profile");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         navigate("/login");
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   const handleLogout = async () => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will be logged out of your account.",
//       icon: "warning",
//       confirmButtonColor: colors.primary,
//       cancelButtonColor: colors.secondary,
//       showCancelButton: true,
//       confirmButtonText: "Yes, logout",
//     });

//     if (result.isConfirmed) {
//       await signOut(auth);
//       navigate("/login");
//     }
//   };

//   const renderPage = () => {
//     switch (activePage) {
//       case "profile":
//         return <Profile />;
//       default:
//         return <Profile />;
//     }
//   };

//   if (loading) {
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>
//         Loading...
//       </h2>
//     );
//   }

//   return (
//     <>
//       <TopBar>
//         <Hamburger onClick={() => setMenuOpen(true)}>☰</Hamburger>
//         <h3>Dashboard</h3>
//       </TopBar>

//       <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />

//       <DashboardContainer>
//         <Sidebar open={menuOpen}>
//           <SidebarTitle>Dashboard</SidebarTitle>

//           <SidebarButton
//             onClick={() => {
//               setActivePage("profile");
//               setMenuOpen(false);
//             }}
//           >
//             Profile
//           </SidebarButton>

//           <SidebarButton
//             onClick={() => {
//               setActivePage("generatebusinessplan");
//               setMenuOpen(false);
//             }}
//           >
//             Generate Business Plan
//           </SidebarButton>

//           <SidebarButton
//             onClick={() => {
//               setActivePage("history");
//               setMenuOpen(false);
//             }}
//           >
//             My Business Plans
//           </SidebarButton>

//           <LogoutButton onClick={handleLogout}>
//             Logout
//           </LogoutButton>
//         </Sidebar>

//         <ContentArea>
//           <Header>Dashboard</Header>
//           {renderPage()}
//         </ContentArea>
//       </DashboardContainer>
//     </>
//   );
// };

// export default UserDashboard;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Profile from "./Profile";
import Swal from "sweetalert2";
import ManageTestimonies from './ManageTestimonies'

/* ================= THEME ================= */
const colors = {
  primary: "#0A3CFF",
  secondary: "#D4AF37",
  bg: "#F8FAFC",
  sidebar: "#FFFFFF",
  border: "#E5E7EB",
  textDark: "#1E293B",
  textLight: "#64748B",
};

/* ================= LAYOUT ================= */

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background: ${colors.bg};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-bottom: 1px solid ${colors.border};
    padding: 1rem;
    font-weight: 600;
  }
`;

const Hamburger = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

/* ================= SIDEBAR ================= */

const Sidebar = styled.div`
  width: 260px;
  background: ${colors.sidebar};
  border-right: 1px solid ${colors.border};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(-100%)"};
    z-index: 1000;
  }
`;

const SidebarTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${colors.primary};
`;

/* Overlay */
const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
  }
`;

/* Sidebar Buttons */
const SidebarButton = styled.button`
  background: transparent;
  color: ${colors.textDark};
  border: none;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #eef2ff;
    color: ${colors.primary};
    transform: translateX(4px);
  }
`;

const LogoutButton = styled.button`
  margin-top: auto;
  background: #fff7e6;
  color: ${colors.secondary};
  border: 1px solid #fde68a;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${colors.secondary};
    color: black;
  }
`;

/* ================= CONTENT ================= */

const ContentArea = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
`;

const Header = styled.h2`
  color: ${colors.textDark};
  margin-bottom: 1rem;
`;

/* ================= COMPONENT ================= */

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "You will be signed out.",
      icon: "warning",
      confirmButtonColor: colors.primary,
      cancelButtonColor: colors.secondary,
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
    });

    if (result.isConfirmed) {
      await signOut(auth);
      navigate("/login");
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;

          case "testimonies":
        return <ManageTestimonies />;
      default:
        return <Profile />;
    }
  };

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <>
      <TopBar>
        <Hamburger onClick={() => setMenuOpen(true)}>☰</Hamburger>
        <h3>Dashboard</h3>
      </TopBar>

      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />

      <DashboardContainer>
        <Sidebar open={menuOpen}>
          <SidebarTitle>Dashboard</SidebarTitle>

          <SidebarButton
            onClick={() => {
              setActivePage("profile");
              setMenuOpen(false);
            }}
          >
            Profile
          </SidebarButton>

          <SidebarButton
            onClick={() => {
              setActivePage("testimonies");
              setMenuOpen(false);
            }}
          >
            ManageTestimonies
          </SidebarButton>

          <SidebarButton
            onClick={() => {
              setActivePage("history");
              setMenuOpen(false);
            }}
          >
            My Business Plans
          </SidebarButton>

          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </Sidebar>

        <ContentArea>
          <Header>Dashboard</Header>
          {renderPage()}
        </ContentArea>
      </DashboardContainer>
    </>
  );
};

export default UserDashboard;