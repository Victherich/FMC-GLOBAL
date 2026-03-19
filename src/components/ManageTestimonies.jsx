import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import TestimonyModal from "./TestimonyModal";

/* ================= STYLES ================= */

const Page = styled.div`
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
  position:relative;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #e5e7eb;
`;

const Category = styled.div`
  font-size: 0.75rem;
  color: #d4af37;
`;

const Name = styled.h4`
  margin: 5px 0;
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: #475569;
`;

const Meta = styled.div`
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 8px;
`;

const Actions = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
`;

const AddButton = styled.button`
  position:absolute;
  bottom: 100px;
  right: 30px;
  background:  #0a3cff;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;
`;

/* ================= COMPONENT ================= */

export default function ManageTestimonies() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    name: "",
    category: "",
    text: "",
  });

  const testimoniesRef = collection(db, "testimonies");

  const fetchData = async () => {
    const snap = await getDocs(testimoniesRef);
    const list = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async () => {
    if (editingId) {
      await updateDoc(doc(db, "testimonies", editingId), form);
    } else {
      await addDoc(testimoniesRef, {
        ...form,
        createdAt: new Date(),
      });
    }

    setShowModal(false);
    setForm({ title: "", name: "", category: "", text: "" });
    setEditingId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "testimonies", id));
    fetchData();
  };

  // 📅 FORMAT DATE
  const formatDate = (date) => {
    if (!date) return "";
    const d = date.seconds ? new Date(date.seconds * 1000) : new Date(date);
    return d.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Page>
      <Title>Manage Testimonies</Title>

      <Grid>
        {data.map((item) => (
          <Card key={item.id}>
            <Category>{item.category}</Category>

            <Name>
              {item.title} {item.name}
            </Name>

            <Text>{item.text}</Text>

            <Meta>{formatDate(item.createdAt)}</Meta>

            <Actions>
              <Btn onClick={() => handleEdit(item)}>
                <FaEdit />
              </Btn>
              <Btn onClick={() => handleDelete(item.id)}>
                <FaTrash />
              </Btn>
            </Actions>
          </Card>
        ))}
      </Grid>

      <AddButton
        onClick={() => {
          setShowModal(true);
          setEditingId(null);
          setForm({
            title: "",
            name: "",
            category: "",
            text: "",
          });
        }}
      >
        <FaPlus />
      </AddButton>

      {showModal && (
        <TestimonyModal
          form={form}
          setForm={setForm}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          editing={editingId}
        />
      )}
    </Page>
  );
}