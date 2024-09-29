import React from 'react'
import './Cashvoucher.css'
import { useLocation } from 'react-router-dom';
const CashVoucher = () => {
    const location = useLocation();
    const { data } = location.state  // Access the passed data
    if (!data) {
        return <div>No voucher details available.</div>; // Handle case when no data is passed
      }
  return (
<div className='c-v'>
  <table
    className="MsoNormalTable"
    style={{ width: "100.0%", borderCollapse: "collapse" }}
    border={0}
    width="100%"
    cellSpacing={0}
    cellPadding={0}
  >
    <tbody>
      <tr style={{ height: "9.75pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "77.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          colSpan={3}
          valign="top"
          width="77%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "21.0pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "21.0pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "77.0%",
            background: "#0076CF",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "21.0pt"
          }}
          colSpan={3}
          width="77%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "21.0pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "32.35pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "32.35pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "#0076CF",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "32.35pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "#0076CF",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "32.35pt"
          }}
          width="66%"
        >
          <h1 style={{ marginTop: "0in" }}>
            <strong>
              <span
                style={{
                  fontSize: "20.0pt",
                  fontFamily: '"FS Elliot Pro"',
                  color: "white"
                }}
              >
               Cash-Voucher
              </span>
            </strong>
          </h1>
        </td>
       
        <td
          style={{
            width: "5.72%",
            background: "#0076CF",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "32.35pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "32.35pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "25.5pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "25.5pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "25.5pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "25.5pt"
          }}
          valign="top"
          width="66%"
        >
             <tr style={{ height: "21.0pt" }}>
            <td colSpan={5} style={{ padding: "0in 5.75pt" }}>
              <p>Voucher Number: {data.v}</p> {/* Display the voucher number */}
            </td>
          </tr>
          {/* <p style={{ textAlign: "center" }} align="center">
            <em>
              <span
                style={{
                  fontSize: "9.0pt",
                  fontFamily: '"FS Elliot Pro"',
                  color: "#262626"
                }}
              >
                ***Please do not reply to this message via e-mail. This email
                address is automated, unattended, and cannot help with questions
                or requests***{" "}
              </span>
            </em>
          </p> */}
          <p style={{ textAlign: "center" }} align="center">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "5.72%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "25.5pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "25.5pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "10.5pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="66%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "5.72%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "16.5pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "16.5pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "16.5pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "16.5pt"
          }}
          valign="top"
          width="66%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "5.72%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "16.5pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "16.5pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "74.25pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "74.25pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "74.25pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "74.25pt"
          }}
          valign="top"
          width="66%"
        >
          {/* <p>
            <strong>
              <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
                There are&nbsp;ideas/opportunities
              </span>
            </strong>
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
              <strong>
                <span style={{ fontFamily: '"FS Elliot Pro"' }}>
                  below&nbsp;that require your&nbsp;review.
                </span>
              </strong>
            </span>
          </p> */}
          <p>
            <strong>
              <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
                &nbsp;
              </span>
            </strong>
          </p>
          {/* <p style={{ marginBottom: "7.5pt" }}>
            <strong>
              <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
                &nbsp;Action needed:
              </span>
            </strong>
          </p> */}
          {/* <ol start={1} type={1}>
            <li
              className="MsoNormal"
              style={{
                msoMarginTopAlt: "auto",
                msoMarginBottomAlt: "auto",
                msoList: "l1 level1 lfo3"
              }}
            >
              <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
                Review the submission(s) in the&nbsp;
                <strong>
                  <span style={{ fontFamily: '"FS Elliot Pro"' }}>
                    RIS Insider Portfolio Intake Review App&nbsp;
                  </span>
                </strong>
                -&nbsp;Submissions should be reviewed within 30 days.
              </span>
            </li>
            <li
              className="MsoNormal"
              style={{
                msoMarginTopAlt: "auto",
                msoMarginBottomAlt: "auto",
                msoList: "l1 level1 lfo3"
              }}
            >
              <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
                Update the&nbsp;
                <strong>
                  <span style={{ fontFamily: '"FS Elliot Pro"' }}>Status</span>
                </strong>
                &nbsp;and&nbsp;
                <strong>
                  <span style={{ fontFamily: '"FS Elliot Pro"' }}>
                    Assigned To
                  </span>
                </strong>
                &nbsp;fields and add any comments or notes on the status update
                or decision.
              </span>
            </li>
          </ol>
          <p style={{ marginLeft: ".5in" }}>
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
              <em>
                <strong>
                  <span style={{ fontFamily: '"FS Elliot Pro"' }}>Note:</span>
                </strong>
              </em>
              <em>
                <span style={{ fontFamily: '"FS Elliot Pro"' }}>
                  &nbsp;These notes are visible in the RIS Insider Portfolio
                  Intake Review queue and will be shared with the submitter.
                </span>
              </em>
            </span>
          </p>
          <p>
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p> */}
          <table
            className="MsoNormalTable"
            style={{
              width: "100.0%",
              background: "#EEEEEE",
              borderCollapse: "collapse"
            }}
            border={0}
            width="100%"
            cellSpacing={0}
            cellPadding={0}
          >
            <thead>
              <tr style={{ height: 38 }}>
                <td
                  style={{
                    borderWidth: "1pt 1pt 1pt 1.5pt",
                    borderStyle: "solid",
                    borderColor: "#aaaaaa #aaaaaa #aaaaaa #d0e4f5",
                    borderImage: "initial",
                    background: "#1c6ea4",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <strong>
                      <span
                        style={{
                          fontSize: "11.5pt",
                          fontFamily: '"FS Elliot Pro"',
                          color: "white"
                        }}
                      >
                        Idea/Opportunity
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderLeft: "none",
                    background: "#1c6ea4",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <strong>
                      <span
                        style={{
                          fontSize: "11.5pt",
                          fontFamily: '"FS Elliot Pro"',
                          color: "white"
                        }}
                      >
                        LeadSquad
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderLeft: "none",
                    background: "#1c6ea4",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <strong>
                      <span
                        style={{
                          fontSize: "11.5pt",
                          fontFamily: '"FS Elliot Pro"',
                          color: "white"
                        }}
                      >
                        Submitter
                      </span>
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderLeft: "none",
                    background: "#1c6ea4",
                    padding: "2.25pt 1.5pt",
                    height: 38
                  }}
                >
                  <p className="MsoNormal">
                    <strong>
                      <span
                        style={{
                          fontSize: "11.5pt",
                          fontFamily: '"FS Elliot Pro"',
                          color: "white"
                        }}
                      >
                        ID
                      </span>
                    </strong>
                  </p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Fix Schedule C
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Vanderley, Nikki
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      227
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Move allocations to website
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Mayberry, Ryan
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      228
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 80 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      provide more details on contribution verification message
                      to PS for rollovers - include ptp and $ amount of rollover
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Account Management
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Koke, Mari
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      230
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 101 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 101,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Replace Expense Statement with Expense task on To Do list,
                      allow plan sponsor to push ACH through the task, build
                      system logic to stop the automated EFT when needed
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 101,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Expenses &amp; Services
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 101,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Johnson, Angie L
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 101
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      234
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 38 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      PBGC System Enhancement
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Larsen, Kevin
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 38
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      241
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 38 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      new monitoring report
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 38,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Morgan, Dean
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 38
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      242
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Transaction Report is not displaying activity for contract
                      number 331349
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Reporting &amp; Communication
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Crandall, Rachel
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      262
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Contribution detail report no longer available for
                      contract 615589
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Reporting &amp; Communication
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Crandall, Rachel
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      263
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 80 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Ability to customize the client name/plan name in the
                      participant statement Notice of Internet Availablity
                      (NOIA){" "}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Adams, Regina
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      266
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Self-Serve Report request - After Payroll File Upload
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Reporting &amp; Communication
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Crumley, Jonica
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      269
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Roth on Short Participant Statement/eStatement
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      McFarland, Chris
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      276
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 80 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Defect - PDF's not displaying on participant website (due
                      to no participant having a paper election)
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Adams, Regina
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 80
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      285
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Large Client - Employer Statements take too long to load -
                      increase speed
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      McFarland, Chris
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      488
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Add Cricket Wireless to common providers for text/email
                      alerts
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Reporting &amp; Communication
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Vestal, Christine
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      547
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Decommission Current PBGC Life Count Process
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Government Reporting
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Larsen, Kevin
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      659
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: 59 }}>
                <td
                  style={{
                    borderRight: "1pt solid #aaaaaa",
                    borderBottom: "1pt solid #aaaaaa",
                    borderLeft: "1pt solid #aaaaaa",
                    borderImage: "initial",
                    borderTop: "none",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "54.9091%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      New opportunity!
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "20.7699%"
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59,
                    width: "16.321%"
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      Cunningham, Jenn
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7%",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "1pt solid #aaaaaa",
                    borderRight: "1pt solid #aaaaaa",
                    padding: "2.25pt 1.5pt",
                    height: 59
                  }}
                >
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "10.0pt",
                        fontFamily: '"FS Elliot Pro"',
                        color: "black"
                      }}
                    >
                      666
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="MsoNormal">
            <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
          </p>
          <p>
            <span style={{ fontFamily: '"FS Elliot Pro"', color: "black" }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "5.72%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "74.25pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "74.25pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: ".75in" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: ".75in"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: ".75in"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: ".75in"
          }}
          valign="top"
          width="66%"
        >
          {/* <p className="MsoNormal">
            <strong>
              <span
                style={{
                  fontSize: "10.0pt",
                  fontFamily: '"FS Elliot Pro"',
                  color: "black"
                }}
              >
                You&nbsp;can review the&nbsp;entire queue&nbsp;in the&nbsp;
                <a href="https://apps.powerapps.com/play/e/default-3bea478c-1684-4a8c-8e85-045ec54ba430/a/094d063a-e46f-4205-981e-2bfd39ba4951?tenantId=3bea478c-1684-4a8c-8e85-045ec54ba430">
                  &nbsp;RIS Insider Portfolio Intake Review App
                </a>
              </span>
            </strong>
          </p> */}
        </td>
        <td
          style={{
            width: "5.72%",
            background: "white",
            padding: "0in 5.75pt 0in 5.75pt",
            height: ".75in"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: ".75in"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "10.5pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="66%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "5.72%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "9.75pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="66%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "5.72%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "39.0pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "39.0pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "4.98%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "39.0pt"
          }}
          valign="top"
          width="4%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "66.3%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "39.0pt"
          }}
          width="66%"
        >
          <p style={{ textAlign: "center" }} align="center">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
          <p style={{ textAlign: "center" }} align="center">
            <span
              style={{
                fontSize: "6.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "#262626"
              }}
            >
              Brought to you by&nbsp;
            </span>
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              <br />
            </span>
            {/* <strong>
              <span
                style={{
                  fontSize: "10.0pt",
                  fontFamily: '"FS Elliot Pro"',
                  color: "#0076cf"
                }}
              >
                RIS Insider&nbsp;
              </span>
            </strong> */}
          </p>
        </td>
        <td
          style={{
            width: "5.72%",
            background: "#E3F5FD",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "39.0pt"
          }}
          valign="top"
          width="5%"
        >
          <p className="MsoNormal">
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "black"
              }}
            >
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "39.0pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "9.75pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "77.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          colSpan={3}
          valign="top"
          width="77%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "15.75pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "15.75pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "77.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "15.75pt"
          }}
          colSpan={3}
          valign="top"
          width="77%"
        >
          <p>
            <span
              style={{
                fontSize: "9.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "#262626"
              }}
            >
              This email contains information classified as internal use only.{" "}
            </span>
          </p>
          <p>
            <span
              style={{
                fontSize: "9.0pt",
                fontFamily: '"FS Elliot Pro"',
                color: "#262626"
              }}
            >
              No part may be released externally without the prior consent of
              Principal.{" "}
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "15.75pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "10.5pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "77.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          colSpan={3}
          valign="top"
          width="77%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "10.5pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
      <tr style={{ height: "9.75pt" }}>
        <td
          style={{
            width: "15.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="15%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "77.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          colSpan={3}
          valign="top"
          width="77%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "8.0%",
            padding: "0in 5.75pt 0in 5.75pt",
            height: "9.75pt"
          }}
          valign="top"
          width="8%"
        >
          <p className="MsoNormal">
            <span style={{ fontSize: "10.0pt", fontFamily: '"FS Elliot Pro"' }}>
              &nbsp;
            </span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>
    <span style={{ fontFamily: '"FS Elliot Pro"' }}>&nbsp;</span>
    <span
      style={{
        fontSize: "9.0pt",
        fontFamily: '"FS Elliot Pro"',
        color: "#737373"
      }}
    >
      Classification: Internal Use
    </span>
  </p>
</div>

  )
}

export default CashVoucher