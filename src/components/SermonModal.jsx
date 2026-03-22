import React from "react";
import styled from "styled-components";

const colors = {
  primary: "#0A3CFF",
  border: "#b8bbc0",
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:4;
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 420px;
  background: white;
  border-radius: 20px;
  padding: 25px;
  overflow:auto;
  max-height:95vh;

  h3{
    color:#0A3CFF;
  }
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
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const SaveBtn = styled(Button)`
  background: ${colors.primary};
  color: white;
`;

const CancelBtn = styled(Button)`
  background: #eee;
`;

export default function SermonModal({
  form,
  setForm,
  onClose,
  onSave,
  editing,
  handleFileChange,
  previewUrl,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <Overlay>
      <ModalBox>
        <form onSubmit={handleSubmit}>
          <h3>{editing ? "Edit Sermon" : "Add Sermon"}</h3>

          <Label>Title</Label>
          <Input
            value={form.title}
            maxLength={50}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <Label>Description</Label>
          <TextArea
            value={form.description}
            maxLength={200}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            required
          />

          <Label>Upload Video</Label>
          <Input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
          />

          {previewUrl && (
            <video
              src={previewUrl}
              controls
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
          )}

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