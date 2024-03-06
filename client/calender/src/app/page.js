import FullCalendar from './components/FullCalendar';
import ContextWrapper from './context/ContextWrapper';
export default function Home() {
  return (
    <ContextWrapper>
      <FullCalendar />
    </ContextWrapper>
  )
}
