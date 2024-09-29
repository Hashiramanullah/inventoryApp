import React from 'react'
import './model.css';

const Model = () => {
  return (
    <>
    <div className="container">
      <button
        type="button"
        className="btn btn-danger btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >
        {" "}
        Modal
      </button>
      <div className="modal fade" id="myModal" role="dialog">
        {/* modal dialog */}
        <div className="modal-dialog">
          <div className="modal-content">
            {/* modal header */}
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
              <div className="mohe">
                <h4 className="modal-title"> Some information about you</h4>
              </div>
            </div>
            {/* end modal header*/}
            {/* modal body */}
            <div className="modal-body">
              <form role="form" action="action_page.php" method="post">
                <fieldset>
                  <legend> Personal information:</legend>
                  <div className="form-group col-xs-6">
                    <label htmlFor="name"> Name: *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group col-xs-6">
                    <label htmlFor="email"> E-mail: *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group col-xs-6">
                    <label htmlFor="tel"> Phone: *</label>
                    <input type="tel" className="form-control" id="tel" />
                  </div>
                  <div className="form-group col-xs-6">
                    <label htmlFor="text"> Company name: </label>
                    <input type="text" className="form-control" id="company" />
                  </div>
                </fieldset>
                <fieldset>
                  <legend> Project name:</legend>
                  <div className="form-group col-xs-12">
                    <label htmlFor="text"> Subject: </label>
                    <input type="text" className="form-control" id="text" />
                  </div>
                  <div className="form-group col-xs-12">
                    <label htmlFor="comment"> About project: </label>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="comment"
                      defaultValue={""}
                    />
                  </div>
                </fieldset>
              </form>
            </div>
            {/* end modal body */}
            {/* modal footer*/}
            <div className="modal-footer">
              <div className="mohe">
                <button
                  type="submit"
                  className="btn btn-default btn-md btn-sm"
                  data-dismiss="modal"
                >
                  {" "}
                  SEND
                </button>
              </div>
            </div>
            {/* end modal footer */}
          </div>
          {/* end modal content*/}
        </div>
        {/* end modal dialog*/}
      </div>
    </div>
    {/* end modal */}
  </>
  
  )
}

export default Model