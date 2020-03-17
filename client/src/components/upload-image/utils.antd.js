import { message as AntMessage } from "antd";

/*----------------------------------
 Function: getBase64
-----------------------------------*/
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
/*----------------------------------
 Function: beforeUpload
-----------------------------------*/
const beforeUpload = file => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    AntMessage.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    AntMessage.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
/*----------------------------------
 Function: dummyRequest
-----------------------------------*/
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

export { getBase64, dummyRequest, beforeUpload };
