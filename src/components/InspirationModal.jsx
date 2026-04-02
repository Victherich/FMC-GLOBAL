import React from "react";
import styled from "styled-components";

/* ================= THEME ================= */

const colors = {
  primary: "#0A3CFF",
  secondary: "#D4AF37",
  border: "#b8bbc0",
};

/* ================= STYLES ================= */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 420px;
  background: white;
  border-radius: 20px;
  padding: 25px;
    overflow:auto;
  max-height:95vh;
`;

const Title = styled.h3`
  margin-bottom: 15px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  color: transparent;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  outline: none;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const SaveBtn = styled.button`
  flex: 1;
  background: ${colors.primary};
  color: white;
  padding: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  flex: 1;
  background: #eee;
  border: none;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
`;

/* ================= COMPONENT ================= */

export default function InspirationModal({
  form,
  setForm,
  onClose,
  onSave,
  editing,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <Overlay>
      <ModalBox>
        <form onSubmit={handleSubmit}>
          <Title>{editing ? "Edit Inspirational" : "Add Inspirational"}</Title>

          <Label>Category (Eg: Faith, Breakthrough, Devotion etc) (30 characters max.)</Label>
          <Input
            required
            maxLength={30}
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <Label>Title (30 characters max.)</Label>
          <Input
            required
             maxLength={30}
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <Label>Content (200 characters max.)</Label>
          <TextArea
            required
            maxLength={200}
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
          />

          <Actions>
            <SaveBtn type="submit">
              {editing ? "Update" : "Create"}
            </SaveBtn>
            <CancelBtn type="button" onClick={onClose}>
              Cancel
            </CancelBtn>
          </Actions>
        </form>
      </ModalBox>
    </Overlay>
  );
}