import React from "react";
import Papa from "papaparse";
import TableView from "../TableView/TableView";

class SimpleFileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: null
    };
  }

  handleNewFile = event => {
    const uploadedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const rawText = reader.result;
      const parsedData = Papa.parse(rawText);
      this.setState({ fileData: parsedData });
    };
    reader.readAsText(uploadedFile);
  };

  render() {
    const { fileData } = this.state;
    return (
      <div>
        {fileData ? (
          <TableView data={fileData} />
        ) : (
          <input type="file" accept="text/csv" onChange={this.handleNewFile} />
        )}
      </div>
    );
  }
}

export default SimpleFileUploader;
