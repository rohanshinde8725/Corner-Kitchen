import { useState } from "react";
import menuData from "../api/menuData";
import { LuConciergeBell, LuCake } from "react-icons/lu";
import { RiBowlLine } from "react-icons/ri";
import { PiBowlFood, PiPintGlass } from "react-icons/pi";
import { motion } from "framer-motion";
import FadeUp from "../components/fadeUp/FadeUp";
import OrderModal from "../components/orderModel/OrderModal";

const Menu = () => {

  // Active Tab
  const [activeTab, setActiveTab] = useState("All Menu");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOrder = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    console.log("Clicked");
  };

  // Tabs
  const tabs = [
    {
      title: "All Menu",
      icon: <LuConciergeBell />,
    },
    {
      title: "Starters",
      icon: <RiBowlLine />,
    },
    {
      title: "Main Course",
      icon: <PiBowlFood />,
    },
    {
      title: "Beverages",
      icon: <PiPintGlass />,
    },
    {
      title: "Dessert",
      icon: <LuCake />,
    },
  ];

  // Filter Logic
  const filteredItems =
    activeTab === "All Menu"
      ? menuData
      : menuData.filter((item) => item.category === activeTab);

  return (
    <div className="bg-[#faf7f4] border-b border-gray-300">
      {/* Menu Banner Start */}
      <div className="w-full h-150 bg-cover bg-center bg-[url('/images/MenuBanner.png')] relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-6xl text-white font-semibold text-center">
            Our Menu
          </h1>
          <p className="text-white text-center mt-8 text-xl leading-10">
            A delightful variety of dishes crafted
            <br />
            with the finest ingredients and passion.
          </p>
        </motion.div>
      </div>
      {/* Menu Banner End */}

      {/* Menu Tabs Start */}
      <FadeUp direction="up">
        <div className="w-[90%] xl:w-[80%] mx-auto flex flex-wrap justify-center items-center py-10">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              onClick={() => setActiveTab(tab.title)}
              className={`
                flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-gray-300 last:border-r-0
                py-5 px-10 lg:px-20 cursor-pointer transition-all duration-300
                ${
                  activeTab === tab.title
                    ? "bg-[#F7F6F2] text-[#cb9d56]"
                    : "hover:text-[#cb9d56] hover:bg-[#F7F6F2]"
                }
              `}
            >
              <div className="text-4xl">{tab.icon}</div>
              <h1 className="text-2xl mt-3 font-semibold">{tab.title}</h1>
            </div>
          ))}
        </div>
      </FadeUp>
      {/* Menu Tabs End */}

      {/* Menu Content Start */}
      <div className="py-10">
        {/* Heading */}
        <FadeUp direction="down">
          <div>
            <h3 className="text-center text-[#cb9d56] text-lg font-normal">
              Our Favourite
            </h3>
            <h1 className="text-center text-4xl font-semibold mt-3">
              Explore Our Menu
            </h1>
          </div>
        </FadeUp>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-[90%] xl:w-[80%] mx-auto mt-10">
          {filteredItems.map((item) => (
            <FadeUp direction="up" key={item.id}>
              <div
                key={item.id}
                className="border border-gray-300 rounded-xl p-3 flex flex-col md:flex-row gap-5 bg-white"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="w-full md:w-40 h-40 object-cover rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer"
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-center w-full gap-5">
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                    <h3 className="text-2xl font-semibold text-[#cb9d56] whitespace-nowrap">
                      ${item.price}
                    </h3>
                  </div>

                  <div className="mt-3 text-gray-600 leading-5 max-w-[70%]">
                    {item.subtitle}
                  </div>

                  <div className="flex gap-5 mt-4">
                    <button 
                    onClick={() => handleOrder(item)}
                    className="bg-[#2D3A2D] py-1.5 px-3 text-white text-sm rounded-sm border-2 border-[#2D3A2D] hover:bg-transparent hover:text-[#2D3A2D] cursor-pointer transition-all duration-300">
                      Order Now
                    </button>

                    <button className="bg-transparent py-1.5 px-3 rounded-sm text-sm cursor-pointer border-2 border-[#2D3A2D] text-[#2D3A2D] hover:text-white hover:bg-[#2D3A2D] transition-all duration-300">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
      {/* Menu Content End */}

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </div>
  );
};

export default Menu;