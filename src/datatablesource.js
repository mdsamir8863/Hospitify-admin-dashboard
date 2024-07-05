export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Doctor",
    headerName: "Doctor",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "specialization",
    headerName: "Specialization",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  // {
  //   field: "age",
  //   headerName: "Age",
  //   width: 100,
  // },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Suneja Agarwal",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    specialization: "Anesthesiology",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    specialization: "Internal Medicine",
  },
  {
    id: 3,
    username: "Lannister",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    specialization: "Infectious Disease",
  },
  {
    id: 4,
    username: "Stark",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    specialization: "Dermatology",
  },
  {
    id: 5,
    username: "Targaryen",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    specialization: "Family Medicine",
  },
  {
    id: 6,
    username: "Melisandre",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    specialization: "Nephrology",
  },
  {
    id: 7,
    username: "Clifford",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    specialization: "Psychiatry",
  },
  {
    id: 8,
    username: "Frances",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    specialization: "Radiology",
  },
  {
    id: 9,
    username: "Roxie",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    specialization: "Rheumatology",
  },
  {
    id: 10,
    username: "Roxie",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    specialization: "Urology",
  },
];
