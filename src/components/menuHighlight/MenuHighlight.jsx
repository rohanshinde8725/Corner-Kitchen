
const MenuHighlight = () => {
    const menuItems = [
        {
            id : 1,
            img : "/images/menu-item-1.png",
            title : "Grilled Hub Checken",
            desc : "Juicy grilled chicken with herb butter, mashed potatoes and seasonal vegetables.",
            price : 370,
        },

        {
            id : 2,
            img : "/images/menu-item-2.png",
            title : "Creamy Mushroom Pasta",
            desc : "Pasta in rich creamy mushroom sauce with parmeasan and a youch of garlic.",
            price : 280,
        },

        {
            id : 3,
            img : "/images/menu-item-3.png",
            title : "Classic Cheeseburger",
            desc : "beef patty with cheddar cheese, fresh vaggies and house sauce Served with fries.",
            price : 135,
        },

        {
            id : 4,
            img : "/images/menu-item-4.png",
            title : "Chocolate Lava Cake",
            desc : "Warm chocolate cake with a molten center, served with vanilla ice cream.",
            price : 220,
        },
    ]
  return (
    <div className='w-full py-20 px-5 xl:px-20 xl:pt-15'>
        <h1 className='text-4xl text-center font-semibold text-[#1d1511]'>Our Menu Highlight</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
        {menuItems.map((item, index)=> (
            <div key={index} className='rounded-t-xl shadow-xl rounded-b-xl'>
                <img className='h-65 2xl:h-80 w-full object-cover rounded-t-xl' src={item.img} alt="" />

                <div className='p-5'>
                    <h1 className='text-xl font-semibold text-[#1d1511] '>{item.title}</h1>
                    <p className='text-base my-2 2xl:pr-10 text-[#797370] '>{item.desc}</p>
                    <h3 className='text-[#ff8c00] text-2xl font-semibold mt-2 '>₹{item.price}</h3>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default MenuHighlight
