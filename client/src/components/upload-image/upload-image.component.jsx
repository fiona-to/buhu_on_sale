import React from "react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./upload-image.styles";
/*----------------------------------
  Antd for uploading image
-----------------------------------*/
import { Upload as AntUpload, Icon as AntIcon } from "antd";
import { dummyRequest, beforeUpload } from "./utils.antd";

/*--------------------------------------------------------
 COMPONENT: UploadImage
--------------------------------------------------------*/
const UploadImage = props => {
  const { onChange, displayedImageOnUi, isLoading } = props;

  const uploadButton = (
    <div className="upload-card">
      <AntIcon type={isLoading ? "loading" : "plus"} />
      <div>Upload photo</div>
    </div>
  );

  return (
    <Styled>
      <AntUpload
        accept="image/png, image/jpeg"
        name="imgCategory"
        className="select-img-card"
        beforeUpload={beforeUpload}
        onChange={onChange}
        customRequest={dummyRequest}
        showUploadList={false}
      >
        {displayedImageOnUi ? (
          <img
            src={displayedImageOnUi}
            alt="category"
            style={{ width: "100%" }}
          />
        ) : (
          uploadButton
        )}
      </AntUpload>
    </Styled>
  );
};

export default UploadImage;
