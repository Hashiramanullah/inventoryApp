import React from 'react';
import './trialBalance.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const TrialBalance = () => {

  // Function to generate and download PDF
  const generatePDF = () => {
    alert('Generating PDF...');
    const doc = new jsPDF();
    
    // Add title and subtitle
    doc.text('XYZ Fine Arts LLC', 10, 10);
    doc.text('Trial Balance', 10, 20);
  
    // Use the autoTable plugin
    doc.autoTable({
      head: [['Year', '2014', '2015', '2016']],
      body: [
        ['Gross Sales', '95', '127', '160'],
        ['Discounts', '6', '7', '8'],
        ['Net Sales', '89', '120', '152'],
        ['Cost of Goods Sold', '25', '35', '48'],
        ['Gross Profits', '64', '85', '104'],
        ['Total Indirect Expenses', '27', '28', '35'],
        ['Net Profits (Loss)', '37', '57', '69'],
      ],
    });
  
    // Save the PDF
    doc.save('trial-balance.pdf');
  };
  

  const shareFile = async () => {
    try {
      // First generate the PDF blob
      const pdfBlob = generatePDFBlob();
      const pdfFile = new File([pdfBlob], 'trial-balance.pdf', { type: 'application/pdf' });

      // Check if the browser supports the Web Share API
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          title: 'Trial Balance',
          text: 'Check out the Trial Balance file',
          files: [pdfFile] // Share the PDF file
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
    doc.text('XYZ Fine Arts LLC', 10, 10);
    doc.text('Trial Balance', 10, 20);
  
    // Use the autoTable plugin
    doc.autoTable({
      head: [['Year', '2014', '2015', '2016']],
      body: [
        ['Gross Sales', '95', '127', '160'],
        ['Discounts', '6', '7', '8'],
        ['Net Sales', '89', '120', '152'],
        ['Cost of Goods Sold', '25', '35', '48'],
        ['Gross Profits', '64', '85', '104'],
        ['Total Indirect Expenses', '27', '28', '35'],
        ['Net Profits (Loss)', '37', '57', '69'],
      ],
    });

    // Return the PDF as a Blob
    const pdfBlob = doc.output('blob');
    return pdfBlob;
  };

  return (<div className="body-wrap">
    <div className="roll-card-learn" id="income-statement">
      <div className="roll-card-front">
        <h1>XYZ Fine Arts LLC</h1>
        <h2>Trial-Balance</h2>
        <table className="tableizer-table" id="xyz-income-statement">
          <thead>
            <tr className="tableizer-firstrow">
              <th>$,000 Omitted</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>2014</td>
              <td>2015</td>
              <td>2016</td>
            </tr>
            <tr>
              <th className="hi">Revenue</th>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td className="tip" data="gross-sale">
                Gross Sales
              </td>
              <td>95</td>
              <td>127</td>
              <td>160</td>
            </tr>
            <tr>
              <td className="tip" data="discount">
                Discounts
              </td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th className="tip" data="net-sales">
                Net Sales
              </th>
              <td>89</td>
              <td>120</td>
              <td>152</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td className="tip" data="cost-of-good">
                Cost of Goods Sold
              </td>
              <td>25</td>
              <td>35</td>
              <td>48</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th className="tip" data="gross-profits">
                Gross Profits
              </th>
              <td>64</td>
              <td>85</td>
              <td>104</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th className="tip hi" data="period-expenses">
                Period Expenses
              </th>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Rent</td>
              <td>0</td>
              <td>0</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Indirect Labor/ Salaries</td>
              <td>23</td>
              <td>24</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Utilities</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Selling &amp; Administrative</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Office Supplies</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Deprciation</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <th>Total Indirect Expenses</th>
              <td>27</td>
              <td>28</td>
              <td>35</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th className="tip" data="net-profits">
                Net Profits (Loss)
              </th>
              <td>37</td>
              <td>57</td>
              <td>69</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="roll-card-slide">
        <section className="item" data="gross-sale">
          <h2>Gross Sales</h2>
          <p>
            This is the total amount of all sales before expenses are subtracted.
          </p>
        </section>
        <section className="item" data="discount">
          <h2>Discountss</h2>
          <p>
            Businesses often sell their products at a discount (i.e., below list
            price). Discounts are subtracted from Gross sales.{" "}
          </p>
        </section>
        <section className="item" data="net-sales">
          <h2>Net Sales</h2>
          <p>Gross sales minus discounts yields net sales. </p>
        </section>
        <section className="item" data="cost-of-good">
          <h2>Cost of Goods Sold</h2>
          <p>
            Cost of goods sold includes all of the direct costs associated with
            making the product or service.{" "}
          </p>
        </section>
        <section className="item" data="gross-profits">
          <h2>Gross Profits</h2>
          <p>
            Cost of goods sold are subtracted from net sales to yield gross
            profits.{" "}
          </p>
        </section>
        <section className="item" data="period-expenses">
          <h2>Period Expenses</h2>
          <p>
            IDEA 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Porro, error eaque, officia blanditiis ipsam magni illo quibusdam
            nulla quo aliquam accusamus rerum eveniet debitis ratione iure.
            Maiores labore, vel debitis.
          </p>
        </section>
        <section className="item" data="net-profits">
          <h2>Net Profits (Loss)</h2>
          <p>
            Total indirect expenses are subtracted from gross profits to yield net
            profits.{" "}
          </p>
        </section>
        <div className="btn-close">⟩</div>
      </div>
    </div>
    {/* ANOTHER one */}
     {/* Buttons for PDF Download and Share */}
     <div className="actions">
          <button onClick={generatePDF} className="pdf-download-btn">Download PDF</button>
          <button onClick={shareFile} className="share-btn">Share</button>
        </div>
  </div>
  
  );
}

export default TrialBalance;
