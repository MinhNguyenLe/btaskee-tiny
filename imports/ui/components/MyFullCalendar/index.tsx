import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core";
import { Row, Col } from "antd";

const INITIAL_EVENTS: EventInput[] = [
  {
    id: "0",
    title: "All-day event",
    start: new Date().toISOString().replace(/T.*$/, "") + "T12:00:00",
  },
  {
    id: "1",
    title: "All-day event",
    start: new Date().toISOString().replace(/T.*$/, "") + "T15:00:00",
  },
  {
    id: "2",
    title: "All-day event",
    start: new Date().toISOString().replace(/T.*$/, "") + "T18:00:00",
  },
  {
    id: "3",
    title: "All-day event",
    start: new Date().toISOString().replace(/T.*$/, "") + "T21:00:00",
  },

  {
    id: "4",
    title: "Timed event",
    start: new Date().toISOString().replace(/T.*$/, "") + "T06:00:00",
  },
];

const MyFullCalendar = () => {
  return (
    <Row gutter={32}>
      <Col span={12}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        />
      </Col>
      <Col span={12}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={[{ title: "Meeting", start: new Date() }]}
          eventContent={(eventInfo) => (
            <>
              <b>{eventInfo.timeText}</b>
              <i>{eventInfo.event.title}</i>
            </>
          )}
        />
      </Col>
    </Row>
  );
};

export default MyFullCalendar;
