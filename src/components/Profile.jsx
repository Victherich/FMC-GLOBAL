import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaIdCard,
  FaComments,
  FaSignOutAlt,
  FaEdit,
} from "react-icons/fa";

/* ================= THEME ================= */
const colors = {
  primary: "#5B6CFF",
  secondary: "#7C4DFF",
  bg: "#F4F6FF",
  card: "rgba(255,255,255,0.85)",
  textDark: "#2D2E4A",
};

/* ================= LAYOUT ================= */
const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  padding: 2rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= PROFILE PANEL ================= */
const ProfilePanel = styled.div`
  background: ${colors.card};
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  color: ${colors.textDark};
`;

const Email = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const InfoItem = styled.p`
  font-size: 0.9rem;
  margin: 0.4rem 0;
`;

const EditButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 10px;
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${colors.secondary};
  }
`;

/* ================= ACTION AREA ================= */
const ActionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const ActionCard = styled.div`
  background: ${colors.card};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.6rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${colors.primary};
  margin-bottom: 0.6rem;
`;

const Label = styled.h4`
  color: ${colors.textDark};
`;

const Desc = styled.p`
  font-size: 0.85rem;
  color: #666;
`;

/* ================= COMPONENT ================= */
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserData({ ...userSnap.data(), uid: user.uid });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;

  if (!userData) {
    return <p style={{ color: "white" }}>No profile data found</p>;
  }

  return (
    <Page>
      <Wrapper>
        {/* PROFILE PANEL */}
        <ProfilePanel>
          <Avatar>👤</Avatar>
          <Name>{userData.name || "User"}</Name>
          <Email>{userData.email}</Email>

          <InfoItem><FaIdCard /> ID: {userData.uid}</InfoItem>
          <InfoItem><FaUser /> Role: User</InfoItem>
          <InfoItem><FaPhone /> Phone: {userData.phone || "N/A"}</InfoItem>

          <EditButton onClick={() => navigate("/edit-profile") }>
            <FaEdit /> Edit Profile
          </EditButton>
        </ProfilePanel>

        {/* ACTIONS */}
        <ActionArea>
          <Title>Actions</Title>
          <Grid>

            <ActionCard onClick={() => navigate('/forum')}>
              <Icon><FaComments /></Icon>
              <Label>Forum</Label>
              <Desc>Join discussions</Desc>
            </ActionCard>

            <ActionCard onClick={() => navigate('/edit-profile')}>
              <Icon><FaEdit /></Icon>
              <Label>Edit Profile</Label>
              <Desc>Update your details</Desc>
            </ActionCard>

            <ActionCard onClick={handleLogout}>
              <Icon style={{ color: 'red' }}><FaSignOutAlt /></Icon>
              <Label>Logout</Label>
              <Desc>Sign out securely</Desc>
            </ActionCard>

          </Grid>
        </ActionArea>
      </Wrapper>
    </Page>
  );
};

export default Profile;
