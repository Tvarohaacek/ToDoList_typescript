import React, { useState, useEffect } from 'react';

interface CalendarProps {
    onDateChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Aktualizace času každou minutu
        const timer = setInterval(() => {
            const newDate = new Date();
            setCurrentDate(newDate);
            onDateChange(newDate);
        }, 60000); // 60000 ms = 1 minuta

        // Počáteční nastavení aktuálního času
        onDateChange(currentDate);

        // Úklid intervalu při unmountování komponenty
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('cs-CZ', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="calendar">
            <div>{formatDate(currentDate)}</div>
        </div>
    );
};

export default Calendar;