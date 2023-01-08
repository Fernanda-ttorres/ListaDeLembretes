import React from "react";
import { Card } from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import { CardBranco } from "../../components/Card/Card.styled";
import { useState } from "react";
import Title from "../../components/Title/Title";

const ReminderList = ({}) => {
  const [cardName, setCardName] = useState("");
  const [reminders, setReminder] = useState([]);

  const [cardDate, setCardDate] = useState("");
  const [dates, setDate] = useState([]);

  const handleAddReminder = () => {
    if (cardName != "" && cardDate != "") {
      const newReminder = {
        name: cardName,
        id: Math.random(),
        date: cardDate,
      };
      setReminder((prevState) => [...prevState, newReminder]);      
    }
    
    const newDate = {
      date: cardDate,
    };

    setDate((prevState) => [...prevState, newDate]);
    
  };

  //************ORDENAÇÃO****************
  const sorted = reminders.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const sortedDate = dates.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  console.log(sorted);

  const handleDelete = (id) => {
    const newReminders = reminders.filter((reminder) => reminder.id !== id);

    setReminder(newReminders);
  };

  return (
    <CardBranco>
      <Form
        onChange={(e) => setCardName(e.target.value)}
        onChangeDate={(e) => setCardDate(e.target.value)}
        onClick={handleAddReminder}
      />
      <Title tagName="h2" titleText="Lista de Lembretes" />

      {dates.map((date) => (
        <Title tagName="h5" titleText={date.date} />
      ))}

      {reminders.map((reminder) => (
        <Card
          nome={reminder.name}
          key={reminder.id}
          onClick={() => handleDelete(reminder.id)}
        />
      ))}
    </CardBranco>
  );
};

export default ReminderList;
