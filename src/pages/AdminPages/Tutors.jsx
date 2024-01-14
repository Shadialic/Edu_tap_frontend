import React, { useEffect, useState } from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import Navbar from "../../components/AdminComponents/Navbar";
import { BlockUnblockuser, LoadTutorList} from "../../api/adminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Tutors() {
  const [user, setUser] = useState([]);
  const [tutor, setTutor] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    LoadTutorList()
      .then((res) => {
        const tutorList = res.data.tutordata;
        console.log(tutorList,'tutorList');
        setTutor(tutorList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleblockuser = async (userId) => {
    const data = { _id: userId };
    try {
      await BlockUnblockuser(data).then((res) => {
        if (res.status === 200) {
          toast(res.data.alert);

          // Toggle the 'block' property of the user with the specified 'userId'
          setUser((prevUsers) =>
            prevUsers.map((user) =>
              user._id === userId ? { ...user, block: !user.block } : user
            )
          );
        }
      });
    } catch (error) {
      console.error(error);
    }
};

const handleUnblockuser =async (userId)=>{
  try{
    const data = { _id: userId };
  await BlockUnblockuser(data).then((res) => {
    if (res.status === 200) {
      toast(res.data.alert);

      // Toggle the 'block' property of the user with the specified 'userId'
      setUser((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, block: false } : user
        )
      );
    }
  });

  }catch(err){
    console.log(err);
  }
}

  //=================== SEARCH INPUT HANDLER===========================//

//   const handleSearchInput = (e) => {
//     setSearch(e.target.value);
//   };

  //===================== SEACHED DATA FETCHING  ============//

  const tutorDatas = tutor.filter((tutor) => {
    const searchLowerCase = search.toLowerCase();
    const EmailMatch = tutor.email.toLowerCase().includes(searchLowerCase);
    const nameMatch = tutor.tutorName.toLowerCase().includes(searchLowerCase);
    const phoneMatch = tutor.phone.toString().includes(searchLowerCase);

    return EmailMatch || nameMatch || phoneMatch;
  });
  console.log(tutorDatas);
  return (
    <div>
      <Sidebar />
      <Navbar />

      <div className="mt-12 mb-8 flex flex-col gap-12 p-4 xl:ml-80">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 shadow-lg -mt-6 mb-8 p-6">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Tutors List
            </h6>
          </div>
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Id
                    </p>
                  </th>

                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      tutorName
                    </p>
                  </th>

                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Email
                    </p>
                  </th>

                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      phone
                    </p>
                  </th>

                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Status
                    </p>
                  </th>

                  {/* ... other table header cells ... */}
                </tr>
              </thead>
              <tbody>
                {tutorDatas.map((values, index) => (
                  <tr key={values._id}>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        {index+1}
                        {/* ... content for the second row ... */}
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        {values.tutorName}
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
                    onClick={() => handleUnblockuser(values._id)}
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
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutors;
