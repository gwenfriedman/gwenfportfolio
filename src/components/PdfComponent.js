import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PdfComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 1,
      pageNumber: 1,
    };
  }

  setNumPages(numPages) {
    this.setState({
      numPages: numPages,
    });
  }

  setPageNumber(num) {
    this.setState({
      pageNumber: num,
    });
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setNumPages(numPages);
    this.setPageNumber(1);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setNumPages(numPages);
    this.setPageNumber(1);
  }

  changePage(offset) {
    this.setPageNumber(this.state.pageNumber + offset);
  }

  previousPage() {
    this.changePage(-1);
  }

  nextPage() {
    this.changePage(1);
  }

  render() {
    return (
      <div className={"pdfGroup"}>
        <div className={"doc"}>
          <Document
            file={this.props.fileName}
            onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
          >
            <Page pageNumber={this.state.pageNumber} />
          </Document>
        </div>
        <div className={"hover-group row"}>
          <button
            className={"hover-btn"}
            type="button"
            disabled={this.state.pageNumber <= 1}
            onClick={this.previousPage.bind(this)}
          >
            {"<"}
          </button>
          <p className={"page-nums"}>
            {this.state.pageNumber || (this.state.numPages ? 1 : "--")} of{" "}
            {this.state.numPages || "--"}
          </p>
          <button
            className={"hover-btn"}
            type="button"
            disabled={this.state.pageNumber >= this.state.numPages}
            onClick={this.nextPage.bind(this)}
          >
            {">"}
          </button>
        </div>
        <p className={"pdf-text"}> {this.props.text}</p>
      </div>
    );
  }
}
export default PdfComponent;
