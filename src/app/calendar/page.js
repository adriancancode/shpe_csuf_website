import Calendar from "../../components/calendar";

export default function CalendarPage() {
    return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <main className='flex flex-col gap-10 mt-11'>
        <h1 className="text-5xl font-bold">Calendar</h1>
        <Calendar/>
      </main>
    </div>
    );
}