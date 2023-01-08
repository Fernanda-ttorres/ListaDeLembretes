import React from "react";
import { Card } from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import { WhiteCard, StyledUl } from "../ReminderList/ReminderList.styled";
import { useState } from "react";
import Title from "../../components/Title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const ReminderList = ({}) => {
  const [cardName, setCardName] = useState("");
  const [reminders, setReminder] = useState([]);

  const [cardDate, setCardDate] = useState("");
  const [dates, setDate] = useState([]);

  const handleAddReminder = () => {
    const newReminder = {
      name: cardName,
      id: Math.random(),
      date: cardDate,
    };

    setReminder((prevState) => [...prevState, newReminder]);

    if (checkDate == "" || dates == "") {
      const newDate = {
        date: cardDate,
      };

      setDate((prevState) => [...prevState, newDate]);
      
    } else {
      console.log("Já tem essa data");
    }
  };

  const checkDate = dates.filter((date) => date.date == cardDate);
  console.log(checkDate);
  
  const sortedDate = dates.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const handleDelete = (id, date) => {
    const newReminders = reminders.filter((reminder) => reminder.id !== id);

    setReminder(newReminders);

    const cont = reminders.filter((reminder) => reminder.date == date);
    console.log(cont);
    if (cont.length == 1 ) {
      const newDates = dates.filter((date) => date.date != cont.map((c) => c.date));

      setDate(newDates);
    }
  }; 
  
  function formatDate(data) {
    let newDate = new Date(data);
    return newDate.toISOString().substr(0, 10).split('-').reverse().join('/');
  }
  
  return (
    <WhiteCard>
      <Form
        onChange={(e) => setCardName(e.target.value)}
        onChangeDate={(e) => setCardDate(e.target.value)}
        onSubmit={handleAddReminder}
      />
      <Title tagName="h2" titleText="Lista de Lembretes" icon={<FontAwesomeIcon icon={faCalendarCheck} />} />

      {dates.map((date) => (
        <StyledUl>
          <p>{formatDate(date.date)}</p>

          {reminders
            .filter((reminder) => reminder.date == date.date)
            .map((reminder) => (
              <Card
                nome={reminder.name}
                key={reminder.id}
                onClick={() => handleDelete(reminder.id, date.date)}
              />
            ))}
        </StyledUl>
      ))}
    </WhiteCard>
  );
};

export default ReminderList;