import "antd/dist/reset.css";
import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./App.css";
import "antd/dist/reset.css";
import { useState } from "react";
function App() {
  const [fileList, setFileList] = useState([]);
  console.log("file", fileList);

  const handleChange = async (event) => {
    var result = event.target.files;
    console.log(result);
    setFileList([...fileList, ...result]);
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file, fileList) => {
      setFileList([...fileList]);

      return false;
    },
    fileList,
  };
  const handleSubmit = () => {
    console.log();
  };
  return (
    <div className="App">
      <div className="main-container">
        <Upload listType="picture" {...props} multiple>
          <Button icon={<UploadOutlined />}>Upload </Button>
        </Upload>
        <br />
      </div>
    </div>
  );
}

export default App;
