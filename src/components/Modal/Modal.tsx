import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import "./Modal.styles.scss";

type ModalProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  customClasses?: string;
  customPanelClasses?: string;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  customClasses,
  customPanelClasses,
}: ModalProps) => {
  return (
    <div className={`${customClasses} container z-100`}>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-100 " onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="modal-overlay fixed inset-0 bg-slate-900/80 backdrop-blur-md" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel
                  className={`my-auto h-[fit] w-full max-w-[854px] transform rounded-[14px] bg-white p-6 text-left align-middle shadow-xl transition-all ${customPanelClasses}`}>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
