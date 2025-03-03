import { Button, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/AuthContext.js";
import PopupConfirm from "../../components/popupNotification/PopupConfirm.js";

const HandleAddLocationDetails = ({ appointment, setShowDrawer }) => {
  const { fetchAllBookings, setHeaderTitle } = useAuth();

  return (
    <div>
      <PopupConfirm
        description={`Delete ${appointment.user_id}?`}
        confirm={() => confirmDeleteAppointment(appointment, fetchAllBookings)}
        cancel={() => cancelDeleteAppointment(appointment)}
        component={
          <Button
            type="primary default"
            danger
            ghost
            icon={<DeleteOutlined />}
          ></Button>
        }
      />

      <PopupConfirm
        description={`Do you want to edit location ${appointment.name}?`}
        confirm={() =>
          confirmEditAppointment(appointment, setShowDrawer, setHeaderTitle)
        }
        cancel={() => cancelEditAppointment(setShowDrawer)}
        component={
          <Button type="primary danger" ghost icon={<EditOutlined />}></Button>
        }
      />
    </div>
  );
};

const confirmDeleteAppointment = (
  appointment,
  removeAppointment,
  fetchAllBookings
) => {
  removeAppointment(appointment);
  fetchAllBookings();
};

const cancelDeleteAppointment = (e) => {
  console.log(e);
  message.error("Click on No");
};

const confirmEditAppointment = (appointment, setShowDrawer, setHeaderTitle) => {
  setHeaderTitle(`Update Appointment: ${appointment.name}`);
  setShowDrawer(true);
  message.success("Click on Yes");
};

const cancelEditAppointment = (setShowDrawer) => {
  setShowDrawer(false);
  message.error("Click on No");
};

const bookingColumns = (setShowDrawer) => [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time Slot",
    dataIndex: "timeSlot",
    key: "timeSlot",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, appointment) => (
      <HandleAddLocationDetails
        key={appointment.key}
        appointment={appointment}
        setShowDrawer={setShowDrawer}
      />
    ),
  },
];

export { bookingColumns };
