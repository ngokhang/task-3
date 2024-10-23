import TableFilters from "@/components/queue/tickets/TableFilters";
import classes from "./page.module.css";
import TicketTableData from "@/components/queue/tickets/TicketTableData";

const AllTicketsPage = () => {
  return (
    <div className={classes.ticketContainer}>
      <TableFilters />
      <TicketTableData />
    </div>
  );
};

export default AllTicketsPage;
