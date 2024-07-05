export const appointmentColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Patient",
    headerName: "Patient",
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
    field: "Doctor",
    headerName: "Doctor",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.doctorImg} alt="avatar" />
          {params.row.doctorName}
        </div>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 230,
  },
  {
    field: "time",
    headerName: "Time",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

 
  

//temporary data
export const appointmentRows = [
  {
    id: 1,
    username: "Suneja Agarwal",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Smith",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-01",
    time: "10:00 AM",
    status: "active",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Johnson",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-02",
    time: "11:00 AM",
    status: "passive",
  },
  {
    id: 3,
    username: "Lannister",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Brown",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-03",
    time: "12:00 PM",
    status: "pending",
  },
  {
    id: 4,
    username: "Stark",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Davis",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-04",
    time: "1:00 PM",
    status: "active",
  },
  {
    id: 5,
    username: "Targaryen",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Miller",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-05",
    time: "2:00 PM",
    status: "passive",
  },
  {
    id: 6,
    username: "Melisandre",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Wilson",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-06",
    time: "3:00 PM",
    status: "active",
  },
  {
    id: 7,
    username: "Clifford",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Taylor",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-07",
    time: "4:00 PM",
    status: "passive",
  },
  {
    id: 8,
    username: "Frances",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. White",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-08",
    time: "5:00 PM",
    status: "active",
  },
  {
    id: 9,
    username: "Roxie",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Harris",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-09",
    time: "6:00 PM",
    status: "pending",
  },
  {
    id: 10,
    username: "Roxie",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doctorName: "Dr. Martin",
    doctorImg:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    date: "2022-01-10",
    time: "7:00 PM",
    status: "active",
  },
];
