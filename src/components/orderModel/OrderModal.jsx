import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const OrderModal = ({ isOpen, onClose, item }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
    notes: "",
  });

  useEffect(() => {
    if (isOpen) {
      setForm({
        name: "",
        phone: "",
        address: "",
        quantity: 1,
        notes: "",
      });
    }
  }, [isOpen]);

  if (!item) return null;

  const total = (item.price * form.quantity).toFixed(2);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "quantity"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      item, ...form, total,
    });
    alert("Order placed successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background */}

          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}

          <motion.div
            initial={{ opacity: 0, scale: .8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .8, y: 50 }}
            transition={{ duration: .3 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white rounded-2xl shadow-xl w-[95%] md:w-162.5 max-h-[90vh] overflow-y-auto z-50"
          >
            {/* Header */}

            <div className="flex justify-between items-center border-b p-5">
              <h2 className="text-2xl font-bold">
                Order Food
              </h2>

              <button onClick={onClose}>
                <IoClose size={28} />
              </button>
            </div>

            {/* Body */}

            <div className="p-6">

              <div className="flex flex-col md:flex-row gap-5">

                <img src={item.img}
                  alt={item.title}
                  className="w-full md:w-44 h-44 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="text-3xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 mt-2">
                    {item.subtitle}
                  </p>
                  <p className="text-2xl mt-4 font-semibold text-[#cb9d56]">
                    ${item.price}
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
              >

                <input type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <textarea
                  rows="3"
                  name="address"
                  placeholder="Delivery Address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <input
                  type="number"
                  min="1"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <textarea
                  rows="2"
                  name="notes"
                  placeholder="Special Instructions"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <div className="bg-[#faf7f4] rounded-xl p-4 flex justify-between text-xl font-semibold">
                  <span>Total</span>
                  <span className="text-[#cb9d56]">
                    ${total}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D3A2D] text-white py-3 rounded-lg hover:bg-[#435843]"
                >
                  Confirm Order
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;