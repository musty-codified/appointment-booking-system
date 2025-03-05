import React, { useState } from "react";
import AddBookingForm from "../userDashboard/AddBookingForm";
import { bookingColumns } from "./AppointmentData";
import ReactPaginate from "react-paginate";
import { useAuth } from "../../context/AuthContext";
import { Table, Spin, Empty, Button, Badge, Tag } from "antd";
import {
  UserAddOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import DrawerForm from "../../components/forms/DrawerForm";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const AppointmentTableView = ({ tableTitle }) => {
  const changePage = ({ selected }) => setPageNumber(selected);
  const {
    getAllBookings,
    totalPages,
    setPageNumber,
    fetching,
    totalElements,
    setHeaderTitle,
    headerTitle,
  } = useAuth();
  const [showDrawer, setShowDrawer] = useState(false);

  const handleShowDrawer = () => {
    setHeaderTitle("Add New Appointment");

    setShowDrawer(!showDrawer);
  };

  return (
    <section className="booking-data">
      <DrawerForm
        title={headerTitle}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        formLayout={<AddBookingForm setShowDrawer={setShowDrawer} />}
      />

      
      {fetching && (
        <div
          style={{
            width: "100vw",
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin indicator={antIcon} style={{ color: "rgb(218, 196, 161)" }} />
        </div>
      )}

      <div className="table-div">
        {getAllBookings?.length > 0 && (
          <div className="title-head">
            <div className="title-sub-head">
              <button className="home-btn" onClick={handleShowDrawer}>
                <UserAddOutlined />
                Add New Appointment
              </button>
              <button className="btn-count">{totalElements}</button>
            </div>
            <h2 className='"layout-h2-header'>{tableTitle}</h2>
            <ReactPaginate
              previousLabel={<CaretLeftOutlined />}
              nextLabel={<CaretRightOutlined />}
              pageCount={totalPages}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"prevBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        )}

        {getAllBookings?.length > 0 && (
          <Table
            dataSource={getAllBookings}
            columns={bookingColumns(setShowDrawer)} 
            bordered
            title={() => (
              <>
                <Button
                  onClick={handleShowDrawer}
                  type="primary "
                  shape="round"
                  size="small"
                >
                  Add New Bookings
                </Button>
                <Tag style={{ marginLeft: "15px" }}>Number of Bookings</Tag>
                <Badge className="site-badge-count-109" count={totalElements} />
              </>
            )}
            footer={() => "Footer"}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 400 }}
            rowKey={(appointment) => appointment.id}
          />
        )}
      </div>

      {getAllBookings?.length === 0 && !fetching && (
        <div
          style={{
            width: "100vw",
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Empty>
            <button className="home-btn" onClick={handleShowDrawer}>
              Add New Booking
            </button>
          </Empty>
        </div>
      )}
    </section>
  );
};

export default AppointmentTableView;
