import BookAppointment from "../components/BookAppointment";

export default function BookPage() {
  return (
    <div className="pt-24 px-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Book Appointment
      </h1>
      <BookAppointment />
    </div>
  );
}