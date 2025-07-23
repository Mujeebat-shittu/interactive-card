import "./index.css";

function App() {
  return (
    <>
      <section className="flex h-screen">
        <div className="gradient"></div>
        <div className="form">
          <form
            className="flex items-center justify-center flex-col px-4 py-[1rem] mx-auto my-[10rem]"
            action=""
          >
            <div className="block">
              <label aria-label="cardholder name" htmlFor="name">
                CARDHOLDER NAME
              </label>
              <br />
              <input
                id="name"
                type="text"
                placeholder="e.g. Jane Appleseed"
                required
                aria-required
              />
              <br />
              <br />

              <label htmlFor="card-number">CARD NUMBER</label>
              <br />
              <input
                required
                type="number"
                name="card-number"
                id="card-number"
                placeholder="e.g. 1234 5678 9123 0000"
              />
              <br />
              <br />
            </div>

            <div className="inline">
              <div className="inline-content">
                <label htmlFor="exp-date">EXP. DATE (MM/YY)</label>
                <br />
                <input
                  required
                  type="month"
                  name="exp-date"
                  id="exp-date"
                  placeholder="MM YY"
                  // className="w-[55%]"
                />
                <br />
                <br />
              </div>
              <div className="inline-content">
                <label htmlFor="cvc">CVC</label>
                <br />
                <input
                  required
                  type="number"
                  name="cvc"
                  id="cvc"
                  placeholder="e.g. 123"
                  // className="w-[50%]"
                />
                <br />
                <br />
              </div>
            </div>

            <button>Confirm</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
