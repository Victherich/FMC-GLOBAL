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
import InspirationModal from "./InspirationModal";
import Swal from "sweetalert2";

/* ================= STYLES ================= */

const Page = styled.div`
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #0a3cff;
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
  color: #0a3cff;
`;

const Name = styled.h4`
  margin: 5px 0;
  color: #222;
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: #222;
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
  color: #0a3cff;
`;

const AddButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: #0a3cff;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

/* ================= COMPONENT ================= */

export default function ManageInspirations() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
  });

  const ref = collection(db, "inspirations");

  const fetchData = async () => {
    const snap = await getDocs(ref);
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
    try {
      Swal.fire({
        title: "Saving...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      if (editingId) {
        await updateDoc(doc(db, "inspirations", editingId), form);
      } else {
        await addDoc(ref, {
          ...form,
          createdAt: new Date(),
        });
      }

      Swal.close();

      Swal.fire({
        icon: "success",
        title: "Saved!",
        timer: 1500,
        showConfirmButton: false,
      });

      setShowModal(false);
      setForm({ title: "", category: "", content: "" });
      setEditingId(null);
      fetchData();
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong!",
      });
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
    });

    if (!result.isConfirmed) return;

    Swal.fire({
      title: "Deleting...",
      didOpen: () => Swal.showLoading(),
    });

    await deleteDoc(doc(db, "inspirations", id));

    Swal.close();

    Swal.fire({
      icon: "success",
      title: "Deleted!",
      timer: 1500,
      showConfirmButton: false,
    });

    fetchData();
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = date.seconds ? new Date(date.seconds * 1000) : new Date(date);

    return d.toLocaleString("en-US", {
      month: "long", // 👈 shows full month (e.g. March)
      year: "numeric",
    });
  };

  const filteredData = data.filter((item) => {
    const text = `${item.title || ""} ${item.category || ""}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <Page>
      <Title>Manage Inspirations</Title>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ddd",
          outline: "none",
        }}
      />

      <Grid>
        {filteredData.map((item) => (
          <Card key={item.id}>
            <Category>{item.category.toUpperCase()}</Category>

            <Name>{item.title}</Name>

            <Text>{item.content}</Text>

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
          setForm({ title: "", category: "", content: "" });
        }}
      >
        Add <FaPlus />
      </AddButton>

      {showModal && (
        <InspirationModal
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