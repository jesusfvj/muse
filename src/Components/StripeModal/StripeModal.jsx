import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import {
  setStripe,
  stripePayment,
} from "../../API/StripePayments/StripePayments";
import { CheckoutForm } from "./CheckoutForm/CheckoutForm";
import { ProfileLoader } from "../Pages/Profile/ProfileLoader";

export const StripeModal = ({ handleToggleStripeModal }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [stripePromise, setStripePromise] = useState("");

  useEffect(() => {
    async function setStripeF() {
      const { publishableKey } = await setStripe();
      setStripePromise(loadStripe(publishableKey));
    }
    setStripeF();
  }, []);
  useEffect(() => {
    async function setStripe() {
      const { clientSecret } = await stripePayment();
      setClientSecret(clientSecret);
    }
    setStripe();
  }, []);
  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
    locale: "en",
  };

  if (clientSecret === "" && stripePromise === "") return <ProfileLoader />;
  return (
    <div
      className="w-screen h-screen fixed top-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999999]"
      onClick={handleToggleStripeModal}
    >
      <div
        className="w-4/6 md:w-1/2 h-fit bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] p-6 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="App">
          {clientSecret && stripePromise && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm handleToggleStripeModal={handleToggleStripeModal} />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};
