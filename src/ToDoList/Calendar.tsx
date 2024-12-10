// src/components/Calendar.tsx
import React from 'react';

interface CalendarProps {
    currentDate: Date;
    onDateChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ currentDate, onDateChange }) => {
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handlePrevDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        onDateChange(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        onDateChange(newDate);
    };

    return (
        <div className="calendar">
        <button onClick={handlePrevDay} className="btn">Previous Day</button>
    <div>{formatDate(currentDate)}</div>
    <button onClick={handleNextDay} className="btn">Next Day</button>
    </div>
);
};

export default Calendar;