import "bootstrap/dist/css/bootstrap.min.css"
import "./heroes.css"
export default function Contact() {
  return (
    <div class="justify-content-center">
      <div class="px-4 py-5 my-5 text-center">
        <div class="col-md-5 mx-auto">
          <h1>Welcome to the Contact Page</h1>
          <div class="container">
            <div class="row mt-5 justify-content-center">
              <div class="col-md-6 border border-dark rounded">
                <h1 class="justify-content-center">Submit Your Questions & Answers Here:</h1>
                <form action="https:/>/formsubmit.co/phillipmagos@gmail.com" method="POST">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">First Name</label>
                  <input type="text" name="fname" class="form-control" id="exampleFormControlInput1" placeholder="First Name"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                  <input type="text" name="lname" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your Inquiry:</label>
                  <input type="text" name="inquiry" class="form-control" id="exampleFormControlInput1" rows="3" placeholder="Your Inquiry"></input>
                  {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
                  <button class="mt-5">Submit</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}