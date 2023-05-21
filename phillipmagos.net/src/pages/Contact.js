import "bootstrap/dist/css/bootstrap.min.css"
import "./heroes.css"
export default function Contact() {
  return (
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div class="col-md-8">
          <h1>Welcome to the Contact Page</h1>
          <div class="container">
            <div class="row mt-5 justify-content-center">
              <div class="col-md-6 border border-dark rounded">
                <h1 class="justify-content-center">Submit Your Questions & Answers Here:</h1>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your Inquiry:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <button class="mt-5">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}