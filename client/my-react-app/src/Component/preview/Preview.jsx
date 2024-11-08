import React from 'react';
import { useLocation } from 'react-router-dom';
import './preview.css'; // Importing the CSS file
import jsPDF from 'jspdf';

const Preview = () => {
  const location = useLocation();
  const { account } = location.state; // Access the passed account data
  console.log(account);

  if (!account) {
    return <div className="no-data">No account data available.</div>; // Handle case when no data is passed
  }

  // Function to generate and download PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add title and subtitle
    doc.text(account.accountName, 10, 10); // Corrected to use account.accountName
    doc.text('Ledger Sheet', 10, 20);
    
    // Optional: Add more content here, e.g., account balance and credit
    doc.text(`Balance: ${account.balance}`, 10, 30);
    doc.text(`Credit: ${account.credit}`, 10, 40);
  
    // Save the PDF
    doc.save('ledger-sheet.pdf');
  };

  const shareFile = async () => {
    try {
      const pdfBlob = generatePDFBlob();
      const pdfFile = new File([pdfBlob], 'ledger-sheet.pdf', { type: 'application/pdf' });

      // Check if the browser supports the Web Share API
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          title: 'Ledger Sheet',
          text: 'Check out the ledger sheet file',
          files: [pdfFile], // Share the PDF file
        });
      } else {
        alert('Web Share API not supported in this browser, or cannot share files.');
      }
    } catch (error) {
      console.error('Error sharing file:', error);
    }
  };

  const generatePDFBlob = () => {
    const doc = new jsPDF();
    
    // Add title and subtitle
    doc.text(account.accountName, 10, 10); // Corrected to use account.accountName
    doc.text('Ledger Sheet', 10, 20);

    doc.text(`Balance: ${account.balance}`, 10, 30);
    doc.text(`Credit: ${account.credit}`, 10, 40);
    

    // Return the PDF as a Blob
    const pdfBlob = doc.output('blob');
    return pdfBlob;
  };

  return (
    <div className="preview-container">
      <h2>Account Preview</h2>
      <h3>Account Name: {account.accountName}</h3>
      <p>Balance: {account.balance}</p>
      <p>Credit: {account.credit}</p>
      <div className="actions">
        <button onClick={generatePDF} className="pdf-download-btn">Download PDF</button>
        <button onClick={shareFile} className="share-btn">Share</button>
      </div>
    </div>
  );
};

export default Preview;
