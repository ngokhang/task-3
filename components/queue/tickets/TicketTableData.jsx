"use client";

import classes from "./TicketTableData.module.css";
import { FaRegCircleCheck } from "react-icons/fa6";

const TicketTableDataMock = [
  {
    type: "IA-521",
    app: "HRMS/TMS System",
    summary: "Không đăng nhập được HRMS",
    priority: "=",
    status: "Closed",
    reporter: "Tai. Phung The",
    assignee: "Tuan. Do Van",
    slaTimeToFirstResponse: "23 Sep 17:12",
    slaTimeToResolution: "25 Sep 16:12",
    label: "-",
  },
  {
    type: "IA-522",
    app: "HRMS/TMS System",
    summary: "Lỗi hiển thị dữ liệu",
    priority: "High",
    status: "Open",
    reporter: "Nguyen. Van A",
    assignee: "Tran. Van B",
    slaTimeToFirstResponse: "24 Sep 09:00",
    slaTimeToResolution: "26 Sep 09:00",
    label: "Bug",
  },
  {
    type: "IA-523",
    app: "HRMS/TMS System",
    summary: "Không thể tải tệp đính kèm",
    priority: "Medium",
    status: "In Progress",
    reporter: "Le. Thi C",
    assignee: "Pham. Van D",
    slaTimeToFirstResponse: "24 Sep 10:30",
    slaTimeToResolution: "26 Sep 10:30",
    label: "Support",
  },
  {
    type: "IA-524",
    app: "HRMS/TMS System",
    summary: "Lỗi kết nối mạng",
    priority: "Low",
    status: "Resolved",
    reporter: "Hoang. Van E",
    assignee: "Nguyen. Van F",
    slaTimeToFirstResponse: "24 Sep 11:00",
    slaTimeToResolution: "26 Sep 11:00",
    label: "Network",
  },
  {
    type: "IA-525",
    app: "HRMS/TMS System",
    summary: "Không thể cập nhật thông tin cá nhân",
    priority: "High",
    status: "Closed",
    reporter: "Tran. Thi G",
    assignee: "Le. Van H",
    slaTimeToFirstResponse: "24 Sep 12:00",
    slaTimeToResolution: "26 Sep 12:00",
    label: "Update",
  },
  {
    type: "IA-526",
    app: "HRMS/TMS System",
    summary: "Lỗi đăng ký nghỉ phép",
    priority: "Medium",
    status: "Open",
    reporter: "Pham. Van I",
    assignee: "Hoang. Van J",
    slaTimeToFirstResponse: "24 Sep 13:00",
    slaTimeToResolution: "26 Sep 13:00",
    label: "Leave",
  },
];

const TicketTableData = () => {
  return (
    <div className={classes.ticketContent}>
      <section className={classes.ticketTable}>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Key</th>
              <th>App</th>
              <th>Summary</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Reporter</th>
              <th>Assignee</th>
              <th>SLA Time To First Response</th>
              <th>SLA Time To Resolution</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {TicketTableDataMock.map((ticket, index) => (
              <tr key={index}>
                <td>
                  <img
                    src="/type.png"
                    alt="type icon"
                    className={classes.icon}
                  />
                </td>
                <td>{ticket.type}</td>
                <td>{ticket.app}</td>
                <td>
                  <a href="#">{ticket.summary}</a>
                </td>
                <td>{ticket.priority}</td>
                <td>
                  <span className="status closed">{ticket.status}</span>
                </td>
                <td>{ticket.reporter}</td>
                <td>{ticket.assignee}</td>
                <td>
                  <span className={`${classes.sla} ${classes.slaGreen}`}>
                    <FaRegCircleCheck />
                    {ticket.slaTimeToFirstResponse}
                  </span>
                </td>
                <td>
                  <span className={`${classes.sla} ${classes.slaOrange}`}>
                    <i
                      className="fa-regular fa-circle-pause"
                      style={{ color: "#fff" }}
                    />
                    {ticket.slaTimeToResolution}
                  </span>
                </td>
                <td>{ticket.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TicketTableData;
