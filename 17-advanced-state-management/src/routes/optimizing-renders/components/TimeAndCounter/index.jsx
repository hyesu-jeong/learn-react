import useClock from '@/hooks/useClock';
import { useCallback } from 'react';
import Counter from '../Counter';
import S from './style.module.css';
import TimeToggler from './TimeToggler';

function TimeAndCounter() {
  const { time, turnOn, onOff } = useClock();

  const handleToggleTime = useCallback(() => onOff((c) => !c), [onOff]);

  const label = `타임 ${turnOn ? '스톱' : '플레이'}`;

  return (
    <div className={S.component}>
      <div role="group" className={S.group}>
        <time>{time}</time>
        <TimeToggler onToggle={handleToggleTime}>{label}</TimeToggler>
      </div>
      <Counter />
    </div>
  );
}

export default TimeAndCounter;
