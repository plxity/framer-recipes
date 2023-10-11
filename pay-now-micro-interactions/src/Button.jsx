import { motion, LayoutGroup } from 'framer-motion';
import { useState, useRef } from 'react';
import Spinner from './Spinner.svg';

// This is just for demo purposes, not to be used like this in real code :)
function Button({ status }) {
  const width = useRef(0);
  const [payemntStatus, setPayemntStatus] = useState('INTIAL');

  const onSubmit = () => {
    width.current = 50;
    setPayemntStatus('PENDING');

    // changing the state after sometime, usually it would be a Promise / API call
    setTimeout(() => {
      setPayemntStatus(status);
    }, 3000);
  };

  const renderPaymentStatus = () => {
    switch (payemntStatus) {
      case 'CAPTURED':
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.15,
              },
            }}
          >
            Payment Received
          </motion.span>
        );
      case 'FAILED':
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.15,
              },
            }}
          >
            Payment failed
          </motion.span>
        );
        break;
      case 'PENDING':
        return (
          <motion.img
            src={Spinner}
            width="20"
            height="20"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.25,
              },
            }}
            exit={{ opacity: 0 }}
          />
        );
      case 'INTIAL':
        return <span>Pay Now</span>;
      default:
        return null;
    }
  };

  const getPaymentColor = () => {
    switch (payemntStatus) {
      case 'CAPTURED':
        return 'bg-green-600';
      case 'FAILED':
        return 'bg-red-600';
      case 'PENDING':
        return 'bg-gray-500';
      case 'INTIAL':
        return 'bg-blue-600';
      default:
        return 'bg-blue-600';
    }
  };
  return (
    <LayoutGroup>
      <motion.div
        layout
        style={{
          minWidth: width.current,
        }}
      >
        <motion.button
          onClick={onSubmit}
          type="button"
          className={`text-white ${getPaymentColor()} bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none`}
        >
          {renderPaymentStatus()}
        </motion.button>
      </motion.div>
    </LayoutGroup>
  );
}

export default Button;
