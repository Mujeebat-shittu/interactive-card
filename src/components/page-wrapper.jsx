import CardLogo from "../assets/card-logo.svg";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function PageWrapper() {
  const [cardNumber, setCardNumber] = useState("");
  const handleNumberChange = function (e) {
    const value = e.target.value;

    const cleanedValue = value.replace(/\D/g, "");
    setCardNumber(cleanedValue);
  };

  const formatCardNumber = function (number) {
    return number
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .trim();
  };

  const [cardName, setCardName] = useState("");
  const handleNameChange = function (e) {
    const value = e.target.value;
    setCardName(value);
  };

  const [expiryMonth, setExpiryMonth] = useState("");
  const formatExpiryMonth = function (e) {
    const value = e.target.value.replace(/\D/g, "");
    setExpiryMonth(value);
  };

  const [expiryYear, setExpiryYear] = useState("");
  const formatExpiryYear = function (e) {
    const value = e.target.value.replace(/\D/g, "");
    setExpiryYear(value);
  };

  const [cvv, setCvv] = useState("");
  const formatCvv = function (e) {
    const value = e.target.value.replace(/\D/g, "");
    setCvv(value);
  };

  const navigate = useNavigate();

  

  //React Hook Error Handling
  {
    /*const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); */
  }

  const handleClick = function (e) {
    e.preventDefault();

    const formData = {
    cardName,
    cardNumber,
    expiryMonth,
    expiryYear,
    cvv,
  };
    console.log("Submitted");
    navigate("/thank-you", { state: formData });
  };

  return (
    <>
      <section className="flex relative flex-row h-screen items-center justify-center">
        <div className="gradient flex">
          <div className="card absolute items-center justify-center flex flex-col gap-18 w-2/3">
            <div className="card-front relative w-full max-w-xs h-50 bg-cover bg-center right-20 top-40 mx-auto my-[5rem] rounded-xl text-[var(--White)]">
              <div className="card-logo absolute top-2 left-6">
                <img src={CardLogo} alt="Card logo" className="" />
              </div>
              <div className="card-number absolute top-26 left-8 tracking-widest">
                <p className="">
                  {formatCardNumber(cardNumber) || "0000 0000 0000 0000"}
                </p>
              </div>
              <div className="card-name absolute bottom-7 left-8 tracking-widest">
                <p className="">{cardName || "Jane Appleseed"}</p>
              </div>
              <div className="card-expiry absolute flex  items-end justify-end  bottom-7 right-6">
                <p className="">{expiryMonth || "MM"}&nbsp; /</p> &nbsp;
                <p>{expiryYear || "YY"}</p>
              </div>
            </div>

            <div className="card-back relative w-full max-w-xs h-50 bg-cover bg-center right-5 bottom-5 mx-auto my-[5rem] rounded-xl text-[var(--White)]">
              <div className="card-cvc absolute bottom-22 right-6 ">
                <p>{cvv || "000"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form flex items-center justify-center flex-col px-4 py-[1rem] mx-auto my-[10rem]">
          <form
            className="flex relative left-10 flex-col px-4 py-[1rem] mx-auto my-[10rem]"
            onSubmit={handleClick}
          >
            <div className="block">
              <div className="content-div my-4">
                <label aria-label="cardholder name" htmlFor="name">
                  CARDHOLDER NAME
                </label>
                <br />
                <input
                name="cardName"
                  id="name"
                  value={cardName}
                  onChange={handleNameChange}
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  required
                  aria-required
                  onInvalid={(e) => e.target.setCustomValidity("Name can't be blank.")}
  onInput={(e) => e.target.setCustomValidity("")}

                  // React Form Hook Error Handling
                  // {...register("name", { required: "Name is required" })}
                />
              </div>

              <div className="content-div my-6">
                <label htmlFor="card-number">CARD NUMBER</label>
                <br />
                <input
                  required
                  type="text"
                  inputMode="numeric"
                  maxLength={16}
                  minLength={16}
                  pattern="[0-9]*"
                  value={cardNumber}
                  onChange={handleNumberChange}
                  name="cardNumber"
                  id="card-number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  onInvalid={(e) => e.target.setCustomValidity("Can't be blank.")}
  onInput={(e) => e.target.setCustomValidity("")}

                  // React Hook Form Error Handling
                  //  {...register("card number", {
                  //   required: "Card number is required",
                  //   maxLength: {
                  //     value: 16, message: "Card Number can't be more than 16"
                  //   },
                  //   minLength: {
                  //     value: 16, message: "Card Number can't be less than 16"
                  //   },
                  // })}
                />
              </div>
            </div>

            <div className="inline">
              <div className="inline-content date mb-4">
                <label htmlFor="exp-date">
                  EXP. DATE (MM/YY)</label>
                  <br />
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    value={expiryMonth}
                    onChange={formatExpiryMonth}
                    name="expiryMonth"
                    id="exp-date"
                    placeholder="MM"
                    className="w-[60px] text-center"
                    onInvalid={(e) => e.target.setCustomValidity("Can't be blank.")}
                    onInput={(e) => e.target.setCustomValidity("")}


                  />
                  &nbsp;
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    value={expiryYear}
                    onChange={formatExpiryYear}
                    name="expiryYear"
                    id="exp-date"
                    placeholder="YY"
                    className="w-[60px] text-center"
                    onInvalid={(e) => e.target.setCustomValidity("Can't be blank.")}
                    onInput={(e) => e.target.setCustomValidity("")}

                  />
                
              </div>
              <div className="inline-content cvc mb-4">
                <label htmlFor="cvc">CVC</label>
                <br />
                <input
                  required
                  type="text"
                  inputMode="numeric"
                  value={cvv}
                  maxLength={3}
                  onChange={formatCvv}
                  name="cvv"
                  id="cvc"
                  placeholder="e.g. 123"
                  className="w-[195px]"
                  onInvalid={(e) => e.target.setCustomValidity("Can't be blank.")}
                  onInput={(e) => e.target.setCustomValidity("")}

                />
                
              </div>
            </div>

            <button type="submit">Confirm</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PageWrapper;
