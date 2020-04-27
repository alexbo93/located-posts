import React, { useEffect } from 'react';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import { useSelector } from 'react-redux';
import { selectMessages } from 'redux/messages';

const Notifier: React.FC<{}> = () => {
  const { addToast } = useToasts();
  const { success, error } = useSelector(selectMessages);
  useEffect(() => {
    if (success) {
      addToast(success, {
        appearance: 'success',
        autoDismiss: true,
      });
    }
    if (error) {
      addToast(error, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [success, error, addToast]);

  return <React.Fragment />;
};

const ToasterNotifier = () => (
  <ToastProvider>
    <Notifier />
  </ToastProvider>
);

export default ToasterNotifier;
