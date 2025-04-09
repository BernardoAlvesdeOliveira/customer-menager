import HaircutSelector from "../components/HaircutSelector.jsx";
import ScheduleTable from "../components/ScheduleTable.jsx";
import ClientForm from "../components/ClientForm.jsx";
import "../assets/css/styles.css";

import { useState } from "react";

export default function HomePage() {
  const [step, setStep] = useState(1);
  const [selectedHaircut, setSelectedHaircut] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="main-container">
      {step === 1 && (
        <HaircutSelector
          selectedHaircut={selectedHaircut}
          setSelectedHaircut={setSelectedHaircut}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <ScheduleTable
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <ClientForm
          selectedHaircut={selectedHaircut}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          prevStep={prevStep}
        />
      )}

    </div>
  );
}
