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
import SermonModal from "./SermonModal";
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

const Name = styled.h4`
  margin: 5px 0;
`;

const Text = styled.p`
  font-size: 0.9rem;
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

export default function ManageSermons() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    video: "",
  });

  const [videoFile, setVideoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const refCollection = collection(db, "sermons");

  const fetchData = async () => {
    const snap = await getDocs(refCollection);
    const list = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     if (file.size > 50 * 1024 * 1024) {
  //       return Swal.fire("Video too large (max 50MB)");
  //     }

  //     setVideoFile(file);
  //     setPreviewUrl(URL.createObjectURL(file));
  //   }
  // };

  // const handleSave = async () => {
  //   try {
  //     if (!editingId && !videoFile) {
  //       return Swal.fire("Please select a video");
  //     }

  //     Swal.fire({
  //       title: "Uploading video...",
  //       allowOutsideClick: false,
  //       didOpen: () => Swal.showLoading(),
  //     });

  //     let videoUrl = form.video;

  //     if (videoFile) {
  //       const data = new FormData();
  //       data.append("file", videoFile);
  //       data.append("upload_preset", "fmc_global");
  //       data.append("folder", "sermons");

  //       const res = await fetch(
  //         "https://api.cloudinary.com/v1_1/dyo31jpty/video/upload",
  //         {
  //           method: "POST",
  //           body: data,
  //         }
  //       );

  //       const result = await res.json();

  //       if (!res.ok) {
  //         throw new Error(result.error?.message || "Upload failed");
  //       }

  //       videoUrl = result.secure_url;
  //     }

  //     const payload = {
  //       title: form.title,
  //       description: form.description,
  //       video: videoUrl,
  //     };

  //     if (editingId) {
  //       await updateDoc(doc(db, "sermons", editingId), payload);
  //     } else {
  //       await addDoc(refCollection, {
  //         ...payload,
  //         createdAt: new Date(),
  //       });
  //     }

  //     Swal.close();

  //     Swal.fire({
  //       icon: "success",
  //       title: "Saved!",
  //       timer: 1500,
  //       showConfirmButton: false,
  //     });

  //     setShowModal(false);
  //     setForm({ title: "", description: "", video: "" });
  //     setVideoFile(null);
  //     setPreviewUrl(null);
  //     setEditingId(null);

  //     fetchData();
  //   } catch (error) {
  //     Swal.close();
  //     Swal.fire("Error", error.message, "error");
  //   }
  // };

 
 
 const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    if (file.size > 90 * 1024 * 1024) {
      return Swal.fire({
        icon: "error",
        title: "File too large",
        text: "Maximum allowed size is 90MB",
      });
    }

    setVideoFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }
};






const handleSave = async () => {
  try {
    if (!editingId && !videoFile) {
      return Swal.fire("Please select a video");
    }

    let videoUrl = form.video;

    if (videoFile) {
      const data = new FormData();
      data.append("file", videoFile);
      data.append("upload_preset", "fmc_global");
      data.append("folder", "sermons");

      // 🔥 Create progress UI
      Swal.fire({
        title: "Uploading video...",
        html: `
          <div style="width:100%;background:#eee;border-radius:10px;">
            <div id="progress-bar" style="
              width:0%;
              height:10px;
              background:#0A3CFF;
              border-radius:10px;
            "></div>
          </div>
          <p id="progress-text" style="margin-top:10px;">0%</p>
        `,
        allowOutsideClick: false,
        showConfirmButton: false,
      });

      const uploadPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(
          "POST",
          "https://api.cloudinary.com/v1_1/dyo31jpty/video/upload"
        );

        // ✅ Track progress
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = Math.round(
              (event.loaded / event.total) * 100
            );

            const bar = document.getElementById("progress-bar");
            const text = document.getElementById("progress-text");

            if (bar) bar.style.width = percent + "%";
            if (text) text.innerText = percent + "%";
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(new Error("Upload failed"));
          }
        };

        xhr.onerror = () => reject(new Error("Upload error"));

        xhr.send(data);
      });

      const result = await uploadPromise;
      videoUrl = result.secure_url;
    }

    const payload = {
      title: form.title,
      description: form.description,
      video: videoUrl,
    };

    if (editingId) {
      await updateDoc(doc(db, "sermons", editingId), payload);
    } else {
      await addDoc(refCollection, {
        ...payload,
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
    setForm({ title: "", description: "", video: "" });
    setVideoFile(null);
    setPreviewUrl(null);
    setEditingId(null);

    fetchData();
  } catch (error) {
    Swal.close();
    Swal.fire("Error", error.message, "error");
  }
};
 
 
 
 
 
 
 
 
 
  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
    setShowModal(true);
    setPreviewUrl(item.video);
    setVideoFile(null);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
    });

    if (!result.isConfirmed) return;

    await deleteDoc(doc(db, "sermons", id));
    Swal.fire("Deleted!", "", "success");
    fetchData();
  };

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page>
      <Title>Manage Sermons</Title>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
        }}
      />

      <Grid>
        {filteredData.map((item) => (
          <Card key={item.id}>
            {item.video && (
              <video
                src={item.video}
                controls
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
            )}

            <Name>{item.title}</Name>
            <Text>{item.description}</Text>

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
          setForm({ title: "", description: "", video: "" });
          setVideoFile(null);
          setPreviewUrl(null);
        }}
      >
        Add <FaPlus />
      </AddButton>

      {showModal && (
        <SermonModal
          form={form}
          setForm={setForm}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          editing={editingId}
          handleFileChange={handleFileChange}
          previewUrl={previewUrl}
        />
      )}
    </Page>
  );
}