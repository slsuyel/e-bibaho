import { useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd";
import { UploadChangeParam } from "antd/lib/upload";

const UserPhoto: React.FC = () => {
  const [fakeImages, setFakeImages] = useState<string[]>([
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
  ]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleDelete = (index: number) => {
    // Implement deletion logic here
    const newImages = [...fakeImages];
    newImages.splice(index, 1);
    setFakeImages(newImages);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleImageUpload = (info: UploadChangeParam) => {
    if (info.file.status === "done" && info.file.originFileObj) {
      setSelectedImage(info.file.originFileObj);
    }
  };

  const handleUploadConfirm = () => {
    if (selectedImage) {
      // Add uploaded image to fakeImages array
      const imageUrl = URL.createObjectURL(selectedImage);
      setFakeImages([...fakeImages, imageUrl]);
      setIsModalVisible(false);
      setSelectedImage(null); // Reset selectedImage state after upload
    }
  };

  return (
    <div className="container mt-3 ">
      <div className="border-bottom m-0 my-4 text-center ">
        <Button className="fw-bold rounded-0 text-danger border-bottom-0">
          My Photos
        </Button>
        <Button
          size="middle"
          type="primary"
          className="bg-danger rounded-0 fw-medium ms-0 border-bottom-0"
          onClick={showModal}
        >
          Add Photos
        </Button>
      </div>

      <div className="row text-center text-lg-start">
        {fakeImages.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-3 col-6 mb-4">
            <div className="position-relative">
              <img className="img-fluid img-thumbnail" src={image} alt="" />
              <button
                className="btn btn-danger btn-sm delete-icon"
                onClick={() => handleDelete(index)}
              >
                <DeleteOutlined />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title="Upload Photo"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUploadConfirm}>
            Upload
          </Button>,
        ]}
      >
        <Upload
          accept="image/*"
          listType="picture-card"
          showUploadList={false}
          onChange={handleImageUpload}
        >
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              style={{ width: "100%" }}
            />
          ) : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Modal>
    </div>
  );
};

export default UserPhoto;
