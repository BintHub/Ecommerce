import { Image } from "cloudinary-react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import './pagination.css';
import share from '../../assets/share.svg'
import compare from '../../assets/compare.svg'
import like from '../../assets/like.svg'
import { useNavigate } from 'react-router-dom';
import { shopData } from "./shopData";
import { useRecoilState } from 'recoil';
import { cartData } from '../atoms/Cart';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Pagination({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  let [shop,setShop] = useState(shopData);
  let redir = useNavigate();
  let [cart,setCart] =useRecoilState(cartData);
  function handleRemove(id) {
    let removed = cart.filter(function( obj ) {
        return obj.id !== id;
      });

      setCart(removed);
}


  function Items({ currentItems }) {
    return (
      <div className=" items-center justify-center grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-4">
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id} className="relative ml-4 group" >
             <Image className='relative w-[285px] h-[301px]' loading="lazy" cloudName="dlifiojbx" publicId={item.img} />
             {/* hover */}
         <div className='group-hover:flex flex-col hidden absolute left-0 top-0 w-full h-[62vh] bg-[#3A3A3A] bg-opacity-50' >
          <div className='text-center mt-28'>
          <button onClick={()=> handleRemove(item.id)} className='font-poppins font-semibold text-primary text-base bg-white py-3 px-8'>Add to cart</ button>
          </div>
          <div className='flex flex-row gap-4 py-6 ml-10'>
            <div>
            <button className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {share} alt="icon"/> Share</button>
            </div>
            <div>
            <button onClick={()=>redir('/product/'+item.id)} className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {compare} alt="icon"/>Compare</button>
            </div>
            <div>
            <button className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {like} alt="icon"/>Like</button>
            </div>
         </div>
    </div> 
             <div className='font-poppins bg-[#F4F5F7] pl-4 py-2 w-[285px]'>
             <div className='absolute text-white h-12 w-12 top-4 right-5 bg-[#E97171] rounded-full font-poppins font-medium text-base 
             text-center py-3 md:right-20 lg:right-10'>{item.discount}</div>
             <h1 className='text-tertiary  text-2xl font-semibold'>{item.name}</h1>
             <p className='text-[#898989] text-base font-medium'>{item.disc}</p>
             <p className='text-tertiary  font-semibold text-xl'>{item.price}
               <span className='text-[#B0B0B0] font-normal text-base px-2 line-through'>{item.oldPrice}</span></p>
            </div>
        </div>
          ))}
 
      </div> 
    );
  }

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="pageNum"
        nextLinkClassName="pageNum"
        activeClassName="active"
      />
    </>
  );
}

export default Pagination;