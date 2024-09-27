import { Image } from "cloudinary-react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import '../pagination/Pagination.css';
import user from '../../assets/user.svg'
import calender from '../../assets/calender.svg'
import tag from '../../assets/tag.svg'
import { useNavigate } from 'react-router-dom';
import { AboutData } from "../Blog/AboutData";

function Pagination2({ itemsPerPage, items }) {

    const [itemOffset, setItemOffset] = useState(0);
    let [blog,setBlog] = useState(AboutData);
    // let redir = useNavigate();
  
    function Items({ currentItems }) {
      return (
        <div className="">
          {currentItems &&
            currentItems.map((item) => (
              <div key={item.id} className=" w-full px-6 mt-10" >
               <Image className='w-full h-[500px]' loading="lazy" cloudName="dlifiojbx" publicId={item.img} />
               {/* tags*/}
            <div className='' >
               <div className='flex flex-row gap-6 py-2'>
              <div>
              <button className='text-[#9F9F9F] flex font-poppins font-semibold'><img className='pt-1' src= {user} alt="icon"/>Admin</button>
              </div>
              <div>
              <button className='text-[#9F9F9F] flex font-poppins font-semibold'><img className='pt-1' src= {calender} alt="icon"/>14 Oct 2022</button>
              </div>
              <div>
              <button className='text-[#9F9F9F] flex font-poppins font-semibold'><img className='pt-1' src= {tag} alt="icon"/>Wood</button>
              </div>
             </div>
          </div> 
               <div className='font-poppins'>
               <h1 className='text-tertiary text-3xl font-medium'>{item.name}</h1>
              <p className='text-[#898989] text-sm font-normal sm:w-[400px] md:w-[400px] lg:w-[600px]'>{item.disc}</p>
               <button className='text-black font-normal text-sm px-2 py-2 border-black border-b-2'>{item.btn}</button>
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

export default Pagination2