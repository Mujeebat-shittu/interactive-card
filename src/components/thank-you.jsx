import Icon from "../assets/icon-complete.svg";
// import { useState } from "react";
import CardLogo from "../assets/card-logo.svg";
import { useLocation } from 'react-router-dom';
import PageWrapper from "./page-wrapper";

function ThankYou() {
  const location = useLocation();
  const formData = location.state;


    
  
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
                      {/* {formatCardNumber(cardNumber) || "0000 0000 0000 0000"} */}
                      {formData.cardNumber}
                    </p>
                  </div>
                  <div className="card-name absolute bottom-7 left-8 tracking-widest">
                    {/* <p className="">{cardName || "Jane Appleseed"}</p> */}
                    <p>{formData.cardName}</p>
                  </div>
                  <div className="card-expiry absolute flex  items-end justify-end  bottom-7 right-6">
                    {/* <p className="">{expiryMonth || "MM"}&nbsp; /</p> &nbsp; */}
                    {/* <p>{expiryYear || "YY"}</p> */
                    }
                    <p>{formData.expiryMonth} &nbsp; /</p> &nbsp;
                    <p>{formData.expiryYear}</p>
                  </div>
                </div>
    
                <div className="card-back relative w-full max-w-xs h-50 bg-cover bg-center right-5 bottom-5 mx-auto my-[5rem] rounded-xl text-[var(--White)]">
                  <div className="card-cvc absolute bottom-22 right-6 ">
                    {/* <p>{cvv || "000"}</p> */}
                    {formData.cvv}

                  </div>
                </div>
              </div>
            </div>
    
            <div className="form flex items-center justify-center flex-col px-4 py-[1rem] mx-auto my-[10rem]">
        <div
          className="flex right-17 items-center justify-center flex-col px-4 py-[1rem] mx-auto my-[10rem]"
          action=""
        >
          <img src={Icon} alt="" className="w-24" />
          <h1 className="text-3xl mt-7 mb-4 tracking-wider"> THANK YOU!</h1>
          <p className=" mt-4 mb-8 text-[var(--Gray-400)]">
            We've added your card details
          </p>
          <button className="my-6 max-w-2xs">Continue</button>
        </div>
        </div>
        </section>

    </>
  );
}

export default ThankYou;
