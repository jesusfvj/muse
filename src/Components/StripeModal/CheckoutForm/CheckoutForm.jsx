import React, { useEffect, useState } from 'react';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {ThreeDots} from 'react-loader-spinner'


export const CheckoutForm = ({ handleToggleStripeModal }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [messageColor, setMessageColor] = useState("");
    const [PayOK, setPayOK] = useState(false);
    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
                if (PayOK) {
                    handleToggleStripeModal()
                }
            }, 3500);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showMessage]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}`,
            },
            redirect: "if_required"
        });

        if (error) {
            setMessage(error.message);
            console.log(error);
            setMessageColor("text-red-500");
            setShowMessage(true);
        } else if (paymentIntent.status === "succeeded") {
            setMessage("Payment succeeded!");
            setMessageColor("text-green-500");
            setShowMessage(true);
            setPayOK(true)
        } else if (paymentIntent.status === "processing") {
            setMessage("Your payment is processing.");
            setMessageColor("text-blue-500");
            setShowMessage(true);
        } else if (paymentIntent.status === "requires_payment_method") {
            setMessage("Your payment was not successful, please try again.");
            setMessageColor("text-orange-500");
            setShowMessage(true);
        } else {
            setMessage("Something went wrong.");
            setMessageColor("text-red-500");
            setShowMessage(true);
        }

        setIsLoading(false);
    };


    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <div className='w-full bg-white rounded-lg p-8 center-text my-4'><p className=' text-2xl'>With a donation of €2, the Hopper squad will be able to continue creating amazing projects for humanity.</p></div>
            <PaymentElement id="payment-element" />

            <button disabled={isLoading} id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full my-5">
                <span id="button-text" className="flex flex-wrap items-center text-center justify-center">
                    {isLoading ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#ffffff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName="text-center w-full"
                        visible={true}
                    /> : <p className='text-2xl w-full text-center'>Donate!</p>}
                </span>
            </button>

            {message && (
                <div className='w-full bg-white rounded-lg p-3 center-text m-1'><p className={`${messageColor} text-2xl text-center`}>{message}</p></div>
            )}
        </form>
    );
};
