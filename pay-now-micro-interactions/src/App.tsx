import { LayoutGroup } from 'framer-motion';
import Button from './Button';

function App() {
  return (
    <main className="main-container relative flex justify-center gap-4">
      <LayoutGroup>
        <Button status="CAPTURED" />
        <Button status="FAILED" />
      </LayoutGroup>
    </main>
  );
}

export default App;
