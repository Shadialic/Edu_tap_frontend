import React, { useEffect, useState } from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import Navbar from "../../components/AdminComponents/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logoutDetails } from "../../Redux/userSlice/userSlice";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
function Category() {
  const [Category, setCategory] = useState('');
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleblockuser = async (userId) => {
    try {
      localStorage.removeItem("token");

      dispatch(
        logoutDetails({
          id: "",
          name: "",
          email: "",
          phone: "",
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async(e) => {
    try{
        e.preventDefault();

        if(Category===''){
            toast('Eanter category')
        }else{
            await ManageCategory(Category).then((res)=>{
                console.log(res);
            })
        }

    }catch(err){
        console.log(err);
    }


   
  };
  const userDatas = user.filter((user) => {
    const searchLowerCase = searchInput.toLowerCase();
    const EmailMatch = user.email.toLowerCase().includes(searchLowerCase);
    const nameMatch = user.userName.toLowerCase().includes(searchLowerCase);
    const phoneMatch = user.phone.toString().includes(searchLowerCase);

    return EmailMatch || nameMatch || phoneMatch;
  });

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUserDatas = userDatas.slice(startIndex, endIndex);

  console.log(userDatas, "userDatasuserDatasuserDatasuserDatasuserDatas");
  return (
    <div>
      <Sidebar state={"Category"} />
      <Navbar
        state={"Category"}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="flex items-end justify-end mr-14">
        <Button onClick={handleOpen}>ADD+</Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <form onSubmit={handleSubmit}>
                {/* ... other form elements ... */}
                <Typography variant="h6">Enter New Category</Typography>
                <Input label="category" size="lg" onChange={(e)=>setCategory(e.target.value)} value={Category} />
              </form>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                className="bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20"
                variant="gradient"
                onClick={handleOpen}
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </div>
      <div className="mt-12 mb-8 flex flex-col gap-12 p-4 xl:ml-80">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 shadow-lg -mt-6 mb-8 p-6">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Categoreas
            </h6>
          </div>
          <div className="p-4 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-40 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Id
                    </p>
                  </th>

                  <th className="border-b border-blue-gray-40 py-3 px-2 text-center">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Category
                    </p>
                  </th>

                  <th className="border-b border-blue-gray-40 py-3 px-2 text-rigth">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Status
                    </p>
                  </th>

                  {/* ... other table header cells ... */}
                </tr>
              </thead>
              <tbody>
                {userDatas.map((values, index) => (
                  <tr key={values._id}>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        {index + 1}
                        {/* ... content for the second row ... */}
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        {values.userName}
                        {/* ... content for the second row ... */}
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        {values.email}
                        {/* ... content for the third row ... */}
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        {values.phone}
                        {/* ... content for the fourth row ... */}
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        {!values.block ? (
                          <button
                            className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20  rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                            data-projection-id="1"
                            style={{ opacity: 1 }}
                            onClick={() => handleblockuser(values._id)}
                          >
                            <span>Block</span>
                          </button>
                        ) : (
                          <button
                            className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20  rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                            data-projection-id="1"
                            style={{ opacity: 1 }}
                            onClick={() => handleblockuser(values._id)}
                          >
                            <span>Unblock</span>
                          </button>
                        )}
                      </div>
                    </td>
                    {/* ... other table cells ... */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <ReactPaginate
                previousLabel={
                  <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
                }
                nextLabel={
                  <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                }
                breakLabel={"..."}
                pageCount={Math.ceil(userDatas.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(data) => setCurrentPage(data.selected)}
                containerClassName={"pagination flex gap-2"}
                activeClassName={
                  "bg-white-500 text-lightBlue-900 px-3 py-2 rounded"
                }
                previousClassName={
                  "border bg-[#075985] text-white rounded px-3 py-2 hover:bg-lightBlue-950"
                }
                nextClassName={
                  "border  bg-[#075985] text-white rounded px-3 py-2 hover:bg-lightBlue-950"
                }
                disabledClassName={"opacity-110"}
              />
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
