




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
import EventModal from "./EventModal";
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

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
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

export default function ManageEvents() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
  title: "",
  description: "",
  image: "",
  date: "",
  time: "",
  venue: "",
});

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const refCollection = collection(db, "events");

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };









const compressImage = (file, maxSizeKB = 100) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("No file provided"));

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = document.createElement("img"); // 🔹 safer than `new Image()`
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");

        const MAX_WIDTH = 800;
        const scaleSize = img.width > MAX_WIDTH ? MAX_WIDTH / img.width : 1;

        canvas.width = img.width * scaleSize;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let quality = 0.7;

        const compressLoop = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) return reject(new Error("Compression failed"));

              const sizeKB = blob.size / 1024;
              if (sizeKB <= maxSizeKB || quality <= 0.1) {
                resolve(blob);
              } else {
                quality -= 0.1;
                compressLoop();
              }
            },
            "image/jpeg",
            quality
          );
        };

        compressLoop();
      };

      img.onerror = () => reject(new Error("Image load failed"));
    };

    reader.onerror = () => reject(new Error("File reading failed"));

    reader.readAsDataURL(file);
  });
};




const handleSave = async () => {
  try {
    if (!editingId && !imageFile) {
      return Swal.fire({
        icon: "warning",
        text: "Please select an event flyer.",
      });
    }

    Swal.fire({
      title: "Uploading image...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    let imageUrl = form.image;

    if (imageFile) {
      const compressedBlob = await compressImage(imageFile, 100);

      console.log(
        "Compressed size:",
        (compressedBlob.size / 1024).toFixed(2),
        "KB"
      );

      const data = new FormData();
      data.append("file", compressedBlob, "event.jpg");
      data.append("upload_preset", "echobyte_digital_store_upload");
      data.append("folder", "events");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ddh4wrbok/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      if (!res.ok) {
        console.error("Cloudinary error:", result);
        throw new Error(result.error?.message || "Image upload failed");
      }

      imageUrl = result.secure_url;
    }

    const payload = {
  title: form.title,
  description: form.description,
  image: imageUrl,
  date: form.date,
  time: form.time,
  venue: form.venue,
};

    if (editingId) {
      await updateDoc(doc(db, "events", editingId), payload);
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

    // reset
    setShowModal(false);
    setForm({
  title: "",
  description: "",
  image: "",
  date: "",
  time: "",
  venue: "",
});
    setImageFile(null);
    setPreviewUrl(null);
    setEditingId(null);

    fetchData();
  } catch (error) {
    console.error("Upload error:", error);

    Swal.close();
    Swal.fire({
      icon: "error",
      title: "Upload Failed",
      text: error.message || "Try again.",
    });
  }
};








  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
    setShowModal(true);
    setPreviewUrl(item.image);
    setImageFile(null);
  };





  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
    });

    if (!result.isConfirmed) return;

    await deleteDoc(doc(db, "events", id));

    Swal.fire("Deleted!", "", "success");
    fetchData();
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = date.seconds ? new Date(date.seconds * 1000) : new Date(date);

    return d.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );


  const formatEventDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString();
};

  return (
    <Page>
      <Title>Manage Events</Title>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <Grid>
        {filteredData.map((item) => (
          <Card key={item.id}>
            {item.image && <Image src={item.image} />}

           <Name>
  {item.title
    ? item.title.charAt(0).toUpperCase() + item.title.slice(1)
    : ""}
</Name>

<Text>
  {item.description
    ? item.description.charAt(0).toUpperCase() + item.description.slice(1)
    : ""}
</Text>

<Text><strong>Date:</strong> {formatEventDate(item.date)}</Text>
<Text><strong>Time:</strong> {item.time}</Text>
<Text><strong>Venue:</strong> {item.venue}</Text>
            {/* <Meta>{formatDate(item.createdAt)}</Meta> */}

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
          setForm({ title: "", description: "", image: "" });
          setImageFile(null);
          setPreviewUrl(null);
        }}
      >
        Add <FaPlus />
      </AddButton>

      {showModal && (
        <EventModal
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