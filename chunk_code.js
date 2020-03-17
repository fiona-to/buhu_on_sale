{
  /* </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} xs={12} sm={12} md={6} constrolId="name">
                    <Form.Label>Name (*)</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      size="sm"
                      required
                      placeholder="name"
                      value={this.state.name}
                      onChange={this.handleValueChanged}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    xs={12}
                    sm={12}
                    md={6}
                    constrolId="description"
                  >
                    <Form.Label>Description (*)</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      required
                      rows="2"
                      size="sm"
                      placeholder="Description"
                      value={this.state.description}
                      onChange={this.handleValueChanged}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} xs={6} sm={6} md={6} constrolId="photo">
                    <Form.Label column xs={6} sm={6}>
                      Photo{" "}
                    </Form.Label>
                    <Col xs={6} sm={6}>
                      <AntUpload
                        accept="image/png, image/jpeg"
                        name="imgCategory"
                        className="select-img-card"
                        beforeUpload={beforeUpload}
                        onChange={this.handleUploadImage}
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
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} xs={6} sm={6} md={6} constrolId="hidden">
                    <Form.Label>Hidden</Form.Label>
                    <Form.Check
                      type="checkbox"
                      id="hidden"
                      name="hidden"
                      checked={this.state.hidden}
                      onChange={this.handleHiddenChange}
                    />
                  </Form.Group>
                </Form.Row> */
}
{
  /* <Form.Row>
                  <Form.Group as={Row} controlId="formButtons">
                    <MainButton type="submit">Save</MainButton>
                    <SecondaryButton onClick={this.handleCancelAddCategory}>
                      Cancel
                    </SecondaryButton>
                  </Form.Group>
                </Form.Row> */
}

{
  /* <Form.Group as={Row} controlId="validationName">
                  <Form.Label column sm={2}>
                    Name (*)
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      name="name"
                      required
                      placeholder="name"
                      value={this.state.name}
                      onChange={this.handleValueChanged}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please fill in category name
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group> */
}
{
  /* <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Description (*)
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      name="description"
                      required
                      rows="2"
                      placeholder="Description"
                      value={this.state.description}
                      onChange={this.handleValueChanged}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please fill in category description
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group> */
}
{
  /* <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Hidden
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="checkbox"
                      id="hidden"
                      name="hidden"
                      checked={this.state.hidden}
                      onChange={this.handleHiddenChange}
                    />
                  </Col>
                </Form.Group> */
}
{
  /* <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Photo
                  </Form.Label>
                  <Col sm={10}>
                    <AntUpload
                      accept="image/png, image/jpeg"
                      name="imgCategory"
                      className="select-img-card"
                      beforeUpload={beforeUpload}
                      onChange={this.handleUploadImage}
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
                  </Col>
                </Form.Group> */
}
{
  /* <Form.Group as={Row} controlId="formButtons">
                  <MainButton type="submit">Save</MainButton>
                  <SecondaryButton onClick={this.handleCancelAddCategory}>
                    Cancel
                  </SecondaryButton>
                </Form.Group> */
}

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

render(<FormExample />);

<nav className="navbar navbar-expand-lg navbar-static-top navbar-light white">
  <div className="container">
    {/* Brand */}
    {/* <a className="navbar-brand" href="#">
            <img src={AhMuiIcon} width="30" height="30" alt="My funny face" />
          </a> */}
    <a className="navbar-brand" target="_blank">
      <strong className="navbar-brand-text">Mei Jie</strong>
    </a>
    {/* Collapse */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* Links */}
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      {/* Left */}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/login">
            Login
          </Link>
        </li>
      </ul>
      {/* Right */}
      <ul className="navbar-nav nav-flex-icons">
        <li className="nav-item">
          <a className="nav-link">
            <span className="badge badge-danger mr-1"> 1 </span>
            <i className="fas fa-shopping-cart"></i>
            <span className="clearfix d-none d-sm-inline-block"> Cart </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-2 my-lg-0">
            <span className="d-sm-inline-block"> Payment </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>;

/* .carousel {
  height: 60vh;
}

@media (max-width: 740px) {
  .carousel {
    height: 100vh;
  }
}

@media (min-width: 800px) and (max-width: 850px) {
  .carousel {
    height: 100vh;
  }
}

.view,
body,
html {
  height: 100%;
}
.carousel {
  height: 50%;
}
.carousel .carousel-inner,
.carousel .carousel-inner .active,
.carousel .carousel-inner .carousel-item {
  height: 100%;
}
@media (max-width: 776px) {
  .carousel {
    height: 100%;
  }
}
.page-footer {
  background-color: #929fba;
} */

{
  /* <div className="row">
        <div className="col-lg-12">
          <div className="container-fluid"> */
}
<div
  id="introInfo"
  className="carousel slide carousel-fade"
  data-ride="carousel"
>
  {/* <!-- Indicators --> */}
  <ul className="carousel-indicators">
    <li data-target="#introInfo" data-slide-to="0" className="active"></li>
    <li data-target="#introInfo" data-slide-to="1"></li>
    <li data-target="#introInfo" data-slide-to="2"></li>
  </ul>

  {/* <!-- The slideshow --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="http://placehold.it/900x350" alt="Los Angeles" />
    </div>
    <div className="carousel-item">
      <img src="http://placehold.it/900x350" alt="Chicago" />
    </div>
    <div className="carousel-item">
      <img src="http://placehold.it/900x350" alt="New York" />
    </div>
  </div>

  {/* <!-- Left and right controls --> */}
  <a className="carousel-control-prev" href="#introInfo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#introInfo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>;
{
  /* </div>
          </div>
        </div> */
}

{
  /* <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
          <span className="navbar-brand">Categories:</span>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  All
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shirts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sport wears
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Outwears
                </a>
              </li>
            </ul>

            <form className="form-inline">
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
        </nav>
      </div> */
}

{
  /* <div className="col-lg-3">
          <div className="list-group">
            <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
              <span className="navbar-brand">Categories:</span>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#basicExampleNav"
                aria-controls="basicExampleNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      All
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Shirts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sport wears
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Outwears
                    </a>
                  </li>
                </ul>

                <form className="form-inline">
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div> */
}
{
  /* <div className="col-lg-9">
            <Carousel /> */
}
{
  /* <div
              id="carouselExampleIndicators"
              className="carousel slide my-4"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div> */
}

{
  /* <div className="row">{displayProductIteam()}</div> */
}
{
  /* End: className="row" */
}
{
  /* </div> */
}
{
  /* End: className="col-lg-9" */
}
{
  /* End: className="row" */
}

// Test saving data
// const Product = require("./models/product");
// const table = new Product({
//   name: "Dinning Table",
//   description: "Imported from tropical countries..."
// });
// table.save();
