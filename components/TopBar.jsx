
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function TopBar() {
  return (
    <>
      <section className="topnavbar bg-primary">
        <div className="container mx-auto p-3">
         <div className="topnavbar_inner">
                  <ul className="flex flex-col lg:flex-row items-center">
            <li className=" lg:mr-5 text-white">
              <a href="tel:+9710507420262" className='flex items-center'>
                <IoIosCall />
                <span className="ml-3">+971 050 742 0262</span>
              </a>
            </li>
            <li className="text-white">
              <a href="mailto:info@firswoodconsultancy.com" className='flex items-center'>
                <MdEmail />
                <span className="ml-3">info@firswoodconsultancy.com</span>
              </a>
            </li>
          </ul>

         </div>
        </div>
      </section>


      {/* <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="bg-blue-500 text-white p-6">
            <h2 className="text-xl font-bold">Column 1</h2>
            <p>This is the first column content.</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="bg-red-500 text-white p-6">
            <h2 className="text-xl font-bold">Column 2</h2>
            <p>This is the second column content.</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="bg-green-500 text-white p-6">
            <h2 className="text-xl font-bold">Column 3</h2>
            <p>This is the third column content.</p>
          </div>
        </div>
      </div>
    </div> */}


      
    </>
  )
}

export default TopBar